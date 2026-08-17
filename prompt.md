You are a senior frontend engineer and product designer. Build a polished, modern, responsive e-commerce showcase website for a brand called “Mr.Nothing” with the tagline “Ultimate Action”.

The website is for product discovery and brand presentation only. It must not process real payments, place real orders, collect sensitive information, or require a backend. Product cards may include “View Details”, “Add to Wishlist”, and a clearly labelled “Coming Soon” or “Showcase Only” button, but do not implement real checkout or payment functionality.

==================================================
1. BRAND IDENTITY
==================================================

Brand name:
Mr.Nothing

Tagline:
Ultimate Action

Brand personality:
- Bold
- Premium
- Futuristic
- Minimal
- Confident
- Action-oriented
- Clean and trustworthy

Use the attached logo image as the primary brand logo. Do not redraw, distort, crop, recolor, or replace it. Store it in the public assets folder and use it throughout the website.

Suggested logo filename:
public/assets/mr-nothing-logo.jpg

If the actual logo filename is different, make the implementation easy to update by defining the path in one central constants file.

Logo usage:
- Header logo
- Mobile navigation
- Footer
- About Us page
- Browser favicon if practical
- Keep the logo’s aspect ratio intact
- Provide meaningful alt text: “Mr.Nothing — Ultimate Action logo”

Brand colors inspired by the supplied logo:
- Deep navy: #062B67
- Dark navy: #031C44
- Accent gold: #B28A43
- Soft gold: #D2B36B
- White: #FFFFFF
- Off-white background: #F7F8FA
- Dark text: #111827
- Muted text: #64748B
- Border: #E5E7EB

Use navy as the primary color and gold only as a refined accent. Avoid excessive gradients, neon colors, visual clutter, or generic marketplace styling.

==================================================
2. TECHNOLOGY REQUIREMENTS
==================================================

Use:
- React
- Vite
- JavaScript or TypeScript
- Tailwind CSS or a well-organized CSS system
- React Router if routing is required
- Lucide React or another lightweight icon library
- Local static data only
- No backend
- No database
- No authentication
- No payment SDK
- No external API dependency
- No environment secrets

The website must run with:

npm install
npm run dev

The production build must run with:

npm run build
npm run preview

Keep the code modular, readable, and maintainable.

Recommended structure:

src/
  assets/
  components/
    Header.jsx
    Footer.jsx
    ProductCard.jsx
    ProductGrid.jsx
    CategoryCard.jsx
    SectionHeading.jsx
    SearchBar.jsx
    FilterBar.jsx
    EmptyState.jsx
  data/
    products.js
    categories.js
  layouts/
    MainLayout.jsx
  pages/
    Home.jsx
    Shop.jsx
    ProductDetails.jsx
    Category.jsx
    About.jsx
    PrivacyPolicy.jsx
    TermsOfService.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx
  main.jsx
  index.css

public/
  assets/
    mr-nothing-logo.jpg
    products/
    categories/

==================================================
3. GITHUB PAGES COMPATIBILITY
==================================================

The app will be hosted as a static site on GitHub Pages.

Make the project GitHub Pages ready.

Use Vite’s base configuration. Add a clearly marked placeholder:

const repoName = "YOUR_REPOSITORY_NAME";

Configure:

base: `/${repoName}/`

Make it easy to change the repository name in one place.

If deploying a user or organization site at:
https://USERNAME.github.io/

support base: "/"

If deploying a project site at:
https://USERNAME.github.io/REPOSITORY_NAME/

support base:
`/REPOSITORY_NAME/`

Use React Router in a way that does not break under a repository subpath. Configure the router basename consistently with the Vite base path.

Prefer a GitHub Actions deployment workflow. Generate:

.github/workflows/deploy.yml

The workflow should:
- Run on pushes to the main branch
- Install dependencies
- Build the Vite app
- Upload the dist directory
- Deploy to GitHub Pages
- Use the current official GitHub Pages Actions approach
- Request only the minimum required permissions

Also include a README.md containing:
1. Project overview
2. Local installation steps
3. How to add or replace the logo
4. How to add products
5. How to change the repository name
6. How to deploy with GitHub Actions
7. GitHub Pages settings required
8. Important note that this is a showcase-only website
9. How to configure a custom domain later

