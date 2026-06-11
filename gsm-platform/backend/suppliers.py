"""
E-Tech Nexus AI - Supplier Integrations
Alibaba, CJ Dropshipping, Zendrop, Spocket
"""

import requests
import json
from typing import Dict, List, Optional
from dataclasses import dataclass

# ===================
# Data Classes
# ===================

@dataclass
class SupplierProduct:
    supplier_id: str
    supplier_name: str
    product_id: str
    name: str
    category: str
    price: float
    currency: str = "USD"
    min_order: int = 1
    stock: int = 0
    lead_time_days: int = 0
    rating: float = 0
    url: str = ""
    image_url: str = ""
    description: str = ""

@dataclass
class Supplier:
    id: str
    name: str
    api_url: str
    api_key: str = ""
    rating: float = 0
    countries: List[str] = None
    categories: List[str] = None
    
    def __post_init__(self):
        if self.countries is None:
            self.countries = []
        if self.categories is None:
            self.categories = []

# ===================
# Suppliers Configuration
# ===================

SUPPLIERS = {
    "alibaba": Supplier(
        id="alibaba",
        name="Alibaba.com",
        api_url="https://gw-api.alibaba.com/product/router/rest/API3",
        countries=["CN", "HK", "US"],
        categories=["electronics", "phones", "accessories"]
    ),
    "cj": Supplier(
        id="cj",
        name="CJ Dropshipping",
        api_url="https://developers.cjdropshipping.com/api/short-url",
        countries=["CN", "US", "EU"],
        categories=["dropshipping", "electronics"]
    ),
    "zendrop": Supplier(
        id="zendrop",
        name="Zendrop",
        api_url="https://api.zendrop.com/v2",
        countries=["US", "EU"],
        categories=["dropshipping", "accessories"]
    ),
    "spocket": Supplier(
        id="spocket",
        name="Spocket",
        api_url="https://api.spocket.com/v1",
        countries=["US", "EU", "UK"],
        categories=["dropshipping", "wholesale"]
    )
}

# ===================
# Supplier Client
# ===================

class SupplierClient:
    """Base client for supplier APIs"""
    
    def __init__(self, supplier: Supplier):
        self.supplier = supplier
    
    def search_products(self, query: str, category: str = "") -> List[SupplierProduct]:
        """Search products from supplier"""
        # In production, this would call the actual API
        # For demo, return mock data
        return self._mock_search(query, category)
    
    def get_product(self, product_id: str) -> Optional[SupplierProduct]:
        """Get product details"""
        return self._mock_product(product_id)
    
    def check_stock(self, product_id: str) -> Dict:
        """Check real-time stock"""
        return {"product_id": product_id, "stock": 100, "available": True}
    
    def create_order(self, items: List[Dict]) -> Dict:
        """Create order with supplier"""
        return {"order_id": "ORD-" + str(hash(str(items))), "status": "pending"}
    
    def _mock_search(self, query: str, category: str) -> List[SupplierProduct]:
        """Mock search results"""
        mock_products = [
            SupplierProduct(
                supplier_id=self.supplier.id,
                supplier_name=self.supplier.name,
                product_id="P001",
                name="iPhone 15 Screen OLED",
                category="ecran",
                price=75.00,
                stock=500,
                lead_time=7,
                rating=4.5,
                url="https://aliexpress.com/item/100500"
            ),
            SupplierProduct(
                supplier_id=self.supplier.id,
                supplier_name=self.supplier.name,
                product_id="P002",
                name="iPhone 15 Battery Original",
                category="batterie",
                price=28.00,
                stock=1000,
                lead_time=5,
                rating=4.8,
                url="https://aliexpress.com/item/100501"
            ),
            SupplierProduct(
                supplier_id=self.supplier.id,
                supplier_name=self.supplier.name,
                product_id="P003",
                name="Samsung S24 Screen AMOLED",
                category="ecran",
                price=95.00,
                stock=300,
                lead_time=10,
                rating=4.3,
                url="https://aliexpress.com/item/100502"
            ),
        ]
        
        # Filter by query
        if query:
            query_lower = query.lower()
            mock_products = [p for p in mock_products if query_lower in p.name.lower()]
        
        # Filter by category
        if category:
            mock_products = [p for p in mock_products if p.category == category]
        
        return mock_products
    
    def _mock_product(self, product_id: str) -> Optional[SupplierProduct]:
        for p in self._mock_search("", ""):
            if p.product_id == product_id:
                return p
        return None


