import React, { useState } from "react";
import styles from "./accordian.module.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const Question = () => {
  const [questions, setQuesions] = useState(data);
  return (
    <main>
      <div className={styles.container}>
        <h3>Accordian</h3>
        <section className={styles.info}>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Question;
