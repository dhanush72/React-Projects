import React, { useState, useEffect } from "react";
import styles from "./Tab.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const Tab = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const newJobs = await resp.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className={`${styles.section} ${styles.loading}`}>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Experience</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.jobs_center}>
        <div className={styles.btn_container}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`${styles.job_btn} ${
                  index === value && styles.active_btn
                }`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className={styles.job_info}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={styles.job_date}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles.job_desc}>
                <FaAngleDoubleRight className={styles.job_icon} />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Tab;
