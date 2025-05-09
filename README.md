# Aivancely Website

A React TypeScript website built with Vite and TailwindCSS.

## Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aivancely-website.git
   cd aivancely-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the website in development mode.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deploying to Render.com

### Setup

1. Create a new account or log in to [Render.com](https://render.com)

2. From the Render dashboard, click on "New" and select "Static Site"

3. Connect your GitHub repository or use the manual deploy option

4. Configure the following settings:
   - **Name**: Choose a name for your site (e.g., "aivancely-website")
   - **Branch**: The branch you want to deploy (e.g., `main` or `master`)
   - **Build Command**: `npm run build` or `yarn build`
   - **Publish Directory**: `dist`

5. Click "Create Static Site"

### Environment Variables

If your application requires environment variables, you can add them in the Render dashboard:

1. Go to your static site's dashboard
2. Click on "Environment" in the left sidebar
3. Add your environment variables as needed

### Custom Domain (Optional)

To configure a custom domain:

1. Go to your static site's dashboard
2. Click on "Settings"
3. Scroll to the "Custom Domain" section
4. Click "Add Custom Domain" and follow the instructions

### Continuous Deployment

Render automatically deploys your site when you push changes to the configured branch. You can also manually trigger deployments from the Render dashboard.

## Project Structure

```
aivancely-website/
├── dist/             # Production build output
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── styles/       # CSS/TailwindCSS styles
│   ├── App.tsx       # Main App component
│   ├── main.tsx      # Entry point
│   └── ...
├── .gitignore
├── index.html        # HTML entry point
├── package.json      # Project dependencies and scripts
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## License

[Specify your license information here] 