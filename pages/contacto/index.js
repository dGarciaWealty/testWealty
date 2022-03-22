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
      metaTitle: "Contacta con nosotros",
      metaDescription: "Contacta con nosotros",
    },
  };
}



const Contacto = (props) => {
  const { locale } = props;
  const { t } = useTranslation("landing");
  
  return (
    <div className={styles.iframe}>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={t("contact_typeform")}
      ></iframe>
    </div>
  );
  
};

export default Contacto;
