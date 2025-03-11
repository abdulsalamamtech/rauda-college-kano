# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b1eae083-5013-487b-9f15-7d27cb289934

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b1eae083-5013-487b-9f15-7d27cb289934) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```


### Deploy a Next.js App with Node.js to shared hosting (cpanel)
Add homepage domain name to the package.json file
```json
  "homepage": "https://domain.edu.ng/",
```
```sh
    # For react.js
    npm run build

    # For next.js
    next build && next export

    zip -r dist.zip dist/
```
Login to cPanel.

Open File Manager.

Navigate to public_html/ (this is your website’s root folder).

Click Upload, select your dist.zip file, and wait for the upload to complete.
Once uploaded, extract the dist.zip file.

Move the contents of the extracted dist/ folder into public_html/:
Ensure that index.html and the assets/ folder are directly inside public_html/.

If your app uses routing (e.g., React Router), you must set up .htaccess to ensure deep links work.

In File Manager, open or create a .htaccess file inside public_html/.
Add the following rules
```sh
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
```
Test Your Website

Open your browser and visit your domain (https://yourdomain.com).
If everything is correct, your Vite app should load.

If you see a 404 error, try:
    - Clearing your browser cache.
    - Checking if .htaccess is correctly configured.
    - Ensuring all files are properly inside public_html/.

✅ Your Vite (React/Next.js) app is now live on shared hosting! 🎉🚀


**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b1eae083-5013-487b-9f15-7d27cb289934) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
