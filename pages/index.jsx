import CategorySection from '@/components/category-section'
import HeroBanner from '@/components/HeroBanner'
import LastPrestataires from '@/components/LastPrestataires'
import Layout from '@/components/Layout'
import NosOffres from '@/components/nos-offres'
import TopCategories from '@/components/TopCategories'
import React from 'react'

const index = () => {
  return (
    <>
    <Layout>
    <HeroBanner/>
    <div className="container mx-auto px-4 py-8 max-w-7xl">
 
    <CategorySection />
    <NosOffres/>
    
    </div>
    <TopCategories/>
    </Layout>
    </>
  )
}

export default index