// Central Site Configuration
export const SITE_CONFIG = {
  name: "Mr.Nothing",
  tagline: "Ultimate Action",
  logoPath: "./assets/mr-nothing-logo.jpg",
  logoAlt: "Mr.Nothing — Ultimate Action logo",
  
  currencySymbol: "₹",
  currencyCode: "INR",
  
  contact: {
    email: "support@mrnothing.in",
    location: "India",
    businessInquiryEmail: "partners@mrnothing.in",
  },
  
  social: {
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  
  isShowcaseOnly: true,
  showcaseDisclaimer: "This website is currently a product showcase for presentation and discovery only. No purchases or payments are processed.",
  legalReviewNotice: "This page is a starting template for product showcase purposes and should be reviewed by a qualified legal professional before commercial launch.",
};

export const formatPrice = (price) => {
  if (typeof price !== 'number') return `${SITE_CONFIG.currencySymbol}${price}`;
  return `${SITE_CONFIG.currencySymbol}${price.toLocaleString('en-IN')}`;
};
