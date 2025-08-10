# Deploying Your Portfolio to Netlify

## Current Setup
Your portfolio is now configured for Netlify deployment with serverless functions replacing the Express server.

## Deployment Steps

### Option 1: GitHub + Netlify (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect your settings from `netlify.toml`

3. **Build Settings (should auto-configure):**
   - Build command: `npm run build`
   - Publish directory: `client/dist`
   - Functions directory: `netlify/functions`

### Option 2: Direct Upload

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload to Netlify:**
   - Go to Netlify dashboard
   - Drag and drop your `client/dist` folder to "Deploy manually"

### Option 3: Netlify CLI

1. **Install CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## Key Files Created

- `netlify.toml` - Netlify configuration
- `netlify/functions/` - Serverless functions replacing Express routes
- `build-netlify.sh` - Build script

## API Endpoints

Your API endpoints will be available at:
- `/.netlify/functions/research-projects`
- `/.netlify/functions/publications`
- `/.netlify/functions/experiences`
- `/.netlify/functions/contact-messages`

## Environment Variables

If you need environment variables in production:
1. Go to Site Settings → Environment Variables in Netlify
2. Add your variables (like API keys)

## Troubleshooting

- **Functions not working?** Check the Functions tab in Netlify dashboard for logs
- **Build failing?** Check the Deploys tab for build logs
- **API calls failing?** Ensure your frontend is calling `/.netlify/functions/` endpoints

## Cost
- Free tier: 100GB bandwidth, 300 build minutes/month
- Functions: 125k requests/month free

Your site will be live at `https://YOUR_SITE_NAME.netlify.app`