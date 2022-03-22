import Link from "next/link";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PublicNavigation from "../../components/ui/PublicNavigation";
import { APPLE_APP_STORE_URL, GOOGLE_PLAY_URL, JOIN_WEALTY_FORM, JOIN_WEALTY_FORM_CAT } from "../../constants/info";
import { useTranslation } from "next-i18next";

import styles from "../../styles/landing/Landing2.module.scss";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "landing",
        "landingcommerces",
      ])),
      withFooter: true,
      locale: locale,
      metaTitle: "For business",
      metaDescription: "Aumenta hasta en un 200% las ventas de tu comercio.",
    },
  };
}

const Negocios = (props) => {

  const { locale, pathname } = props;
  const { t } = useTranslation(["landing", "landingcommerces"]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <PublicNavigation texts={t} locale={locale} pathname={pathname} />
      <div className={[styles.hero, styles.dark].join(" ")}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title} data-aos="fade-up">
            <span>{t("landingcommerces:hero_heading_bold")} </span>
          </h1>
          <h2 className={styles.hero__newdesc} data-aos="fade-up">
            <span>{t("landingcommerces:hero_description_bold")}</span>
            {t("landingcommerces:hero_description_text")}
          </h2>
            <a href={locale == "ca" ? JOIN_WEALTY_FORM_CAT : JOIN_WEALTY_FORM} target="_blank" rel="noopener noreferrer" className={styles.hero__button} data-aos="fade-up">{t("landingcommerces:hero_cta")}</a>
          <div className={[styles.hero__features, styles.new].join(" ")} data-aos="fade-up">
            <div
              className={[
                styles.hero__feature,
                styles.feature,
                styles.commerce
              ].join(" ")}
            >
              <div className={styles.feature__iconnew}>
                <img
                  data-no-retina
                  src="/icons/commerce-landing-1.svg"
                  alt={t("landingcommerces:hero_feature_first")}
                />
              </div>
              <p className={styles.feature__text}>{t("landingcommerces:hero_feature_first")}</p>
            </div>
            <div
              className={[
                styles.hero__feature,
                styles.feature,
                styles.commerce,
              ].join(" ")}
            >
              <div className={styles.feature__iconnew}>
                <img
                  data-no-retina
                  src="/icons/commerce-landing-2.svg"
                  alt={t("landingcommerces:hero_feature_second")}
                />
              </div>
              <p className={styles.feature__text}>{t("landingcommerces:hero_feature_second")}</p>
            </div>
            <div className={[styles.hero__feature, styles.feature, styles.commerce, styles.shorter].join(" ")}>
              <div className={styles.feature__iconnew}>
                <img
                  data-no-retina
                  src="/icons/commerce-landing-3.svg"
                  alt={t("landingcommerces:hero_feature_third")}
                />
              </div>
              <p className={styles.feature__text}>{t("landingcommerces:hero_feature_third")}</p>
            </div>
            <div className={[styles.hero__feature, styles.feature,styles.commerce].join(" ")}>
              <div className={styles.feature__iconnew}>
                <img
                  data-no-retina
                  src="/icons/commerce-landing-4.svg"
                  alt={t("landingcommerces:hero_feature_fourth")}
                />
              </div>
              <p className={styles.feature__text}>{t("landingcommerces:hero_feature_fourth")}</p>
            </div>
          </div>
          <div className={[styles.hero__arrow, styles.new].join(" ")}>
            <img src="/icons/arrow-black.svg" alt={t("hero_description")} />
          </div>
        </div>
        <div className={[styles.hero__right, styles.landing].join(" ")}>
          <div className={styles.hero__background}></div>
          <div className={styles.hero__mockup} data-aos="fade-up" data-aos-delay="100">
            <img
              className={styles.hero__mockupimage}
              src="../landing-commerces.png"
              srcSet="../landing-commerces@2x.png 2x"
              alt="wealty"
            />
          </div>
        </div>
      </div>
      <div className={styles.prefeatures}>
         <p className={styles.showcase__title} data-aos="fade-up">{t("landingcommerces:hiw_title")}</p>
         <p className={styles.prefeatures__desc} data-aos="fade-up">{t("landingcommerces:hiw_subtitle")}</p>
      </div>
      <div className={[styles.features, styles.new].join(" ")}>
        <div className={styles.features__top}>
          <svg
            width="100%"
            viewBox="0 0 1440 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 47.453C0 47.453 439.928 -0.0579682 722 -8.04759e-06C1002.51 0.0576313 1440 47.453 1440 47.453V80C1440 80 1002.8 80.1081 722 80C439.641 79.8913 0 80 0 80V47.453Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>
        <div className={styles.features__container}>
          <div className={styles.features__flex}>
            <div className={styles.features__row}>
              <div className={styles.features__column}>
                <div className={styles.feature} data-aos="fade-up">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>1</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("landingcommerces:feature_first_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("landingcommerces:feature_first_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../commerce-feature-1.png" srcSet="../commerce-feature-1@2x.png 2x" alt={t("landingcommerces:feature_second_title")} />
                  </div>
                </div>
                <div className={[styles.feature, styles.move].join(" ")} data-aos="fade-up">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>3</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("landingcommerces:feature_third_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("landingcommerces:feature_third_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../commerce-feature-3.png" srcSet="../commerce-feature-3@2x.png 2x" alt={t("landingcommerces:feature_third_title")} />
                  </div>
                </div>
              </div>
              <div className={styles.features__column}>
                <div className={styles.feature} data-aos="fade-up" data-aos-delay="150">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>2</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("landingcommerces:feature_second_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("landingcommerces:feature_second_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../commerce-feature-2.png" srcSet="../commerce-feature-2@2x.png 2x" alt={t("landingcommerces:feature_second_title")} />
                  </div>
                </div>
                <div className={[styles.feature, styles.move2].join(" ")}  data-aos="fade-up" data-aos-delay="150">
                  <div className={styles.feature__left}>
                    <div>
                    <div className={styles.feature__number}>
                      <p>4</p>
                    </div>
                    <p className={styles.feature__title}>
                      {t("landingcommerces:feature_fourth_title")}
                    </p>
                    <p className={styles.feature__desc}>
                      {t("landingcommerces:feature_fourth_text")}
                    </p>
                    </div>
                    <img className={styles.feature__bottomimage} src="../commerce-feature-4.png" srcSet="../commerce-feature-4@2x.png 2x" alt={t("landingcommerces:feature_fourth_title")} />
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.feature, styles.big, styles.dark].join(" ")} data-aos="fade-up">
              <div className={styles.feature__content}>
                  <img src="../icons/big-logo.svg" alt={t("landingcommerces:feature_fourth_title")} />
                  <div className={styles.feature__info}>
                    <p className={styles.feature__heading}>{t("landingcommerces:feature_highlight_title")}</p>
                      <a href={locale == "ca" ? JOIN_WEALTY_FORM_CAT : JOIN_WEALTY_FORM} target="_blank" rel="noopener noreferrer"  className={styles.hero__button}>{t("landingcommerces:feature_highlight_cta")}</a>
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
              fill="#F5F5F5"
            />
          </svg>
        </div>
      </div>
      <div className={styles.dashboard}>
        <p className={styles.showcase__title}  data-aos="fade-up">
          {t("landingcommerces:backend_showcase_title")}
        </p>
        <p className={[styles.showcase__desc, styles.dark].join(" ")}  data-aos="fade-up">
          {t("landingcommerces:backend_showcase_subtitle")}
        </p>
        <img
            className={styles.dashboard__arrow}
            data-aos="fade-up"
            src="../icons/mini-arrow.svg"
            alt={t("landingcommerces:backend_showcase_title")}
          />
        <div className={styles.dashboard__image}  data-aos="fade-up">
          <img
            className={styles.dashboard__img}
            src="../dashboard.png"
            srcSet="../dashboard@2x.png 2x"
            alt={t("backend_showcase_title")}
          />
        </div>
      </div>
      <div className={[styles.showcase, styles.new].join(" ")} data-aos="fade-up">
        <p className={styles.showcase__title}  data-aos="fade-up">
          {t("landingcommerces:showcase_title")}
        </p>
        <p className={[styles.showcase__desc, styles.dark].join(" ")}  data-aos="fade-up">
          {t("landingcommerces:showcase_subtitle")}
        </p>
        <div className={styles.showcase__image}  data-aos="fade-up">
          <img
            className={styles.showcase__img}
            src="../slider.png"
            srcSet="../slider@2x.png 2x"
            alt={t("commerces_section_title")}
          />
        </div>
      </div>
    </>
  );
};

export default Negocios;
