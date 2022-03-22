import Link from "next/link";
import React from "react";
import styles from "../../styles/components/ui/PublicButton.module.scss";

const PublicButton = (props) => {
  return (
    <>
      {props.button ? (
        <button onClick={props.onClick} type={props.buttonType} disabled={props.disabled} className={[
          styles.button,
          styles.full
        ].join(" ")}>
          {props.loading ? <img src="/loading2.svg" /> :  <p className={[styles.button__text, styles.mini].join(" ")}>{props.text}</p>}
          {/* <p className={[styles.button__text, styles.mini].join(" ")}>{props.text}</p> */}
        </button>
      ) : (
        <Link href={props.href}>
          <a
            className={[
              styles.button,
              props.type == "full" ? styles.full : styles.border,
            ].join(" ")}
          >
            <p className={styles.button__text}>{props.text}</p>
          </a>
        </Link>
      )}
    </>
  );
};

export default PublicButton;
