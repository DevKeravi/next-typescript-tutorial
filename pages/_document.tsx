import Document, { Head, Html, Main, NextScript } from "next/document";

class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
export default _document;