Do not hardcode absolute asset URLs. Use relative and Vite-compatible asset paths.

Use a static-hosting-friendly routing strategy. If browser refreshes on nested routes can cause a GitHub Pages 404, either:
- Use HashRouter, or
- Provide a reliable 404.html fallback strategy and explain it in the README.

For maximum GitHub Pages reliability, HashRouter is acceptable, provided the URLs remain clean enough and navigation is fully functional.

==================================================
4. PAGE STRUCTURE
==================================================

Create the following pages and routes:

- Home
- Shop
- Category listing
- Product details
- About Us
- Contact
- Privacy Policy
- Terms of Service
- 404 Not Found

Suggested routes:

/
 /shop
 /category/:slug
 /product/:slug
 /about
 /contact
 /privacy-policy
 /terms-of-service

The header and footer must be shared across all pages.

==================================================
5. HEADER AND NAVIGATION
==================================================

Create a responsive sticky header.

Desktop header:
- Logo on the left
- Navigation links:
  Home
  Shop
  About Us
  Contact
- Search icon or expandable search field
- Wishlist icon
- Showcase bag icon, if included
- Primary CTA: “Explore Collection”

Mobile header:
- Logo
- Menu button
- Slide-down or slide-in navigation
- Search option
- Accessible keyboard navigation
- Close button
- Proper ARIA labels

Header behavior:
- Transparent or lightly overlaid on the hero section
- Become solid white or off-white after scrolling
- Add subtle border or shadow only when needed
- Do not let the sticky header cover anchor sections

==================================================
6. HOME PAGE
==================================================

Design a premium landing page with these sections:

A. Hero section
- Large, confident headline:
  “Make Every Move Count.”
- Supporting copy:
  “Explore a curated world of clothing, electronics, home essentials, and everyday upgrades built for people who act.”
- Primary CTA:
  “Explore Collection”
- Secondary CTA:
  “Discover Mr.Nothing”
- Display the brand logo or a tasteful visual treatment using the logo
- Use a clean editorial composition
- Add a subtle geometric or angular motif inspired by the logo
- Keep the hero performant and responsive
- Do not use a huge video background

B. Category section
Show four categories:
- Clothing
- Electronics
- Home & Kitchen
- Everyday Essentials

Each category should include:
- Image
- Name
- Short description
- “Explore category” link
- Hover interaction
- Accessible label

C. Featured products
- Display 6 to 8 featured products
- Use responsive grid
- Include category, product name, price, rating if appropriate, and showcase status
- Add quick-view or product details navigation
- Product images must use local assets or stable royalty-free image URLs only if explicitly permitted
- Prefer local placeholder product images or Unsplash source links that can be replaced later

D. Brand statement section
Use a navy background with gold accent:
“Nothing ordinary. Everything intentional.”

Add supporting copy explaining that Mr.Nothing is a curated lifestyle platform focused on useful, expressive, and action-ready products.

E. Trust/value section
Use three or four cards:
- Curated for everyday action
- Designed around utility
- Quality-first selection
- Showcase now, shop soon

F. Newsletter-style section
This is a visual UI only:
- Heading: “Stay in the action.”
- Email input
- Button: “Notify Me”
- Prevent actual submission to a backend
- On submit, show a local confirmation message such as:
  “Thanks — you’re on the showcase list.”
- Add a note:
  “This demo form does not send emails yet.”

G. Footer
Include:
- Logo
- Tagline
- Short brand description
- Navigation links
- Category links
- Company links
- Privacy Policy
- Terms of Service
- Contact
- Social icons as non-functional placeholders or configurable links
- Copyright:
  “© 2026 Mr.Nothing. All rights reserved.”
- Showcase-only disclaimer:
  “This website is currently a product showcase. No purchases are processed.”

==================================================
7. SHOP PAGE
==================================================

Create a complete product catalogue interface using local data.

Features:
- Page title: “The Collection”
- Search products by name and description
- Filter by category
- Filter by price range
- Sort by:
  Featured
  Price: Low to High
  Price: High to Low
  Name: A to Z
