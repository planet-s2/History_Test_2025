ay# Deploying to GitHub Pages

This guide will walk you through the steps to deploy your flashcard website to GitHub Pages.

## Prerequisites

- A GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer (already done)
- Your project files (already prepared with Git initialization)

## Step 1: Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in to your account
2. Click on the '+' icon in the top right corner and select 'New repository'
3. Name your repository `Eleni_History_2025` (or any name you prefer)
4. Add a description (optional)
5. Keep the repository public if you want anyone to access your flashcards
6. Do NOT initialize the repository with a README, .gitignore, or license as we've already initialized the repository locally
7. Click 'Create repository'

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, you'll see instructions on GitHub. Follow these commands in your terminal:

```bash
# You've already initialized the repository and committed your files
# Now connect your local repository to the GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/Eleni_History_2025.git

# Push your changes to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on 'Settings' (tab at the top of the repository)
3. Scroll down to the 'GitHub Pages' section
4. Under 'Source', select 'main' branch
5. Click 'Save'

## Step 4: Access Your Deployed Website

After a few minutes, your website will be published. You can access it at:

```
https://YOUR_USERNAME.github.io/Eleni_History_2025/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Updating Your Website

Whenever you want to update your website, make changes to your local files, then:

```bash
# Add all changed files to staging
git add .

# Commit your changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Your website will automatically update after a few minutes.

## Troubleshooting

- If your website doesn't appear, check the GitHub Pages section in your repository settings to ensure it's properly configured
- Make sure your repository is public if you want others to access your website
- If images or styles aren't loading, check that all file paths are correct