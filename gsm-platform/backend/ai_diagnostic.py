"""
E-Tech Nexus AI - Ollama AI Integration
Real AI-powered diagnostics using local LLM
"""

import json
import requests
from typing import Dict, List, Optional
import os

# Ollama configuration
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
DEFAULT_MODEL = os.getenv("OLLAMA_MODEL", "llama3.2")

# ===================
# Diagnostic System Prompt
# ===================

DIAGNOSTIC_SYSTEM_PROMPT = """Tu es l'expert technique E-Tech Nexus AI en diagnostic de smartphones GSM.

Ton rôle:
- Analyser les problèmes signalés par l'utilisateur
- Déterminer les composants affected (batterie, écran, caméra, réseau, etc.)
- Estimer les coûts de réparation
- Recommander les meilleures solutions

Règles:
- Sois précis et technique
- Donne des coûts réalistes en USD
- Explique chaque problème identifié
- Utilise un format structuré

Catégories de problèmes:
- BATTERIE: autonomie faible, charge lente, gonflement
- ÉCRAN: pixels morts, tactile cassé, fissure
- CAMÉRA: autofocus, flash, capteurs
- RÉSEAU: pas de signal, WiFi, Bluetooth
- TACTILE: ne répond pas, zones mortes
- CHARGE: ne charge pas, charge lente
- SON: pas de son, micro, haut-parleur
- CAPTEURS: GPS, gyroscope, accéléromètre

Réponds en JSON avec ce format:
{
  "overall_health": "Excellent/Réparation recommandée/Réparation nécessaire",
  "battery_health": 0-100,
  "components": {
    "battery": {"status": "OK/Warning/À remplacer", "issue": "", "severity": "", "cost": 0},
    "ecran": {"status": "OK/Warning/À remplacer", "issue": "", "severity": "", "cost": 0},
    ...
  },
  "detected_issues": [{"component": "", "issue": "", "severity": "", "cost": 0}],
  "recommendations": [""]
}"""


# ===================
# AI Client
# ===================

class OllamaClient:
    """Client for interacting with Ollama API"""
    
    def __init__(self, base_url: str = OLLAMA_URL):
        self.base_url = base_url
        self.model = DEFAULT_MODEL
    
    def check_health(self) -> bool:
        """Check if Ollama is running"""
        try:
            response = requests.get(f"{self.base_url}/api/tags", timeout=5)
            return response.status_code == 200
        except:
            return False
    
    def list_models(self) -> List[str]:
        """List available models"""
        try:
            response = requests.get(f"{self.base_url}/api/tags", timeout=5)
            if response.status_code == 200:
                data = response.json()
                return [m["name"] for m in data.get("models", [])]
            return []
        except:
            return []
    
    def generate(self, prompt: str, system: str = None, temperature: float = 0.3) -> str:
        """Generate a response from the model"""
        payload = {
            "model": self.model,
            "prompt": prompt,
            "temperature": temperature,
            "stream": False
        }
        
        if system:
            payload["system"] = system
        
        try:
            response = requests.post(
                f"{self.base_url}/api/generate",
                json=payload,
                timeout=120
            )
            
            if response.status_code == 200:
                data = response.json()
                return data.get("response", "")
            else:
                return f"Error: {response.status_code}"
        except Exception as e:
            return f"Error: {str(e)}"


# ===================
# Diagnostic Engine
# ===================

