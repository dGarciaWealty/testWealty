import styles from "../../styles/Home.module.scss";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Tink = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (window && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(router.asPath);
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src="/loading.svg" alt="" />
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      name: "Tink",
    },
  };
}

export default Tink;
