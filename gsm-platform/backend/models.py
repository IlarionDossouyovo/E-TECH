"""
E-Tech Nexus AI - Database Models
SQLAlchemy with PostgreSQL
"""

from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime
import enum
import os

# Database URL
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/etech")

# Create engine
engine = create_engine(DATABASE_URL, echo=False)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Enums
class TicketStatus(str, enum.Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class IssueSeverity(str, enum.Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

# ===================
# Models
# ===================

class Client(Base):
    __tablename__ = "clients"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True)
    phone = Column(String(50))
    address = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    tickets = relationship("Ticket", back_populates="client")

class Device(Base):
    __tablename__ = "devices"
    
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    brand = Column(String(50))  # Apple, Samsung, etc.
    model = Column(String(100))  # iPhone 15 Pro
    imei = Column(String(15))
    serial_number = Column(String(100))
    color = Column(String(50))
    storage = Column(String(20))  # 128GB, 256GB
    purchase_date = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    tickets = relationship("Ticket", back_populates="device")

class Ticket(Base):
    __tablename__ = "tickets"
    
    id = Column(Integer, primary_key=True, index=True)
    ticket_number = Column(String(50), unique=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    device_id = Column(Integer, ForeignKey("devices.id"))
    issue_type = Column(String(100))  # screen, battery, etc.
    description = Column(Text)
    status = Column(Enum(TicketStatus), default=TicketStatus.PENDING)
    priority = Column(Integer, default=3)  # 1=urgent, 5=low
    estimated_price = Column(Float)
    actual_price = Column(Float)
    diagnostic_id = Column(Integer, ForeignKey("diagnostics.id"))
    assigned_technician = Column(String(255))
    notes = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    
    # Relationships
    client = relationship("Client", back_populates="tickets")
    device = relationship("Device", back_populates="tickets")
    diagnostic = relationship("Diagnostic", back_populates="ticket")
    invoice_items = relationship("InvoiceItem", back_populates="ticket")

class Diagnostic(Base):
    __tablename__ = "diagnostics"
    
    id = Column(Integer, primary_key=True, index=True)
    device_model = Column(String(100))
    imei = Column(String(15))
    overall_health = Column(String(50))
    battery_health = Column(Integer)
    battery_cycles = Column(Integer)
    screen_status = Column(String(50))
    camera_status = Column(String(50))
    network_status = Column(String(50))
    sensors_status = Column(String(50))
    audio_status = Column(String(50))
    storage_status = Column(String(50))
    detected_issues = Column(Text)  # JSON string
    recommendations = Column(Text)  # JSON string
    ai_analysis = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    ticket = relationship("Ticket", back_populates="diagnostic", uselist=False)

class Product(Base):
    __tablename__ = "products"
    
    id = Column(Integer, primary_key=True, index=True)
    sku = Column(String(50), unique=True, index=True)
    name = Column(String(255), nullable=False)
    category = Column(String(100))  # screen, battery, camera, etc.
    brand = Column(String(100))  # Apple, Samsung, etc.
    compatible_models = Column(Text)  # JSON string
    description = Column(Text)
    price = Column(Float, nullable=False)
    cost = Column(Float)
    stock = Column(Integer, default=0)
    min_stock = Column(Integer, default=5)
    supplier_id = Column(Integer, ForeignKey("suppliers.id"))
    location = Column(String(50))  # Warehouse location
    image_url = Column(String(500))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    supplier = relationship("Supplier", back_populates="products")
    invoice_items = relationship("InvoiceItem", back_populates="product")

class Supplier(Base):
    __tablename__ = "suppliers"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    company = Column(String(255))
    email = Column(String(255))
    phone = Column(String(50))
    address = Column(Text)
    country = Column(String(100))
    rating = Column(Float, default=0)  # 0-5
    lead_time_days = Column(Integer)
    min_order_value = Column(Float)
    notes = Column(Text)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    products = relationship("Product", back_populates="supplier")

class Invoice(Base):
    __tablename__ = "invoices"
    
    id = Column(Integer, primary_key=True, index=True)
    invoice_number = Column(String(50), unique=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    ticket_id = Column(Integer, ForeignKey("tickets.id"), nullable=True)
    subtotal = Column(Float)
    tax = Column(Float)
    discount = Column(Float, default=0)
    total = Column(Float, nullable=False)
    payment_method = Column(String(50))  # cash, card, wave, moov
    payment_status = Column(String(50))  # pending, paid, refunded
    notes = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    paid_at = Column(DateTime, nullable=True)
    
    # Relationships
    client = relationship("Client")
    ticket = relationship("Ticket")
    items = relationship("InvoiceItem", back_populates="invoice")

class InvoiceItem(Base):
    __tablename__ = "invoice_items"
    
    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"))
    ticket_id = Column(Integer, ForeignKey("tickets.id"), nullable=True)
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer, default=1)
    unit_price = Column(Float)
    total = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    invoice = relationship("Invoice", back_populates="items")
    ticket = relationship("Ticket", back_populates="invoice_items")
    product = relationship("Product", back_populates="invoice_items")

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(100), unique=True)
    full_name = Column(String(255))
    hashed_password = Column(String(255))
    role = Column(String(50))  # admin, technician, viewer
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

# ===================
# Functions
# ===================

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Create all tables"""
    Base.metadata.create_all(bind=engine)

def create_sample_data():
    """Create sample data for testing"""
    db = SessionLocal()
    
    # Check if data exists
    if db.query(Client).first():
        return
    
    # Create sample client
    client = Client(
        name="Jean Dupont",
        email="jean@example.com",
        phone="+229 XX XX XX XX",
        address="Cotonou, Benin"
    )
    db.add(client)
    db.commit()
    db.refresh(client)
    
    # Create sample device
    device = Device(
        client_id=client.id,
        brand="Apple",
        model="iPhone 15 Pro",
        imei="123456789012345",
        storage="256GB"
    )
    db.add(device)
    db.commit()
    
    db.close()

if __name__ == "__main__":
    init_db()
    create_sample_data()
    print("Database initialized!")