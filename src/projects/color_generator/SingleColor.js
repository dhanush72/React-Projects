import React, { useState, useEffect } from "react";
import styles from "./Color.module.css";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`${styles.color} ${index > 10 && styles.color_light}`}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={styles.percent_value}>{weight}%</p>
      <p className={styles.color_value}>{hexValue}</p>
      {alert && (
        <p className={`${styles.alert} ${index > 10 && styles.color_light}`}>
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
