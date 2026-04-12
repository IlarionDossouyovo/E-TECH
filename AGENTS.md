# E-Tech E-Commerce Project - Agent Guide

## Project Overview
- **Project Name**: E-Tech (Boutique E-Commerce Premium d'Électronique Internationale)
- **Type**: E-commerce platform for electronics (Bénin, Africa)
- **Tech Stack**: Wix (frontend), N8N (automation), Anthropic Claude (AI), Google Sheets (database)
- **Launch Date**: Q2 2025

## Tech Stack (Custom - Not Wix)
- **Frontend**: Custom HTML/CSS/JS (Next.js planned)
- **Backend**: API Node.js + N8N
- **Automation**: N8N (self-hosted on VPS)
- **AI**: Anthropic Claude Sonnet 4 (12 agents)
- **Database**: Google Sheets (Phase 1-2), PostgreSQL (future)
- **Integrations**: Stripe, PayPal, Mobile Money (MTN/Moov), DHL, FedEx

## Business Context
- **Location**: Cotonou, Benin
- **Target Markets**: Benin (primary), West Africa, Diaspora (Europe/Americas)
- **Products**: Smartphones, Computers, Accessories, IoT, Audio

## Team Structure
- **Founders**: B-Lyon (ELECTRON Group)
- **Phase 1 Team**: 1 person (founder handles all)
- **Phase 2 Team**: +1 support agent
- **Phase 3 Team**: +3 (support senior, preparator, delivery)

## Core Business Rules
1. **Authenticity**: 100% original products only
2. **Pricing**: Cost+ model with 30-45% margin
3. **Delivery**: 2-3 days (Benin), 5-10 days (international)
4. **Support**: 24/7 AI + human during business hours

## Development Workflow
1. **Configuration (Month 1)**: Site setup, identity, first 50 products
2. **Launch Soft (Month 2)**: First sales, social media
3. **Optimization (Month 3)**: SEO, content, ads testing
4. **Acceleration (Month 4+)**: Paid marketing, stock local

## Key Files
- `configs/env.template` - Environment variables template
- `automation/n8n-workflows/` - N8N workflow JSON files
- `data/google-sheets-templates/` - CSV templates for import
- `docs/` - Project documentation
- `scripts/` - Deployment and setup scripts

## Important Notes
- All APIs require secrets (never commit to git)
- Use multi-currency: FCA (primary), EUR, USD display
- Follow RGPD for EU customer data
- PCI-DSS compliance via Stripe (no local card storage)