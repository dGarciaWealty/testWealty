import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/public/Static.module.scss";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
      withFooter: false,
      locale: locale,
      metaTitle: "Whoops!"
    },
  };
}

/**
 * 404 PAGE
 */
const error = (props) => {

  const { t } = useTranslation("landing");

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">
          <a className={styles.navigation__logo}>
            <Image src="/icons/logo-white.svg" alt="Wealty" width={138} height={53} />
          </a>
        </Link>
      </div>
        <h1 className={styles.heading}>404</h1>
        <h2 className={styles.subheading}>{t("notfound_title")}</h2>
    </div>
  );

};

export default error;
