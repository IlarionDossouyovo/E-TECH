# E-Tech Nexus AI Platform - Dockerfile
FROM python:3.11-slim

# Labels
LABEL maintainer="E-Tech Nexus AI <contact@etechnexus.ai>"
LABEL description="AI-powered GSM diagnostics and repair platform"

# Environment
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy requirements
COPY gsm-platform/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY gsm-platform/backend /app/backend
COPY gsm-platform/*.html /app/

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3001/health || exit 1

# Run application
CMD ["python", "backend/main.py"]