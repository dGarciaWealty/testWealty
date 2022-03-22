import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PublicNavigation from "../components/ui/PublicNavigation";
import {
  APPLE_APP_STORE_URL,
  COMING_SOON_LINK,
  GOOGLE_PLAY_URL,
  MOBILE,
} from "../constants/info";
import Image from 'next/image'

import styles from "../styles/landing/Landing2.module.scss";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
      withFooter: false,
      locale: locale,
      metaTitle: "Cashback directo en manos libres.",
      metaDescription: "Gana dinero con tus compras diarias y pásalo a tu banco para gastarlo en lo que quieras.",
    },
  };
}

const Home = (props) => {
  const { locale, pathname } = props;

  const { t } = useTranslation("landing");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <PublicNavigation texts={t} locale={locale} pathname={pathname} />
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title} data-aos="fade-up">
            <span>{t("hero_heading_bold")} </span>
            {t("hero_heading_medium")}
          </h1>
          <h2 className={styles.hero__description} data-aos="fade-up" >{t("hero_description")}</h2>
          <div className={styles.hero__features} data-aos="fade-up">
            <div
              className={[
                styles.hero__feature,
                styles.feature,
                styles.shorter,
              ].join(" ")}
            >
              <div className={styles.feature__icon}>
                <img
                  data-no-retina
                  src="/icons/landing-feature-1.svg"
                  alt={t("hero_feature_first")}
                />
              </div>
              <p className={styles.feature__text}>{t("hero_feature_first")}</p>
            </div>
            <div
              className={[
                styles.hero__feature,
                styles.feature,
                styles.shorter,
              ].join(" ")}
            >
              <div className={styles.feature__icon}>
                <img
                  data-no-retina
                  src="/icons/landing-feature-2.svg"
                  alt={t("hero_feature_second")}
                />
              </div>
              <p className={styles.feature__text}>{t("hero_feature_second")}</p>
            </div>
            <div className={[styles.hero__feature, styles.feature].join(" ")}>
              <div className={styles.feature__icon}>
                <img
                  data-no-retina
                  src="/icons/landing-feature-3.svg"
                  alt={t("hero_feature_third")}
                />
              </div>
              <p className={styles.feature__text}>{t("hero_feature_third")}</p>
            </div>
            <div className={[styles.hero__feature, styles.feature].join(" ")}>
              <div className={styles.feature__icon}>
                <img
                  data-no-retina
                  src="/icons/landing-feature-4.svg"
                  alt={t("hero_feature_fourth")}
                />
              </div>
              <p className={styles.feature__text}>{t("hero_feature_fourth")}</p>
            </div>
          </div>
          <div className={[styles.hero__stores].join(" ")} data-aos="fade-up">
            <p className={styles.hero__coming}>{t("hero_alert_me_soon")}</p>
            <img src="../stores.png" srcSet="../stores@2x.png 2x" alt="coming soon" />
            {/* <Link href={APPLE_APP_STORE_URL}>
              <a>
                <img className={styles.store} src="../appstore.png" srcSet="../appstore@2x.png 2x" alt="apple store" />
              </a>
            </Link>
            <Link href={GOOGLE_PLAY_URL}>
              <a>
                <img className={styles.store} src="../gplay.png" srcSet="../gplay@2x.png 2x" alt="google play" />
              </a>
            </Link> */}
          </div>
          <Link href={"/avisame"}>
            <a
              target="_blank"
              className={styles.hero__alertme}
              data-aos="fade-up"
            >
              {t("hero_alert_me")}
              <img
                data-no-retina
                src="/icons/link-arrow.svg"
                alt={t("hero_alert_me")}
              />
            </a>
          </Link>
        </div>
        <div className={styles.hero__right}>
          <div className={styles.hero__background}></div>
          <div className={styles.hero__mockup} data-aos="fade-up" data-aos-delay="100">
            <img className={styles.hero__mockupimage} src="../landing.png" srcSet="../landing@2x.png 2x" alt="wealty" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
