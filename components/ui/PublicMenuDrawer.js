import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SwipeableDrawer } from "@material-ui/core";
import styles from "../../styles/components/ui/PublicMenuDrawer.module.scss";
import { CONTACT_LINK } from "../../constants/info";
import LanguageSwitcher from "./LanguageSwitcher";
import dayjs from "dayjs";

const PublicMenuDrawer = (props) => {
  const { isDrawerOpen, setIsDrawerOpen, texts, locale, pathname } = props;

  const now =  dayjs().year();

  return (
    <SwipeableDrawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      onOpen={() => {}}
      transitionDuration={400}
      elevation={0}
      BackdropProps={{
        invisible: true,
      }}
      PaperProps={{
        style: {
          width: "100%",
          borderRadius: 0,
        },
      }}
    >
      <div className={[styles.drawer__header, pathname == "/negocios" ? styles.dark : null].join(" ")}>
        <button
          type="button"
          className={styles.drawer__back}
          onClick={() => setIsDrawerOpen(false)}
        >
          <span
            className={[styles.drawer__line, styles.first].join(" ")}
          ></span>
          <span
            className={[styles.drawer__line, styles.second].join(" ")}
          ></span>
        </button>
      </div>
      <div className={[styles.drawer__content, pathname == "/negocios" ? styles.dark : null].join(" ")}>
        <div className={styles.drawer__top}>
          {pathname == "/negocios" &&  <Link href="/">
            <a className={[styles.drawer__link, styles.first].join(" ")}>
              {texts("navigation_back_link")}
            </a>
          </Link>}
          <Link href="/negocios">
            <a className={styles.drawer__link}>
              {texts("navigation_commerces_link")}
            </a>
          </Link>
          <Link href={"/contacto"}>
            <a className={styles.drawer__link}>
              {texts("navigation_contact_link")}
            </a>
          </Link>
        </div>
        <div className={styles.drawer__bottom}>
        <LanguageSwitcher from="drawer" texts={texts} locale={locale} pathname={pathname} />
        <Link href="/">
          <a className={styles.drawer__logo}>
            <Image src="/logo-placeholder.svg" alt="Wealty" width={138} height={53} />
          </a>
        </Link>
          <div className={styles.drawer__row}>
            <p className={styles.drawer__minilink}>© {now} wealty</p>
            <span className={styles.drawer__separator}></span>
            {/* todo enlaces */}
            <Link href="/legal">
              <a className={styles.drawer__minilink}>{texts("footer_legal_link")}</a>
            </Link>
            <span className={styles.drawer__separator}></span>
            <Link href="/privacidad">
              <a className={styles.drawer__minilink}>{texts("footer_privacy_link")}</a>
            </Link>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default PublicMenuDrawer;
