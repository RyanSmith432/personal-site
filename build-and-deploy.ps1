# build-and-deploy.ps1
cd D:\Repos\personal-site
npm run build
git add -f out
git commit -m "auto-build"
git push