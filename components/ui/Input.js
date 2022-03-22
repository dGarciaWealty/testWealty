import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../../styles/components/ui/Input.module.scss";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {

  const [active, setActive] = useState(false);
  const [ofuscated, setOfuscated] = useState(true);

  return (
    <div className={[styles.input, props.half ? styles.half : null].join(" ")}>
      <label className={styles.input__label} htmlFor={props.id}>
        {props.label}
      </label>
      {props.isTextarea ? (
        <textarea
          {...field}
          placeholder={props.placeholder}
          type={props.type == "password" && !ofuscated ? "text" : props.type}
          id={props.id}
          disabled={props.disabled}
          className={[
            styles.textarea,
            (field.value && JSON.stringify(field.value).trim() !== "") || active
              ? styles.active
              : "",
            touched[field.name] && errors[field.name] ? styles.error : "",
          ].join(" ")}
          onFocus={() => {
            setActive(true);
            props.clearError();
          }}
          autoComplete="off"
          onBlur={() =>
            JSON.stringify(field.value).trim() === "" && setActive(false)
          }
        />
      ) : (
        <>{props.isMasked ? <InputMask
          {...field}
          mask={props.mask}
          maskChar={null}
          placeholder={props.placeholder}
          type={props.type == "password" && !ofuscated ? "text" : props.type}
          id={props.id}
          disabled={props.disabled}
          className={[
            styles.inside,
            (field.value && JSON.stringify(field.value).trim() !== "") || active
              ? styles.active
              : "",
            touched[field.name] && errors[field.name] ? styles.error : "",
          ].join(" ")}
          onFocus={() => {
            setActive(true);
            props.clearError();
          }}
          autoComplete="off"
          onBlur={() =>
            JSON.stringify(field.value).trim() === "" && setActive(false)
          }
        /> : <input
          {...field}
          placeholder={props.placeholder}
          type={props.type == "password" && !ofuscated ? "text" : props.type}
          id={props.id}
          disabled={props.disabled}
          className={[
            styles.inside,
            (field.value && JSON.stringify(field.value).trim() !== "") || active
              ? styles.active
              : "",
            touched[field.name] && errors[field.name] ? styles.error : "",
          ].join(" ")}
          onFocus={() => {
            setActive(true);
            props.clearError();
          }}
          autoComplete="off"
          onBlur={() =>
            JSON.stringify(field.value).trim() === "" && setActive(false)
          }
        />}</>
      )}
      {touched[field.name] && errors[field.name] && (
        <p className={styles.input__message}>{errors[field.name]}</p>
      )}
      {touched[field.name] && errors[field.name] && props.type != "password" && (
        <div className={styles.input__error}>
          <img src="/icons/input-error.svg" alt="input incorrecto" />
        </div>
      )}
      {props.type == "password" && (
        <button
          type="button"
          className={styles.input__password}
          onClick={() => setOfuscated((ofuscated) => !ofuscated)}
        >
          {ofuscated ? (
            <img src="/icons/ofuscated.svg" alt="mostrar contraseña" />
          ) : (
            <img src="/icons/see-password.svg" alt="ocultar contraseña" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
