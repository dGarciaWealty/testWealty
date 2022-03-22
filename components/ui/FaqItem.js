import React from "react";
import styles from "../../styles/components/ui/FaqItem.module.scss";

/**
 * FAQ question - answer element
 * @param {*} props 
 * @returns 
 */
const FaqItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__question}>
        <p className={styles.item__questiontext}>{props.question}</p>
      </div>
      <p className={styles.item__text}>{props.text}</p>
    </div>
  );
};

export default FaqItem;
