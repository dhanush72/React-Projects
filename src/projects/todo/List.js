import React from "react";
import styles from "./Todo.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-item">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className={styles.grocery_item}>
            <p className={styles.title}>{title}</p>

            <div className={styles.btn_container}>
              <button
                type="submit"
                className={styles.edit_btn}
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="submit"
                className={styles.delete_btn}
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