class AIDiagnosticEngine:
    """AI-powered diagnostic engine"""
    
    def __init__(self):
        self.client = OllamaClient()
    
    def is_available(self) -> bool:
        """Check if AI is available"""
        return self.client.check_health()
    
    def analyze(self, device_model: str, imei: str, issues: List[str]) -> Dict:
        """Analyze device issues using AI"""
        
        # Build prompt from issues
        issue_text = ", ".join(issues) if issues else "Aucun problème spécifié"
        
        prompt = f"""Analyse ce smartphone:

Modèle: {device_model}
IMEI: {imei}
Problèmes signalés: {issue_text}

Fais l'analyse et retourne le JSON."""

        # Get AI response
        response = self.client.generate(
            prompt=prompt,
            system=DIAGNOSTIC_SYSTEM_PROMPT,
            temperature=0.3
        )
        
        # Try to parse JSON from response
        try:
            # Find JSON in response
            start = response.find('{')
            end = response.rfind('}') + 1
            
            if start >= 0 and end > start:
                json_str = response[start:end]
                result = json.loads(json_str)
            else:
                result = self._fallback_analysis(device_model, issues)
        except:
            result = self._fallback_analysis(device_model, issues)
        
        return result
    
    def _fallback_analysis(self, device_model: str, issues: List[str]) -> Dict:
        """Fallback when AI is not available"""
        detected_issues = []
        components = {}
        total_cost = 0
        
        # Simple keyword matching
        issue_keywords = {
            "battery": {"component": "battery", "status": "À remplacer", "cost": 35},
            "batterie": {"component": "battery", "status": "À remplacer", "cost": 35},
            "ecran": {"component": "ecran", "status": "À remplacer", "cost": 89},
            "screen": {"component": "ecran", "status": "À remplacer", "cost": 89},
            "camera": {"component": "camera", "status": "À remplacer", "cost": 45},
            "reseau": {"component": "reseau", "status": "À réparer", "cost": 55},
            "network": {"component": "reseau", "status": "À réparer", "cost": 55},
            "charge": {"component": "charge", "status": "À vérifier", "cost": 25},
            "tactile": {"component": "tactile", "status": "À remplacer", "cost": 65},
            "son": {"component": "son", "status": "À vérifier", "cost": 30},
            "capteurs": {"component": "capteurs", "status": "À vérifier", "cost": 40},
        }
        
        for issue in issues:
            issue_lower = issue.lower()
            for keyword, info in issue_keywords.items():
                if keyword in issue_lower:
                    detected_issues.append({
                        "component": info["component"],
                        "issue": f"Problème {info['component']}",
                        "severity": "medium" if info["cost"] < 50 else "high",
                        "estimated_cost": info["cost"]
                    })
                    components[info["component"]] = {
                        "status": info["status"],
                        "issue": f"Problème détecté",
                        "severity": "medium" if info["cost"] < 50 else "high",
                        "cost": info["cost"]
                    }
                    total_cost += info["cost"]
        
        if not detected_issues:
            overall_health = "Excellent"
            battery_health = 95
        elif total_cost > 100:
            overall_health = "Réparation nécessaire"
            battery_health = 50
        else:
            overall_health = "Réparation recommandée"
            battery_health = 70
        
        return {
            "overall_health": overall_health,
            "battery_health": battery_health,
            "components": components,
            "detected_issues": detected_issues,
            "recommendations": [f"Réparer {len(detected_issues)} composant(s)" for _ in detected_issues] if detected_issues else ["Aucun problème détecté"],
            "ai_powered": False
        }
    
    def get_repair_guide(self, component: str, model: str) -> str:
        """Get repair guide for a component"""
        prompt = f"""Donne un guide de réparation pour {component} du {model}.

Inclue:
- Outils nécessaires
- Étapes détaillées
- Précautions de sécurité
- Temps estimé

Sois précis et technique."""
        
        return self.client.generate(prompt, temperature=0.5)


# ===================
# Singleton instance
# ===================

ai_engine = AIDiagnosticEngine()


# ===================
# Helper function
# ===================

def get_ai_status() -> Dict:
    """Get AI system status"""
    available = ai_engine.is_available()
    models = []
    
    if available:
        try:
            models = ai_engine.client.list_models()
        except:
            pass
    
    return {
        "available": available,
        "models": models,
        "model": DEFAULT_MODEL,
        "url": OLLAMA_URL
    }


if __name__ == "__main__":
    # Test the AI
    print("Testing Ollama connection...")
    
    status = get_ai_status()
    print(f"AI Available: {status['available']}")
    print(f"Models: {status['models']}")
    
    if status['available']:
        # Test diagnostic
        result = ai_engine.analyze(
            device_model="iPhone 15 Pro",
            imei="123456789012345",
            issues=["battery", "ecran"]
        )
        print(f"\nDiagnostic Result:")
        print(json.dumps(result, indent=2))