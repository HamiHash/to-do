import React from "react";
import styles from "./List.module.css";

function List(props) {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {props.items.map((i) => (
          <li className={styles.listItem}>
            <h2>{i.text}</h2>
            <div>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
