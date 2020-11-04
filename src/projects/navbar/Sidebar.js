import React from "react";
import styles from "./Navbar.module.css";
import { links, social } from "./data";

const Sidebar = () => {
  return (
    <div className={`${styles.links_container} ${styles.show_container}`}>
      <ul className={styles.links}>
        {links.map((map) => {
          const { id, url, text } = map;
          return (
            <li key={id}>
              <a href={url}> {text} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
