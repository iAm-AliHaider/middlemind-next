# MiddleMind Deploy Script
# Run after build passes: powershell -File deploy.ps1

Write-Host "Building..."
$build = npx next build 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build FAILED" -ForegroundColor Red
    $build | Select-String "error|Error" | Select -First 20
    exit 1
}

Write-Host "Build passed. Committing..."
git add -A
git commit -m "feat: MiddleMind Next.js redesign"
git push origin HEAD:master

Write-Host "Deploying to Vercel..."
vercel --prod --yes

Write-Host "Done! Check https://middlemind-next.vercel.app"
