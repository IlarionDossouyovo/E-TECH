# ============================================
# E-TECH GLOBAL - AUTO LAUNCHER
# ============================================

@echo off
title E-Tech Global Launcher
color 0a

echo.
echo ========================================
echo   E-TECH GLOBAL - AUTO LAUNCHER
echo ========================================
echo.

REM ============================================
REM 1. MISE A JOUR DU PROJET
REM ============================================
echo [1/4] Mise a jour du projet...
cd /d "%~dp0"
git fetch origin
git pull origin main
if errorlevel 1 (
    echo Erreur de mise a jour. Continuation avec version locale...
)

REM ============================================
REM 2. INSTALLATION DEPENDANCES
REM ============================================
echo.
echo [2/4] Installation des dependances backend...
cd /d "%~dp0backend"
if not exist node_modules (
    npm install
) else (
    echo Dependances deja installees
)

REM ============================================
REM 3. COPIE .ENV
REM ============================================
echo.
echo [3/4] Configuration...
if not exist .env (
    copy "..\configs\env.template" .env
    echo Fichier .env cree - Veuillez le configurer!
    notepad .env
)

REM ============================================
REM 4. LANCEMENT SERVEURS
REM ============================================
echo.
echo [4/4] Lancement des serveurs...
echo.
echo ========================================
echo   SERVEURS LANCES!
echo ========================================
echo.
echo Backend API: http://localhost:3001
echo Frontend:   http://localhost:8081 (autre terminal)
echo.
echo Appuyez sur une touche pour arreter...
pause >nul
