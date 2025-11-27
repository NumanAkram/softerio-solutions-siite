@echo off
echo.
echo ========================================
echo    WebP Image Conversion Script
echo ========================================
echo.
echo This will convert all PNG/JPG images to WebP
echo (except Avatar.gif)
echo.
pause

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting conversion process...
call npm run convert-all

echo.
echo ========================================
echo    Conversion Complete!
echo ========================================
echo.
echo Next step: Run "npm run dev" to test your website
echo.
pause

