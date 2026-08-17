# Mr.Nothing — Ultimate Action

> **Product Showcase & Brand Presentation Platform**

Welcome to **Mr.Nothing**, a polished, modern, responsive e-commerce showcase application built around the tagline **“Ultimate Action”**. 

---

> ⚠️ **IMPORTANT NOTICE: SHOWCASE ONLY WEBSITE**  
> This website is engineered strictly for product presentation, layout discovery, and brand identity display. **No real payment SDKs, databases, order processing systems, or checkout backends are connected.** All buttons (such as "Coming Soon", "Showcase Only", or "Notify Me") present interactive demo feedback without collecting sensitive user information or processing transactions.

---

## 1. Project Overview

Mr.Nothing is designed for forward-moving individuals who value intentional design, high utility, and minimal clutter. The website presents 16 curated products across four primary categories:

1. **Clothing** (Action Overshirt, Everyday Utility Tee, Motion Cargo Pants, Essential Street Jacket)
2. **Electronics** (Focus Wireless Headphones, Compact Smart Lamp, Pocket Power Bank, Minimal Bluetooth Speaker)
3. **Home & Kitchen** (Stoneware Mug Set, Modular Storage Tray, Precision Kitchen Scale, Everyday Pour-Over Set)
4. **Everyday Essentials** (Daily Carry Organizer, Aluminum Water Bottle, Travel Tech Pouch, Minimal Desk Mat)

### Key Features
- **Brand Palette:** Deep Navy (`#062B67`), Dark Navy (`#031C44`), Accent Gold (`#B28A43`), Soft Gold (`#D2B36B`).
- **Interactive Capabilities:** Product search, category filters, price range slider, sorting (Price/Name/Featured), wishlist saving (localStorage persisted), quick view modals, responsive navigation header, and legal policy templates.
- **GitHub Pages Ready:** HashRouter routing strategy eliminates 404 subpath errors on page refresh.

---

## 2. Local Installation & Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Setup Steps
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/mr-nothing.git
cd mr-nothing

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser at `http://localhost:5173` to view the application live.

### Production Build & Preview
```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 3. How to Add or Replace the Logo

The brand logo is centralized for seamless updates:

1. Place your new image file in `public/assets/` (e.g. `public/assets/mr-nothing-logo.jpg`).
2. Update the central path in [`src/config/site.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/src/config/site.js):
   ```js
   export const SITE_CONFIG = {
     name: "Mr.Nothing",
     tagline: "Ultimate Action",
     logoPath: "./assets/mr-nothing-logo.jpg", // <--- Update filename here
     logoAlt: "Mr.Nothing — Ultimate Action logo",
     // ...
   };
   ```

---

## 4. How to Add or Modify Products

All product data lives in a static JSON/JS module at [`src/data/products.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/src/data/products.js).

To add a new product, append an object following this schema:

```js
{
  id: "prod-17",
  slug: "new-action-pack",
  name: "New Action Pack",
  category: "Everyday Essentials",
  categorySlug: "everyday-essentials",
  price: 95,
  originalPrice: 120,
  image: "https://images.unsplash.com/your-image-url",
  gallery: [
    "https://images.unsplash.com/your-image-url-1",
    "https://images.unsplash.com/your-image-url-2"
  ],
  shortDescription: "Short one-sentence description.",
  description: "Detailed multi-paragraph description of the product.",
  features: ["Feature bullet 1", "Feature bullet 2"],
  specifications: { "Weight": "350g", "Material": "Cordura 500D" },
  featured: true,
  badge: "New Release",
  rating: 5.0,
  reviewCount: 12,
  isShowcaseOnly: true
}
```

---

## 5. How to Change Repository Name & Base Path

In [`vite.config.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/vite.config.js), locate the `repoName` constant:

```js
const repoName = "YOUR_REPOSITORY_NAME";
```

Replace `"YOUR_REPOSITORY_NAME"` with your actual GitHub repository name (e.g., `"mr-nothing"`). If deploying to a user/organization root site (`https://USERNAME.github.io/`), leave base configured as `'./'`.

---

## 6. How to Deploy with GitHub Actions

The repository includes an automated workflow at `.github/workflows/deploy.yml`:

1. Commit your changes and push to the `main` branch.
2. The GitHub Action will automatically install dependencies, build Vite, and deploy the `/dist` output.

---

## 7. Required GitHub Pages Settings

1. On GitHub, navigate to your repository **Settings** -> **Pages**.
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
3. Save changes. Pushes to `main` will now deploy automatically.

---

## 8. Showcase-Only Disclaimer Note

This project is created explicitly for product discovery, layout showcase, and brand identity presentation. No actual payments, checkout gateways, credit card processing, or user authentication scripts are present.

---

## 9. Configuring a Custom Domain (Optional)

To attach a custom domain (e.g. `www.mrnothing.com`):

1. Go to repository **Settings** -> **Pages** -> **Custom domain**.
2. Enter your domain name and save.
3. Update your DNS settings at your domain registrar with GitHub Pages A-records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) or CNAME record.
4. Enable **Enforce HTTPS** in GitHub Pages settings.
