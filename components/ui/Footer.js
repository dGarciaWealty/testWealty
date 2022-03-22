import dayjs from "dayjs";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { APPLE_APP_STORE_URL, GOOGLE_PLAY_URL, JOIN_WEALTY_FORM, JOIN_WEALTY_FORM_CAT, PRIVACY_LINK, TERMS_LINK } from "../../constants/info";
import styles from "../../styles/components/ui/Footer.module.scss";

/**
 * Public footer component
 * @param {*} props 
 * @returns 
 */
const Footer = (props) => {

  const { pathname, locale } = props;

  const { t } = useTranslation("landing");

  const now =  dayjs().year();

  return (
    <footer className={[styles.footer, pathname == "/negocios" ? styles.dark : null].join(" ")}>
      <div className={styles.footer__arrow}>
        <img src="/icons/arrow-white.svg" alt={t("footer_main_text")}/>
      </div>
      <p className={styles.footer__title}>
        {pathname == "/negocios" ? t("footer_main_text_dark") : t("footer_main_text")}
      </p>
      <div className={styles.footer__stores}>
        <Link href={APPLE_APP_STORE_URL}>
          <a>
           <img className={styles.store} src="../applestorewhite.png" srcSet="../applestorewhite@2x.png 2x" alt="apple store" />
          </a>
        </Link>
        <Link href={GOOGLE_PLAY_URL}>
          <a>
          <img className={styles.store} src="../googleplaywhite.png" srcSet="../googleplaywhite@2x.png 2x" alt="apple store" />
          </a>
        </Link>
      </div>
      <div className={styles.footer__links}>
          <a href={locale == "ca" ? JOIN_WEALTY_FORM_CAT : JOIN_WEALTY_FORM} target="_blank" rel="noopener noreferrer" className={styles.footer__link}>
            <span>{t("footer_register_link")}</span>
          </a>
        <Link href="/contacto">
          <a className={styles.footer__link}>
            <span>{t("footer_contact_link")}</span>
          </a>
        </Link>
          <div className={styles.footer__sociallinks}>
            <a href="https://www.facebook.com/wealty.manresa/" target="_blank" rel="noopener noreferrer" className={styles.footer__social}>
              <img src="/icons/facebook.svg" alt="" />
            </a>
            <a href="https://instagram.com/wealty.manresa" target="_blank" rel="noopener noreferrer" className={styles.footer__social}>
              <img src="/icons/instagram.svg" alt="" />
            </a>
          </div>
      </div>
      <Link href="/">
        <a className={styles.footer__logo}>
            <img src="/icons/logo-white.svg" alt="wealty" />
        </a>
      </Link>
      <div className={styles.copy}>
         <p className={styles.copytext}>© {now} wealty</p>
         <span className={styles.separator}></span>
         <a href={TERMS_LINK} target="_blank" rel="noopener noreferrer"><p className={styles.copytext}>{t("footer_legal_link")}</p></a>
         <span className={styles.separator}></span>
         <a href={PRIVACY_LINK} target="_blank" rel="noopener noreferrer"><p className={styles.copytext}>{t("footer_privacy_link")}</p></a>
      </div>
    </footer>
  );
};

export default Footer;
