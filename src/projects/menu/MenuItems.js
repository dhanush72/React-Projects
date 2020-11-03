import React from "react";
import styles from "./Menu.module.css";

const MenuItems = ({ items }) => {
  return (
    <div className={styles.section_center}>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className={styles.menu_item}>
            <img src={img} alt={title} className={styles.photo} />
            <div className={styles.item_info}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>{price}</h4>
              </header>
              <p className={styles.item_text}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;