- Responsive product grid
- Result count
- Empty state when no products match
- Clear filters button
- Mobile-friendly filter drawer
- Smooth but restrained transitions

Each product card should include:
- Product image
- Category
- Product name
- Short description
- Price displayed as demo/sample pricing
- “Showcase Only” badge
- Wishlist toggle
- “View Details” button

Clearly label demo pricing with one of:
- “Demo price”
- “Sample price”
- “Coming soon”

Do not imply that the products are currently available for purchase.

==================================================
8. CATEGORY PAGE
==================================================

Create reusable category pages for:

1. Clothing
2. Electronics
3. Home & Kitchen
4. Everyday Essentials

Each category page should contain:
- Category title
- Editorial banner
- Description
- Product count
- Filter and sort controls
- Product grid
- Related categories
- CTA back to all products

Use URL-friendly slugs:
- clothing
- electronics
- home-kitchen
- everyday-essentials

==================================================
9. PRODUCT DETAILS PAGE
==================================================

Create a product details page with:
- Breadcrumb navigation
- Large image gallery
- Product title
- Category
- Description
- Feature list
- Material/specification section where applicable
- Demo/sample price
- “Showcase Only” badge
- “Add to Wishlist” button
- Disabled or clearly labelled “Coming Soon” action
- Related products
- Sticky product summary on desktop where appropriate

Do not create real checkout functionality.

If the visitor clicks a purchase-style button, show a modal or inline notice:
“This is a showcase experience. Purchasing will be available in a future release.”

==================================================
10. ABOUT US PAGE
==================================================

Create a strong company page for Mr.Nothing.

Suggested content:

Title:
“Built for the next move.”

Body:
“Mr.Nothing is a modern lifestyle brand built around a simple idea: useful products should also feel intentional. We curate clothing, electronics, home and kitchen essentials, and everyday upgrades for people who value function, expression, and forward motion.”

Include sections:
- Our philosophy
- What “Ultimate Action” means
- What we curate
- Our future
- Why Mr.Nothing

Use the logo and brand styling.

Add a timeline or three-step visual:
- Observe
- Curate
- Move

Do not make unsupported claims about certifications, sustainability, manufacturing, awards, or customer numbers.

==================================================
11. CONTACT PAGE
==================================================

Create a static contact page.

Include:
- Contact form with name, email, subject, and message
- Frontend validation
- Local success message only
- Clear statement that the form is not connected to a backend
- Placeholder contact information that is easy to replace:
  Email: hello@example.com
  Location: India
- Social media placeholders
- Business enquiry CTA

Do not expose fake personal names or fake phone numbers.

Centralize editable contact details in a config file.

==================================================
12. PRIVACY POLICY PAGE
==================================================

Create a clearly labelled draft privacy policy suitable for a showcase-only static website.

Important:
- It is template content, not legal advice.
- Do not claim that tracking, analytics, cookies, payments, accounts, or data collection exist unless they are actually implemented.
- Explain that the current site is a static showcase.
- Explain that the demo contact/newsletter forms do not transmit information to a server unless a backend is later connected.
- Mention that hosting may involve GitHub Pages and server logs according to the hosting provider’s policies.
- Include sections:
  Effective date
  Information collected
  How information is used
  Cookies and analytics
  Third-party services
  Data retention
  Data security
  Children’s privacy
  Changes to this policy
  Contact
- Use placeholders for legal business name, registered address, and email.
- Add a visible notice:
  “This page is a starting template and should be reviewed by a qualified legal professional before launch.”

==================================================
13. TERMS OF SERVICE PAGE
==================================================

Create draft terms for the showcase website.

Important:
- It is template content, not legal advice.
- Clearly state that the current site is for product presentation only.
- No orders, payments, warranties, shipping commitments, or purchase contracts are created through the current site.
- Product images, descriptions, specifications, and sample prices may change.
- Include sections:
  Effective date
  Website purpose
  Acceptable use
  Intellectual property
  Product information
  No purchasing functionality
  Third-party links
  Disclaimer
  Limitation of liability
  Changes
  Governing law placeholder
  Contact
- Add the same legal review notice.

==================================================
14. CONTENT AND PRODUCT DATA
==================================================

