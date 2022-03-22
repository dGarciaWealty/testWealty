import React from "react";
import Image from "next/image";
import styles from "../../styles/components/ui/BenefitItem.module.scss";

const BenefitItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__icon}>
        {props.src && <Image src={props.src} alt={props.benefit} />}
      </div>
      <div className={styles.item__info}>
        <p className={styles.item__title}>{props.benefit}</p>
        <p className={styles.item__subtitle}>{props.desc}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
