# =====================================================
# deploy.ps1 - Deploy cosmos project len Oracle server
# Chay tu: D:\20261\congngheweb\cosmos\
# Khong can SSH vao server de sua gi ca!
# =====================================================

$ErrorActionPreference = "Stop"

# ============ CAU HINH ============
$SERVER      = "ubuntu@140.245.97.137"
$SSH_KEY     = "C:\Users\DELL\Downloads\ssh-key-2026-09-14.key"
$REMOTE_DIR  = "/home/ubuntu/cosmos-web"
$LOCAL_ROOT  = $PSScriptRoot

# Doc bien tu deploy/.env
$envFile = Join-Path $LOCAL_ROOT "deploy\.env"
if (-not (Test-Path $envFile)) {
    Write-Host "[ERROR] Khong tim thay file deploy/.env" -ForegroundColor Red
    exit 1
}
Get-Content $envFile | ForEach-Object {
    if ($_ -match '^([^#=]+)=(.*)$') {
        Set-Variable -Name $matches[1].Trim() -Value $matches[2].Trim()
    }
}
# ==================================

function Write-Step($msg) { Write-Host "`n>> $msg" -ForegroundColor Cyan }
function Write-OK($msg)   { Write-Host "   [OK] $msg" -ForegroundColor Green }
function Write-Err($msg)  { Write-Host "   [FAIL] $msg" -ForegroundColor Red }

Write-Host "========================================" -ForegroundColor Magenta
Write-Host "  Deploy Cosmos -> $DOMAIN" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta

# 1. Build
Write-Step "Building project (npm run build)..."
Set-Location $LOCAL_ROOT
npm run build
if ($LASTEXITCODE -ne 0) { Write-Err "Build failed"; exit 1 }
Write-OK "Build thanh cong"

# 2. Tao thu muc tren server
Write-Step "Preparing server directory ($REMOTE_DIR)..."
ssh -i $SSH_KEY $SERVER "mkdir -p $REMOTE_DIR/dist"
Write-OK "Thu muc san sang"

# 3. Upload dist
Write-Step "Uploading dist..."
ssh -i $SSH_KEY $SERVER "rm -rf $REMOTE_DIR/dist/*"
scp -i $SSH_KEY -r "$LOCAL_ROOT\dist\*" "${SERVER}:${REMOTE_DIR}/dist/"
Write-OK "Da upload dist"

# 4. Upload configs
Write-Step "Uploading configs..."
scp -i $SSH_KEY "$LOCAL_ROOT\deploy\nginx.conf"         "${SERVER}:${REMOTE_DIR}/nginx.conf"
scp -i $SSH_KEY "$LOCAL_ROOT\deploy\docker-compose.yml" "${SERVER}:${REMOTE_DIR}/docker-compose.yml"
scp -i $SSH_KEY "$LOCAL_ROOT\deploy\.env"               "${SERVER}:${REMOTE_DIR}/.env"
Write-OK "Da upload configs"

# 5. Restart container
Write-Step "Restarting container..."
ssh -i $SSH_KEY $SERVER "cd $REMOTE_DIR && docker compose down --remove-orphans 2>/dev/null; docker compose up -d"
if ($LASTEXITCODE -ne 0) { Write-Err "Docker compose failed"; exit 1 }
Write-OK "Container da restart"

# 6. Status
Write-Step "Checking status..."
ssh -i $SSH_KEY $SERVER "docker ps --filter name=$CONTAINER_NAME --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

Write-Host "`n*** Deploy hoan tat! ***" -ForegroundColor Green
Write-Host "Truy cap: https://$DOMAIN`n" -ForegroundColor Yellow