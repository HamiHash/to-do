import React, { useState } from "react";
import styles from "./NewItem.module.css";

function NewItem(props) {
  const [isValid, setIsValid] = useState(true);
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (event) => {
    console.log(event);
    if (event.target.value.trim().length > 0) setIsValid(true);
    setUserInput(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userInput.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const data = {
      text: userInput.describe,
      id: Math.random().toString(),
    };
    return props.onAddNewItem(data);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.formContainer} ${!isValid && styles.invalid}`}
    >
      <input
        type="text"
        className={styles.input}
        value={userInput}
        onChange={inputChangeHandler}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewItem;
