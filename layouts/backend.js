import Head from "next/head";
import BackendNavigation from "../components/ui/BackendNavigation";
import styles from "../styles/backend/Backend.module.scss";

const backend = (props) => {
  return (
    <>
      <Head>
        <title key="title">Wealty</title>
        <meta key="metatitle" name="title" content={`Wealty`} />
        <meta key="metadesc" name="description" content="Wealty" />
        <meta key="ogtype" property="og:type" content="website" />
        <meta
          key="ogtitle"
          name="og:title"
          property="og:title"
          content="Wealty"
        />
        <meta
          key="ogdescription"
          name="og:description"
          property="og:description"
          content="Wealty"
        />
        <meta key="ogsitename" property="og:site_name" content="Wealty" />
        <meta key="ogurl" property="og:url" content="" />
        <meta key="twcard" name="twitter:card" content="summary" />
        <meta key="twtitle" name="twitter:title" content="Wealty" />
        <meta key="twdesc" name="twitter:description" content="Wealty" />
        <meta key="twsite" name="twitter:site" content="" />
        <meta key="twcreator" name="twitter:creator" content="Wealty" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#1769FF"></meta>
        <link
          rel="preload"
          href="/fonts/SamsungSharpSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SamsungSharpSans-Medium.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main className={styles.backend}>
        <BackendNavigation {...props} />
        <div className={styles.backend__container}>{props.children}</div>
      </main>
    </>
  );
};

export default backend;
