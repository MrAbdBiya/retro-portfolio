<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SKwWmyEpFZU6sqt73GYz0YIw0glHUM8n

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

Option A — One-click (web):
- Import the repo at https://vercel.com/new
- Framework preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `GEMINI_API_KEY`

Option B — CLI (Windows PowerShell):
```powershell
npm i -g vercel
vercel login
vercel --prod
```
When prompted:
- Build Command: `npm run build`
- Output Directory: `dist`
- Set `GEMINI_API_KEY` in the Vercel dashboard (Project Settings → Environment Variables) and redeploy.
