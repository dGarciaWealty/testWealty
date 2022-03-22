import Link from "next/link";
import React, { useState } from "react";

import styles from "../../styles/components/ui/LanguageSwitcher.module.scss";

const LanguageSwitcher = (props) => {
  const { locale, texts, pathname, from, dark } = props;

  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

  const langs = [
    { id: "es", text: "ESP" },
    { id: "ca", text: "CAT" },
  ];

  const selected = langs.find((el) => el.id == locale);

  const toggle = () => {
    setIsVisibleDropdown(prev => !prev);
  }

  return (
    <div className={[styles.switcher, from && from == "drawer" ? styles.drawer : null, dark ? styles.dark : null].join(" ")}>
      <button className={styles.switcher__toggle} onClick={toggle}>
        <span>{selected ? selected.text : langs[0].text}</span>{" "}
        <img className={styles.switcher__arrow} data-no-retina src="/icons/switcher-arrow.svg" alt="cambiar" />
      </button>
      {isVisibleDropdown && (
        <div className={styles.switcher__dropdown}>
          {langs.map((el) => {
            return el.id != selected.id ? (
              <Link key={el.id} href={pathname} locale={el.id}>
                <a className={styles.switcher__select}>{el.text}</a>
              </Link>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
