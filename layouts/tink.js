import Head from "next/head";

const tink = (props) => {
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
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FE025C"/>
        <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#ffffff"/>
        <meta key="theme-color" name="theme-color" content="#FE025C"></meta> */}
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default tink;
