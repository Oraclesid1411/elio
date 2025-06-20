import React, { useEffect } from 'react';

import '../public/assets/css/styles.css';
import '../public/assets/css/plugins.css';
import '../app/globals.css';
import { AuthContextProvider } from '@/context/authContext';
import App from 'next/app';
import { SearchProvider } from '@/context/SearchContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <SearchProvider>
          <Component {...pageProps} />
      </SearchProvider>
        
    </AuthContextProvider>
          
  );
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;