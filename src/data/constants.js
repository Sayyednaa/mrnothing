// Central Constants for Mr.Nothing Showcase Application

export const REPO_NAME = "mrnothing";

export const BRAND = {
  name: "Mr.Nothing",
  tagline: "Ultimate Action",
  description: "A curated lifestyle showcase for clothing, electronics, home essentials, and everyday upgrades built for people who act.",
  logoPath: "./assets/mr-nothing-logo.jpg",
  logoAlt: "Mr.Nothing — Ultimate Action logo",
  copyrightYear: 2026,
  isShowcaseOnly: true,
  disclaimer: "This website is currently a product showcase. No purchases or payments are processed."
};

export const CURRENCY = {
  symbol: "₹",
  code: "INR"
};

export const formatPrice = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return "₹0";
  return `₹${Number(amount).toLocaleString('en-IN')}`;
};

export const COLORS = {
  deepNavy: "#062B67",
  darkNavy: "#031C44",
  accentGold: "#B28A43",
  softGold: "#D2B36B",
  white: "#FFFFFF",
  offWhite: "#F7F8FA",
  darkText: "#111827",
  mutedText: "#64748B",
  border: "#E5E7EB"
};

export const CONTACT_CONFIG = {
  email: "support@mrnothing.in",
  location: "Apj Road, Khadda Colony, Jaitpur, New Delhi, 110044, India",
  supportHours: "Mon - Fri, 9am - 6pm IST",
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};
