import React from 'react'
import Topbar from './Topbar'
import SidebarLeft from './SidebarLeft'

const Layouta = ({children}) => {
  return (
    <>
        <Topbar/>
        <section className="gray-bg pt-4">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <SidebarLeft/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Layouta