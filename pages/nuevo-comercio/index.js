import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import React from "react";
import styles from "../../styles/public/Static.module.scss";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
      withFooter: false,
      locale: locale,
      metaTitle: "Avísame cuando esté disponible",
      metaDescription: "Avísame cuando esté disponible",
    },
  };
}

const RemindMe = (props) => {
  const { t } = useTranslation("landing");

  return (
    <div className={styles.iframe}>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://xn0f6y964xp.typeform.com/to/WCiHamdc"
      ></iframe>
    </div>
  );
};

export default RemindMe;