Create a local product data file with at least 16 realistic sample products:

Clothing:
- Action Overshirt
- Everyday Utility Tee
- Motion Cargo Pants
- Essential Street Jacket

Electronics:
- Focus Wireless Headphones
- Compact Smart Lamp
- Pocket Power Bank
- Minimal Bluetooth Speaker

Home & Kitchen:
- Stoneware Mug Set
- Modular Storage Tray
- Precision Kitchen Scale
- Everyday Pour-Over Set

Everyday Essentials:
- Daily Carry Organizer
- Aluminum Water Bottle
- Travel Tech Pouch
- Minimal Desk Mat

Each product object should include:

{
  id,
  slug,
  name,
  category,
  categorySlug,
  price,
  originalPrice,
  image,
  gallery,
  shortDescription,
  description,
  features,
  specifications,
  featured,
  badge,
  rating,
  reviewCount
}

Use realistic but clearly fictional demo data. Add a configuration flag such as:

isShowcaseOnly: true

Display a “Showcase Only” badge everywhere appropriate.

==================================================
15. DESIGN SYSTEM
==================================================

Use a refined design system.

Typography:
- Use a modern sans-serif stack
- Suggested:
  Inter, Manrope, system-ui, sans-serif
- Use strong typographic hierarchy
- Keep body text readable
- Avoid excessive uppercase text

Layout:
- Maximum content width around 1200–1280px
- Generous white space
- 12-column desktop grid where appropriate
- Mobile-first responsive layout
- Product cards should maintain consistent image ratios

Components:
- Buttons
- Cards
- Badges
- Breadcrumbs
- Inputs
- Modals
- Toasts
- Tabs
- Accordion for legal pages if useful

Interactions:
- Subtle hover states
- Focus-visible states
- Smooth transitions
- Respect prefers-reduced-motion
- Avoid distracting animations
- Include loading-like skeletons only if useful for local rendering

Accessibility:
- Use semantic HTML
- Use correct heading hierarchy
- Add alt text to all meaningful images
- Mark decorative images appropriately
- Add keyboard support
- Use visible focus indicators
- Ensure sufficient color contrast
- Use aria-labels for icon-only buttons
- Ensure forms have labels and validation messages

==================================================
16. ERROR HANDLING
==================================================

Implement:
- Product-not-found page
- Category-not-found state
- Image fallback behavior
- Empty search results
- Unknown route 404 page
- Safe handling of missing product fields
- No uncaught console errors

==================================================
17. SEO AND METADATA
==================================================

Add:
- Descriptive page titles
- Meta descriptions
- Open Graph basics
- Theme color
- Favicon using the brand logo if possible
- Semantic page structure

Suggested homepage title:
“Mr.Nothing — Ultimate Action | Curated Lifestyle Essentials”

Suggested description:
“Discover Mr.Nothing, a modern lifestyle showcase for clothing, electronics, home and kitchen essentials, and everyday upgrades.”

Do not claim that the store is accepting orders.

==================================================
18. PERFORMANCE
==================================================

- Optimize image rendering
- Use lazy loading for below-the-fold images
- Avoid unnecessary dependencies
- Avoid large UI libraries unless needed
- Keep components reasonably small
- Use stable keys in lists
- Do not load unnecessary fonts or scripts
- Keep the first render fast on GitHub Pages

==================================================
19. DELIVERABLES
==================================================

Generate a complete runnable project, not only a visual mockup.

Include:
- All React source files
- All CSS/Tailwind configuration
- Vite configuration
- Product and category data
- Local asset path setup
- GitHub Actions workflow
- README.md
- Privacy Policy page
- Terms of Service page
- About Us page
- Contact page
- Responsive navigation
- Static showcase interactions
- GitHub Pages-compatible routing

Before finishing:
1. Check that npm run build succeeds.
2. Fix all import errors.
3. Fix all broken routes.
4. Confirm the app works when served from a repository subpath.
5. Confirm logo paths are easy to replace.
6. Confirm no checkout or payment behavior is accidentally implied.
7. Confirm all legal pages are visibly marked as drafts/templates.
8. Confirm there are no fake claims or unsupported company facts.