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

## Deploy to GitHub Pages

This repo is configured to deploy to GitHub Pages on each push to `main`.

1. Ensure repository is public (or configure Pages for private repo with appropriate plan).
2. In GitHub: Settings → Pages → Build and deployment → Source: GitHub Actions.
3. Push to `main`. The `deploy.yml` workflow will build and publish `dist/`.
4. Your site will be available at:
   https://mrabdbiya.github.io/retro-portfolio/
