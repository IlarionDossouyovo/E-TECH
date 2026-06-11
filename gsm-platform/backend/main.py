"""
E-Tech GSM Platform V2 - Backend API
FastAPI + PostgreSQL + Redis + Qdrant
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
import uuid

# ===================
# Configuration
# ===================

app = FastAPI(
    title="E-Tech Nexus AI Platform",
    description="AI-powered GSM diagnostics, repair, and marketplace platform",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===================
# Models
# ===================

class Client(BaseModel):
    id: Optional[str] = None
    name: str
    email: EmailStr
    phone: str
    address: Optional[str] = None
    created_at: Optional[datetime] = None

class TicketCreate(BaseModel):
    client_id: str
    device_model: str
    imei: str
    issue_type: str
    description: str
    estimated_price: Optional[float] = None

class Ticket(BaseModel):
    id: str
    client_id: str
    device_model: str
    imei: str
    issue_type: str
    description: str
    status: str = "pending"
    estimated_price: Optional[float] = None
    actual_price: Optional[float] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None

class DiagnosticRequest(BaseModel):
    device_model: str
    imei: str
    issues: List[str]

class Product(BaseModel):
    id: Optional[str] = None
    name: str
    category: str
    sku: str
    price: float
    cost: float
    stock: int = 0
    supplier: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None

# ===================
# In-Memory Database
# ===================

clients_db = {}
tickets_db = {}
products_db = {}
diagnostics_db = {}

# ===================
# Health Check
# ===================

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "E-Tech Nexus AI Platform",
        "version": "2.0.0",
        "modules": {
            "diagnostic": "AI-powered",
            "repair": "Schematics",
            "crm": "Active",
            "marketplace": "Ready",
            "suppliers": "Integration",
            "ai_agents": "6 agents"
        },
        "timestamp": datetime.now().isoformat()
    }

# ===================
# Clients
# ===================

@app.post("/api/clients")
async def create_client(client: Client):
    client_id = str(uuid.uuid4())
    client.id = client_id
    client.created_at = datetime.now()
    clients_db[client_id] = client.dict()
    return {"id": client_id, "client": client}

@app.get("/api/clients")
async def list_clients():
    return list(clients_db.values())

@app.get("/api/clients/{client_id}")
async def get_client(client_id: str):
    if client_id not in clients_db:
        raise HTTPException(status_code=404, detail="Client not found")
    return clients_db[client_id]

# ===================
# Tickets
# ===================

@app.post("/api/tickets")
async def create_ticket(ticket: TicketCreate):
    ticket_id = str(uuid.uuid4())
    now = datetime.now()
    new_ticket = {
        "id": ticket_id,
        "client_id": ticket.client_id,
        "device_model": ticket.device_model,
        "imei": ticket.imei,
        "issue_type": ticket.issue_type,
        "description": ticket.description,
        "status": "pending",
        "estimated_price": ticket.estimated_price,
        "actual_price": None,
        "created_at": now,
        "updated_at": now,
        "completed_at": None
    }
    tickets_db[ticket_id] = new_ticket
    return {"id": ticket_id, "ticket": new_ticket}

@app.get("/api/tickets")
async def list_tickets(status: Optional[str] = None):
    tickets = list(tickets_db.values())
    if status:
        tickets = [t for t in tickets if t["status"] == status]
    return tickets

@app.get("/api/tickets/{ticket_id}")
async def get_ticket(ticket_id: str):
    if ticket_id not in tickets_db:
        raise HTTPException(status_code=404, detail="Ticket not found")
    return tickets_db[ticket_id]

@app.patch("/api/tickets/{ticket_id}/status")
async def update_ticket_status(ticket_id: str, status: str):
    if ticket_id not in tickets_db:
        raise HTTPException(status_code=404, detail="Ticket not found")
    tickets_db[ticket_id]["status"] = status
    tickets_db[ticket_id]["updated_at"] = datetime.now()
    if status == "completed":
        tickets_db[ticket_id]["completed_at"] = datetime.now()
    return tickets_db[ticket_id]

# ===================
# Diagnostic AI
# ===================

@app.post("/api/diagnostic")
async def run_diagnostic(request: DiagnosticRequest):
    """AI-powered diagnostic"""
    diagnostic_id = str(uuid.uuid4())
    now = datetime.now()
    
    issues_detected = []
    recommendations = []
    
    # Battery analysis
    battery_health = 85
    if "battery" in request.issues or "autonomie" in str(request.issues).lower():
        battery_health = 65
        issues_detected.append({
            "component": "battery",
            "issue": "Capacité réduite",
            "severity": "medium",
            "estimated_cost": 25
        })
        recommendations.append("Remplacer la batterie")
    
    # Screen analysis
    if "ecran" in str(request.issues).lower() or "screen" in str(request.issues).lower():
        issues_detected.append({
            "component": "screen",
            "issue": "Pixels morts",
            "severity": "high",
            "estimated_cost": 80
        })
        recommendations.append("Remplacer l'écran")
    
    # Network analysis
    if "reseau" in str(request.issues).lower():
        issues_detected.append({
            "component": "network",
            "issue": "Antenne LTE",
            "severity": "high",
            "estimated_cost": 45
        })
        recommendations.append("Réparer l'antenne")
    
    # Overall health
    if not issues_detected:
        overall_health = "Excellent"
    elif any(i["severity"] == "high" for i in issues_detected):
        overall_health = "Réparation nécessaire"
    else:
        overall_health = "Réparation recommandée"
    
    result = {
        "id": diagnostic_id,
        "device_model": request.device_model,
        "imei": request.imei,
        "overall_health": overall_health,
        "battery_health": battery_health,
        "screen_status": "OK" if not any(i["component"] == "screen" for i in issues_detected) else "À remplacer",
        "camera_status": "OK",
        "network_status": "OK" if not any(i["component"] == "network" for i in issues_detected) else "À réparer",
        "sensors_status": "OK",
        "detected_issues": issues_detected,
        "recommendations": recommendations,
        "created_at": now
    }
    
    diagnostics_db[diagnostic_id] = result
    return result

@app.get("/api/diagnostic/{diagnostic_id}")
async def get_diagnostic(diagnostic_id: str):
    if diagnostic_id not in diagnostics_db:
        raise HTTPException(status_code=404, detail="Diagnostic not found")
    return diagnostics_db[diagnostic_id]

# ===================
# Products
# ===================

@app.post("/api/products")
async def create_product(product: Product):
    product_id = str(uuid.uuid4())
    product.id = product_id
    products_db[product_id] = product.dict(exclude={"id"})
    return {"id": product_id, "product": product}

@app.get("/api/products")
async def list_products(category: Optional[str] = None):
    products = list(products_db.values())
    if category:
        products = [p for p in products if p["category"] == category]
    return products

@app.get("/api/products/{product_id}")
async def get_product(product_id: str):
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Product not found")
    return products_db[product_id]

# ===================
# Stats
# ===================

@app.get("/api/stats")
async def get_stats():
    total_tickets = len(tickets_db)
    completed = len([t for t in tickets_db.values() if t["status"] == "completed"])
    pending = len([t for t in tickets_db.values() if t["status"] == "pending"])
    in_progress = len([t for t in tickets_db.values() if t["status"] == "in_progress"])
    
    total_revenue = sum(t.get("actual_price", 0) for t in tickets_db.values() if t["status"] == "completed")
    
    return {
        "tickets": {
            "total": total_tickets,
            "completed": completed,
            "pending": pending,
            "in_progress": in_progress
        },
        "clients": len(clients_db),
        "products": len(products_db),
        "diagnostics": len(diagnostics_db),
        "revenue": total_revenue,
        "platform": "E-Tech Nexus AI"
    }

# ===================
# Main
# ===================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)