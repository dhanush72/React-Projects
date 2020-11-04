import React, { useState, useRef, useEffect } from "react";
import Logo from "../../logo.svg";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <h3 className={styles.logo}>Logo</h3>
          <button className={styles.nav_toggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className={styles.links_container} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
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

        {/* <ul className={styles.social_icons}>
          {social.map((map) => {
            const { id, url, icon } = map;
            return (
              <li key={id}>
                <a href={url}> {icon} </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
