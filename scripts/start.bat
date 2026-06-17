@echo off
title E-Tech Boutique
color 0A

echo ==============================
echo   E-Tech - Demarrage automatique
echo ==============================

:: Frontend
start "Frontend - http://localhost:8080" cmd /k "cd C:\Users\AUGUSTIN\OneDrive\Documents\E-Tech\frontend && http-server -p 8080"

timeout /t 3

:: Backend
start "Backend - http://localhost:3001" cmd /k "cd C:\Users\AUGUSTIN\OneDrive\Documents\E-Tech\backend && npm start"

timeout /t 3

:: N8N
start "N8N - http://localhost:5678" cmd /k "n8n"

echo.
echo ==============================
echo   E-Tech demarre!
echo ==============================
echo.
echo Frontend: http://localhost:8080
echo Backend:  http://localhost:3001
echo N8N:      http://localhost:5678
echo.
pause