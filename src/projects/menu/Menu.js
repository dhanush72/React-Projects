import React, { useState } from "react";
import styles from "./Menu.module.css";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <section className={`${styles.menu} ${styles.section}`}>
        <h2 className={styles.title}>Our Menu</h2>
        <div className={styles.underline}></div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuItems items={menuItems} />
    </>
  );
};

export default Menu;
