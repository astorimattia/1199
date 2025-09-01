# 1199 Capital

This repository contains the website for 1199 Capital, including both the main site and archive.

## Local Development Setup

### Prerequisites

1. **Nginx Configuration**: Make sure you have the nginx configuration file at `/usr/local/etc/nginx/conf.d/1199-local.conf` with the following content:

```nginx
upstream  main_site     { server 127.0.0.1:3000; }
upstream  archive_site  { server 127.0.0.1:3001; }

server {
    listen 80;
    server_name 1199capital.com;
    location / { proxy_pass http://main_site; }
}

server {
    listen 80;
    server_name archive.1199capital.com;
    location / { proxy_pass http://archive_site; }
}
```

2. **Hosts File**: Add the following entries to your `/etc/hosts` file:
```
127.0.0.1 1199capital.com
127.0.0.1 archive.1199capital.com
```

3. **Nginx**: Make sure nginx is running and reload the configuration:
```bash
sudo nginx -s reload
```

### Starting the Development Servers

#### Option 1: Use the convenience script (Recommended)
```bash
./start-dev.sh
```

This will start both servers simultaneously:
- Main site: http://1199capital.com (port 3000)
- Archive site: http://archive.1199capital.com (port 3001)

#### Option 2: Start servers manually

**Terminal 1 - Main site:**
```bash
npm run dev
```

**Terminal 2 - Archive site:**
```bash
cd archive
npm run dev
```

### Accessing the Sites

Once the servers are running, you can access:
- **Main site**: http://1199capital.com
- **Archive site**: http://archive.1199capital.com

### Project Structure

```
1199/
├── index.html              # Main site
├── package.json            # Main site dependencies
├── archive/
│   ├── index.html          # Archive site
│   └── package.json        # Archive site dependencies
├── public/                 # Shared assets
└── start-dev.sh           # Development startup script
```

### Stopping the Servers

If using the convenience script, press `Ctrl+C` to stop both servers.
If running manually, press `Ctrl+C` in each terminal window.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Test commit for GitHub contributions
