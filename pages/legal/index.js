import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";
import PublicNavigation from "../../components/ui/PublicNavigation";
import styles from "../../styles/public/Legal.module.scss";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing", "legal"])),
      withFooter: true,
      locale: locale,
      metaTitle: "Términos legales",
      metaDescription: "Conoce los términos legales de Wealty",
    },
  };
}

const Legal = (props) => {

  const { locale, pathname } = props;

  const { t } = useTranslation(["landing", "legal"]);

  const content = t("legal:terms_content", { returnObjects: true });

  return (
      <> 
        <PublicNavigation texts={t} locale={locale} pathname={pathname} />
        <div className={styles.legal}>
            <h1 className={styles.legal__heading}>{t("legal:terms_heading")}</h1>
            <div className={styles.legal__texts}>
               {content && content.map((el, i) => <p className={styles.legal__text} key={i}>{el}</p>)}
            </div>
        </div>
      </>
  );
};

export default Legal;
