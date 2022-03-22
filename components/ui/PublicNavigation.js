import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import PublicMenuDrawer from "./PublicMenuDrawer";
import LanguageSwitcher from "./LanguageSwitcher";

import styles from "../../styles/components/ui/PublicNavigation.module.scss";
import { CONTACT_LINK, MOBILE } from "../../constants/info";

/**
 * Public navigation bar
 * @param {*} props
 * @returns
 */
const PublicNavigation = (props) => {
  const { texts, locale, pathname } = props;

  const isMobile = useMediaQuery(MOBILE);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav
        className={[
          styles.navigation,
          pathname == "/negocios" ? styles.dark : null,
        ].join(" ")}
      >
        {pathname == "/negocios" ? (
          <div className={styles.navigation__logo}>
            <img src="../logo-black.svg" alt="wealty" />
            <span> for BUSINESS</span>
          </div>
        ) : (
          <Link href="/">
            <a className={styles.navigation__logo}>
              <img src="../logo.svg" alt="wealty" />
            </a>
          </Link>
        )}
        <div
          className={[
            styles.navigation__right,
            pathname != "/" ? styles.showMobile : null,
          ].join(" ")}
        >
          <>
            {pathname == "/negocios" && (
              <Link href="/landing">
                <a
                  className={[styles.navigation__link, styles.margin].join(" ")}
                >
                  {texts("navigation_back_link")}
                </a>
              </Link>
            )}
            {pathname != "/" && (
              <Link href="/negocios">
                <a
                  className={[styles.navigation__link, styles.margin].join(" ")}
                >
                  {texts("navigation_commerces_link")}
                </a>
              </Link>
            )}
            <Link href={"/contacto"}>
              <a target="_blank" className={styles.navigation__link}>
                {texts("navigation_contact_link")}
              </a>
            </Link>
            <LanguageSwitcher
              dark={pathname == "/negocios"}
              texts={texts}
              locale={locale}
              pathname={pathname}
            />
          </>
        </div>
        <button
          type="button"
          className={[
            styles.navigation__toggle,
            pathname != "/" ? styles.showMobile : null,
          ].join(" ")}
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className={styles.navigation__line}></span>
          <span className={styles.navigation__line}></span>
          <span className={styles.navigation__line}></span>
        </button>
        <PublicMenuDrawer
          texts={texts}
          locale={locale}
          pathname={pathname}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={(state) => setIsDrawerOpen(state)}
        />
      </nav>
    </>
  );
};

export default PublicNavigation;
