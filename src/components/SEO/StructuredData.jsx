import React from 'react';

const StructuredData = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  );
};

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shivkrupa Technoplast",
  "alternateName": "Shivkrupa Techno-Plast",
  "url": "https://www.shivkrupatechnoplast.com",
  "logo": "https://www.shivkrupatechnoplast.com/logo.png",
  "description": "Premier plastic moulding company in Nashik specializing in precision plastic injection molding and custom plastic mould manufacturing",
  "foundingDate": "2010",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "postalCode": "422001",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXX-XXXXXX",
    "contactType": "customer service",
    "areaServed": "India",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/shivkrupa-technoplast",
    "https://www.facebook.com/shivkrupatechnoplast"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plastic Moulding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plastic Injection Molding",
          "description": "Precision plastic injection molding services in Nashik"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Plastic Mould Manufacturing",
          "description": "Custom plastic mould design and manufacturing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plastic Component Manufacturing",
          "description": "High-quality plastic components for automotive, electronics, and consumer industries"
        }
      }
    ]
  },
  "certifications": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "IATF 16949",
      "description": "International Automotive Task Force certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "ISO 9001",
      "description": "Quality management system certification"
    }
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.shivkrupatechnoplast.com/#organization",
  "name": "Shivkrupa Technoplast",
  "image": "https://www.shivkrupatechnoplast.com/logo.png",
  "description": "Premier plastic moulding company in Nashik specializing in precision plastic injection molding",
  "url": "https://www.shivkrupatechnoplast.com",
  "telephone": "+91-XXXX-XXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "postalCode": "422001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.9975",
    "longitude": "73.7898"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plastic Moulding Services in Nashik",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plastic Injection Molding",
          "areaServed": "Nashik, Maharashtra"
        }
      }
    ]
  }
});

export const getBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Shivkrupa Technoplast"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Shivkrupa Technoplast"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Shivkrupa Technoplast"
    }
  }
});

export default StructuredData;