# ===================
# Aggregator
# ===================

class SupplierAggregator:
    """Aggregate multiple suppliers for best prices"""
    
    def __init__(self):
        self.clients = {sid: SupplierClient(sup) for sid, sup in SUPPLIERS.items()}
    
    def search_all(self, query: str, category: str = "") -> List[SupplierProduct]:
        """Search across all suppliers"""
        results = []
        
        for supplier_id, client in self.clients.items():
            products = client.search_products(query, category)
            for p in products:
                p.supplier_id = supplier_id
            results.extend(products)
        
        # Sort by price
        results.sort(key=lambda p: p.price)
        return results
    
    def get_best_price(self, product_name: str) -> Dict:
        """Get best price across suppliers"""
        results = self.search_all(product_name)
        
        if not results:
            return {"error": "Product not found"}
        
        best = results[0]
        alternatives = results[1:4] if len(results) > 1 else []
        
        return {
            "product": best.name,
            "best_price": best.price,
            "best_supplier": best.supplier_name,
            "best_lead_time": best.lead_time_days,
            "alternatives": [
                {
                    "supplier": p.supplier_name,
                    "price": p.price,
                    "lead_time": p.lead_time_days,
                    "rating": p.rating
                }
                for p in alternatives
            ]
        }
    
    def compare_suppliers(self, category: str = "") -> List[Dict]:
        """Compare suppliers by category"""
        comparison = []
        
        for supplier_id, client in self.clients.items():
            products = client.search_products("", category)
            if products:
                avg_price = sum(p.price for p in products) / len(products)
                min_price = min(p.price for p in products)
                max_stock = max(p.stock for p in products)
                
                comparison.append({
                    "supplier": SUPPLIERS[supplier_id].name,
                    "products_count": len(products),
                    "avg_price": round(avg_price, 2),
                    "min_price": min_price,
                    "max_stock": max_stock,
                    "rating": SUPPLIERS[supplier_id].rating
                })
        
        # Sort by rating
        comparison.sort(key=lambda x: x["rating"], reverse=True)
        return comparison


# ===================
# Singleton
# ===================

supplier_aggregator = SupplierAggregator()


# ===================
# API Functions
# ===================

def search_products(query: str = "", category: str = "") -> List[Dict]:
    """Search products across all suppliers"""
    products = supplier_aggregator.search_all(query, category)
    return [
        {
            "supplier": p.supplier_name,
            "product_id": p.product_id,
            "name": p.name,
            "category": p.category,
            "price": p.price,
            "stock": p.stock,
            "lead_time_days": p.lead_time_days,
            "rating": p.rating,
            "url": p.url
        }
        for p in products
    ]

def get_best_price(product_name: str) -> Dict:
    """Get best price for a product"""
    return supplier_aggregator.get_best_price(product_name)

def compare_suppliers(category: str = "") -> List[Dict]:
    """Compare suppliers"""
    return supplier_aggregator.compare_suppliers(category)


if __name__ == "__main__":
    # Test
    print("Testing supplier search...")
    
    results = search_products("screen")
    print(f"\nFound {len(results)} products:")
    for r in results[:3]:
        print(f"  - {r['name']} @ ${r['price']} from {r['supplier']}")
    
    print("\nBest price for iPhone screen:")
    best = get_best_price("iPhone Screen")
    print(json.dumps(best, indent=2))
    
    print("\nSupplier comparison:")
    comp = compare_suppliers("ecran")
    print(json.dumps(comp, indent=2))