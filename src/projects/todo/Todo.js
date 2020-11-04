import React, { useState, useEffect } from "react";
import styles from "./Todo.module.css";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  //   if list exist then return
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // checking value is empty
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(false);
      setIsEditing(false);
      showAlert(true, "success", "item changed");
    } else {
      // add item
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    // item.id !== id does not match it will return
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  });

  return (
    <section className={styles.section_center}>
      <form action="" className={styles.grocery_form} onSubmit={handleSubmit}>
        {/* passing list to alter useEffect */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Todo List</h3>
        <div className={styles.form_control}>
          <input
            type="text"
            className={styles.grocery}
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className={styles.submit_btn}>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className={styles.grocery_container}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className={styles.clear_btn} onClick={clearList}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
};

export default Todo;
