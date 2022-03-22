import Link from "next/link";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PublicNavigation from "../../components/ui/PublicNavigation";
import {
  APPLE_APP_STORE_URL,
  GOOGLE_PLAY_URL,
} from "../../constants/info";
import { useTranslation } from "next-i18next";

import styles from "../../styles/landing/Landing2.module.scss";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
      withFooter: true,
      locale: locale,
      metaTitle: "Cashback directo en manos libres.",
      metaDescription: "Gana dinero con tus compras diarias y pásalo a tu banco para gastarlo en lo que quieras.",
    },
  };
}

const Landing = (props) => {
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
          <h2 className={styles.hero__description} data-aos="fade-up">{t("hero_description")}</h2>
          <div className={[styles.hero__stores, styles.big].join(" ")} data-aos="fade-up">
            <Link href={APPLE_APP_STORE_URL}>
              <a>
              <img className={styles.store} src="../appstore.png" srcSet="../appstore@2x.png 2x" alt="apple store" />
              </a>
            </Link>
            <Link href={GOOGLE_PLAY_URL}>
              <a>
              <img className={styles.store} src="../gplay.png" srcSet="../gplay@2x.png 2x" alt="google play" />
              </a>
            </Link>
          </div>
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
          <div className={styles.hero__arrow}>
            <img src="/arrow-blue.svg" alt={t("hero_description")}/>
          </div>
        </div>
        <div className={[styles.hero__right, styles.landing].join(" ")}>
          <div className={styles.hero__background}></div>
          <div className={styles.hero__mockup} data-aos="fade-up" data-aos-delay="100">
            <img className={styles.hero__mockupimage} src="../landing.png" srcSet="../landing@2x.png 2x" alt="wealty" />
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.features__top}>
          <svg
            width="100%"
            viewBox="0 0 1440 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 47.453C0 47.453 439.928 -0.0579682 722 -8.04759e-06C1002.51 0.0576313 1440 47.453 1440 47.453V80C1440 80 1002.8 80.1081 722 80C439.641 79.8913 0 80 0 80V47.453Z"
              fill="#EDF1F7"
            />
          </svg>
        </div>
        <div className={styles.features__container}>
          <div className={styles.features__flex}>
            <div className={[styles.feature, styles.big].join(" ")} data-aos="fade-up">
              <div className={styles.feature__left}>
                <div>
                <div className={styles.feature__number}>
                  <p>1</p>
                </div>
                <p className={styles.feature__title}>
                  {t("feature_first_title")}
                </p>
                <div className={[styles.hero__stores].join(" ")}>
                  <Link href={APPLE_APP_STORE_URL}>
                    <a>
                    <img className={styles.store} src="../appstore.png" srcSet="../appstore@2x.png 2x" alt="apple store" />
                    </a>
                  </Link>
                  <Link href={GOOGLE_PLAY_URL}>
                    <a>
                    <img className={styles.store} src="../gplay.png" srcSet="../gplay@2x.png 2x" alt="google play" />
                    </a>
                  </Link>
                </div>
                </div>
              </div>
              <div className={styles.feature__right}>
                <img className={styles.feature__rightimage} src="../feature1.png" srcSet="../feature1@2x.png 2x" alt={t("feature_first_title")} />
              </div>
            </div>
            <div className={styles.features__row}>
              <div className={styles.features__column}>
                <div className={styles.feature} data-aos="fade-up">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>2</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("feature_second_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("feature_second_text")}
                    </p>
                    <p className={styles.feature__highlight}>
                      {t("feature_second_highlight")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../feature2.png" srcSet="../feature2@2x.png 2x" alt={t("feature_second_title")} />
                  </div>
                </div>
                <div className={[styles.feature, styles.move].join(" ")} data-aos="fade-up">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>4</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("feature_fourth_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("feature_fourth_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../feature5.png" srcSet="../feature5@2x.png 2x" alt={t("feature_fifth_title")} />
                  </div>
                </div>
              </div>
              <div className={styles.features__column}>
                <div className={styles.feature} data-aos="fade-up" data-aos-delay="150">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>3</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("feature_third_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("feature_third_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../feature3.png" srcSet="../feature3@2x.png 2x" alt={t("feature_third_title")} />
                  </div>
                </div>
                <div className={[styles.feature, styles.move2].join(" ")} data-aos="fade-up" data-aos-delay="150">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>5</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("feature_fifth_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("feature_fifth_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../feature4.png" srcSet="../feature4@2x.png 2x" alt={t("feature_fifth_title")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.features__top}>
          <svg
            width="100%"
            viewBox="0 0 1440 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.999881C0 0.999881 439.928 0.941921 722 0.999881C1002.51 1.05752 1440 1.00012 1440 1.00012V82.9999C1440 82.9999 1002.8 52.108 722 51.9999C439.641 51.8911 0 82.9999 0 82.9999V0.999881Z"
              fill="#EDF1F7"
            />
          </svg>
        </div>
      </div>
      <div className={styles.showcase}>
          <p className={styles.showcase__title} data-aos="fade-up">{t("commerces_section_title")}</p>    
          <p className={styles.showcase__desc} data-aos="fade-up">{t("commerces_section_desc")}</p>
          <div className={styles.showcase__image} data-aos="fade-up">
          <img className={styles.showcase__img} src="../slider.png" srcSet="../slider@2x.png 2x" alt={t("commerces_section_title")} />
          </div>
      </div>
    </>
  );
};

export default Landing;
