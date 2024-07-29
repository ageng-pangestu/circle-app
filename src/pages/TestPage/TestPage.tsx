import React, { FC } from "react";
import styles from "./TestPage.module.css";

interface TestPageProps {}

const TestPage: FC<TestPageProps> = () => (
  <div className={styles.TestPage}>
    <p className={styles.text}>TestPage Component</p>
  </div>
);

export default TestPage;
