import React from "react";
import styles from "./List.module.css";
import { GrClose } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";

function List(props) {
  function clickHandler(clicked) {
    props.delete(clicked);
  }

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {props.items.map((task, idx) => (
          <li className={styles.listItem} key={idx} id={task.id}>
            <h2>{task.text}</h2>
            <div className={styles.btn}>
              <button onClick={() => clickHandler(task.id)}>
                <GrClose size="1.8em" />
              </button>
              <button>
                <FiEdit2 size="1.8em" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
