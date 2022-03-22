import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import styles from "../../styles/components/ui/FeedbackSnack.module.scss";

const FeedbackSnack = (props) => {
  const { message, isVisible, onClose, type } = props;
  return (
    <Snackbar
      classes={{
          root: [styles.snack, type == "success" ? styles.success : type == "fail" ? styles.fail : styles.info].join(" ")
      }}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isVisible}
      onClose={onClose}
      message={message}
    ></Snackbar>
  );
};

export default FeedbackSnack;
