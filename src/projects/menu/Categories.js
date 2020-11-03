import React from "react";
import styles from "./Menu.module.css";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.btn_container}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={styles.filter_btn}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
