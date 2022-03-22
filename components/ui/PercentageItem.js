import React from "react";
import styles from "../../styles/components/ui/PercentageItem.module.scss";

const PercentageItem = (props) => {
  return (
    <div className={styles.item}>
      <div
        className={[
          styles.item__numbercontainer,
          props.isHighlighted ? styles.highlight : null,
        ].join(" ")}
      >
        <p className={styles.item__number}>{props.number}%</p>
        {props.isHighlighted && <span className={styles.item__circle}></span>}
      </div>
      <p className={styles.item__desc}>{props.description}</p>
    </div>
  );
};

export default PercentageItem;
