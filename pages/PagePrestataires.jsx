import BreadCrumb from '@/components/BreadCrumb'
import Layout from '@/components/Layout'
import PrestataireResult from '@/components/PrestataireResult'
import PrestataireSidebar from '@/components/PrestataireSidebar'
import React from 'react'

const PagePrestataires = () => {
  return (
    <Layout>
        <>
        <BreadCrumb/>
        <section className="gray-bg">
            <div className='container'>
                <div className='row'>
                <PrestataireSidebar/>
                <PrestataireResult/>
                </div>
            
            </div>
        </section>
        </>
    </Layout>
  )
}

export default PagePrestataires