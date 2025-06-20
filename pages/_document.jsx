// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';


class MyDocument extends Document {
  
  render() {
  
  
    return (
      <Html>
        <Head>
        
        </Head>
        <body className="blue-skin">
      
          <Main />
          <NextScript />
          {/* <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" /> */}
        
        <script src="/assets/js/jquery.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/popper.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/flatpickr.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/select2.min.js" strategy="beforeInteractive" ></script>
        {/*<script src="/assets/js/slick.min.js" strategy="beforeInteractive" ></script>*/}
        <script src="/assets/js/owl.carousel.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/ion.rangeSlider.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/counterup.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/materialize.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/metisMenu.min.js" strategy="beforeInteractive" ></script>
        <script src="/assets/js/custom.js" strategy="beforeInteractive" ></script>
       

        </body>
      </Html>
    );
  }
}

export default MyDocument;
