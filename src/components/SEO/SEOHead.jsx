import React from 'react';
import { Helmet } from "react-helmet";
import { getOrganizationSchema, getLocalBusinessSchema } from './StructuredData';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = "https://www.shivkrupatechnoplast.com/og-image.jpg",
  twitterImage = "https://www.shivkrupatechnoplast.com/twitter-image.jpg",
  structuredData = null,
  noindex = false
}) => {
  const siteName = "Shivkrupa Technoplast";
  const siteUrl = "https://www.shivkrupatechnoplast.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingCompany",
    "name": "Shivkrupa Technoplast",
    "url": fullCanonicalUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": description,
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
      "contactType": "customer service"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plastic Components",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Injection Molded Parts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Precision Plastic Components"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@shivkrupatechnoplast" />
      <meta name="twitter:creator" content="@shivkrupatechnoplast" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nashik" />
      <meta name="geo.position" content="19.9975;73.7898" />
      <meta name="ICBM" content="19.9975, 73.7898" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Additional Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(getOrganizationSchema())}
      </script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(getLocalBusinessSchema())}
      </script>
    </Helmet>
  );
};

export default SEOHead;

