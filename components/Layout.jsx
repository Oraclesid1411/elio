import React from 'react'
import Header from './Header'
import Footer from './Footer'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/css/styles.css';
// import '@/styles/css/plugins.css';

const Layout  = ({ children }) => (
    <>
     <div id="main-wrapper">
        <Header/>
            {children}
        <Footer/>
     </div>
     
      
    </>
);

export default Layout