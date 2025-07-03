# Netlify Deployment Setup Guide

This guide will help you deploy your Charlie Carpenter portfolio to Netlify with working contact forms.

## Prerequisites

- GitHub account with your portfolio repository
- Netlify account (free at [netlify.com](https://netlify.com))

## Step 1: Prepare Your Repository

1. **Commit all changes to your repository:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment with contact forms"
   git push origin main
   ```

## Step 2: Deploy to Netlify

### Option A: GitHub Integration (Recommended)

1. **Log in to Netlify** at [app.netlify.com](https://app.netlify.com)

2. **Connect your GitHub repository:**
   - Click "New site from Git"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your `charliecarpenter15.github.io` repository

3. **Configure build settings:**
   - **Branch to deploy:** `main`
   - **Build command:** Leave empty (static site)
   - **Publish directory:** Leave empty (root directory)
   - Click "Deploy site"

4. **Your site will be deployed!** Netlify will provide you with a URL like:
   `https://amazing-name-123456.netlify.app`

### Option B: Drag and Drop

1. **Create a zip file** of your project (excluding `.git` folder)
2. **Drag and drop** the zip file to the Netlify dashboard
3. **Your site will be deployed immediately**

## Step 3: Configure Custom Domain (Optional)

1. **In your Netlify dashboard:**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter your domain name (e.g., `charliecarpenter.com`)

2. **Update DNS settings:**
   - Add a CNAME record pointing to your Netlify URL
   - Or use Netlify DNS for easier management

## Step 4: Set Up Contact Form Notifications

1. **Configure form notifications:**
   - Go to "Site settings" → "Forms"
   - Click "Form notifications"
   - Add email notification to `me@charliecarpenter.com`

2. **Set up Slack notifications (optional):**
   - Add Slack webhook for instant notifications
   - Configure custom messages

## Step 5: Enable Form Spam Protection

1. **Netlify automatically includes:**
   - Honeypot field protection
   - reCAPTCHA v2 (can be enabled in settings)
   - Akismet spam filtering

2. **To enable reCAPTCHA:**
   - Go to "Site settings" → "Forms"
   - Enable "reCAPTCHA 2"
   - Get keys from Google reCAPTCHA console

## Step 6: Set Up Continuous Deployment

**Your site will automatically redeploy when you push to GitHub!**

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Netlify automatically rebuilds and deploys**

## Form Submission Workflow

When someone submits your contact form:

1. **Form data is captured** by Netlify
2. **User is redirected** to `thank-you.html`
3. **You receive email notification** with form details
4. **Form data is stored** in Netlify dashboard (Site settings → Forms)

## Environment Variables (If Needed)

For future API integrations:

1. **Go to Site settings → Environment variables**
2. **Add variables like:**
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

## Monitoring and Analytics

1. **Enable Netlify Analytics:**
   - Go to "Site settings" → "Analytics"
   - Enable for traffic insights

2. **Add Google Analytics (optional):**
   - Add GA4 tracking code to your HTML
   - Monitor visitor behavior

## Custom Error Pages

Your site now includes:
- **Custom 404 page** (`404.html`)
- **Thank you page** (`thank-you.html`)
- **Proper redirects** via `netlify.toml`

## Security Features Enabled

- **HTTPS by default** (Let's Encrypt SSL)
- **Security headers** (XSS protection, content sniffing protection)
- **Spam protection** for forms
- **Asset optimization** and caching

## Useful Netlify Features

1. **Deploy previews:** Every pull request gets a preview URL
2. **Branch deploys:** Deploy different branches for testing
3. **Functions:** Add serverless functions for advanced features
4. **Edge handlers:** Modify requests/responses at the edge

## Troubleshooting

### Form Not Working
- Check form has `data-netlify="true"`
- Ensure `name` attribute on form element
- Verify hidden `form-name` input field

### Site Not Updating
- Check build logs in Netlify dashboard
- Verify GitHub webhook is active
- Clear cache and hard refresh

### Custom Domain Issues
- Check DNS propagation (can take 24-48 hours)
- Verify CNAME/A records are correct
- Enable "Force HTTPS" in domain settings

## Support

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community:** [community.netlify.com](https://community.netlify.com)
- **Status Page:** [netlifystatus.com](https://netlifystatus.com)

---

## Quick Start Commands

```bash
# Clone your repo (if needed)
git clone https://github.com/charliecarpenter15/charliecarpenter15.github.io.git

# Navigate to project
cd charliecarpenter15.github.io

# Make changes and deploy
git add .
git commit -m "Your commit message"
git push origin main
```

**Your portfolio is now live with working contact forms! 🚀** 