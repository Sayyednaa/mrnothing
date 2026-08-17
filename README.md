# Mr.Nothing — Ultimate Storefront & Design System

> **Tagline:** Ultimate Action  
> **Official Email:** support@mrnothing.in  
> **Brand Personality:** Bold, Premium, Futuristic, Minimal, Confident, Action-Oriented, Clean and Trustworthy.

Welcome to the **Mr.Nothing** official product showcase repository. This application is a high-performance, responsive React + Vite storefront built for product discovery, brand presentation, and design system inspection.

> [!IMPORTANT]
> **Showcase Only Disclaimer:** This site is strictly for product presentation and showcase purposes. It does not process real payments, collect payment information, or create binding purchase orders.

---

## 🚀 Features & Stitch Screens Included

- **Home Page (`/`)**: Hero banner ("Make Every Move Count"), Category Grid, Featured Products, Brand Statement ("Nothing ordinary. Everything intentional."), Trust Cards, and Interactive Demo Newsletter.
- **Clothing Category Page (`/category/clothing`)**: Dedicated editorial category showcase with category filter controls and grid.
- **Wireless Earbuds Pro Details Page (`/product/wireless-earbuds-pro` / `/product/focus-wireless-headphones`)**: High-definition image gallery, technical specs table, feature list, sample pricing in **INR (`₹`)**, and showcase buy action modal.
- **Add Product Admin Form (`/add-product`)**: Interactive form to add new products with live preview card renderer.
- **Admin Dashboard (`/admin`)**: Metric tiles (Total Showcase Items, Categories, Wishlist counts), product status table, feature toggles, and system controls.
- **Interactive Design System Showcase (`/design-system`)**: Live visual guide of brand color hexes with click-to-copy, typography specimens, buttons, badges, form inputs, glassmorphism panels, and component previews.
- **About Us Page (`/about`)**: Brand philosophy, "Ultimate Action" framework, and 3-step vision timeline (Observe, Curate, Move).
- **Contact Page (`/contact`)**: Form with frontend validation, interactive toast notification, and official contact details (`support@mrnothing.in`).
- **Legal Draft Templates**: Privacy Policy (`/privacy-policy`) & Terms of Service (`/terms-of-service`) templates.

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Setup & Run
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mr-nothing.git
cd mr-nothing

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Production Build & Preview
```bash
# Build static production bundle
npm run build

# Preview build locally
npm run preview
```

---

## 🖼️ How to Add or Replace the Brand Logo

1. Place your new logo image in both:
   - `public/assets/mr-nothing-logo.jpg`
   - `src/assets/mr-nothing-logo.jpg`
2. If changing the filename or path, update the central path in [`src/data/constants.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/src/data/constants.js):
   ```javascript
   export const BRAND = {
     logoPath: "./assets/mr-nothing-logo.jpg",
     logoAlt: "Mr.Nothing — Ultimate Action logo",
     // ...
   };
   ```
3. The header, mobile menu, footer, about page, and favicon update automatically!

---

## 📦 How to Add or Edit Products

All showcase product data is stored in [`src/data/products.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/src/data/products.js). To add a product:

```javascript
{
  id: "prod-17",
  slug: "custom-product-slug",
  name: "New Tactical Product",
  category: "Electronics",
  categorySlug: "electronics",
  price: 15999,
  originalPrice: 18999,
  image: "https://images.unsplash.com/...",
  gallery: ["https://images.unsplash.com/..."],
  shortDescription: "Short summary...",
  description: "Detailed description...",
  features: ["Feature 1", "Feature 2"],
  specifications: { "Weight": "200g", "Battery": "24h" },
  featured: true,
  badge: "New Release",
  rating: 4.9,
  reviewCount: 12,
  isShowcaseOnly: true
}
```

Alternatively, use the **Add Product Form** at `#/add-product` during development!

---

## 🌐 GitHub Pages Deployment & Repository Configuration

### 1. Update Repository Name (if using project subpath)
If deploying to `https://USERNAME.github.io/REPOSITORY_NAME/`, set the repository name in [`vite.config.js`](file:///home/sayyednaa/Documents/Mr%20Nothing/vite.config.js):
```javascript
export const repoName = "mr-nothing"; // Replace with your repository name
```

### 2. GitHub Actions Automated Deployment
This project includes an official GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///home/sayyednaa/Documents/Mr%20Nothing/.github/workflows/deploy.yml).

- On pushing to the `main` or `master` branch, GitHub Actions will build and deploy the application automatically.
- **GitHub Repository Settings Required:**
  1. Go to repository **Settings** -> **Pages**.
  2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

---

## 📧 Support Contact
- **Official Email:** `support@mrnothing.in`
- **Location:** India

© 2026 **Mr.Nothing**. All rights reserved. *Ultimate Action.*
