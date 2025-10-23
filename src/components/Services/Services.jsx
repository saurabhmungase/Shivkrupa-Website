import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesInfo from './ServicesInfo'
import FAQ from '../FAQ'
import ProductGallery from '../homePage/ProductGallery'
import SEOHead from '../SEO/SEOHead'
import { seoData } from '../SEO/seoData'

const Services = () => {
  return (
    <div className='pt-20'>
        <SEOHead 
          title={seoData.services.title}
          description={seoData.services.description}
          keywords={seoData.services.keywords}
          canonicalUrl={seoData.services.canonicalUrl}
          structuredData={seoData.services.structuredData}
        />
        
        <ServicesHero />
        
        <ServicesInfo></ServicesInfo>
        <ProductGallery></ProductGallery>
        <FAQ></FAQ>
    </div>
  )
}

export default Services