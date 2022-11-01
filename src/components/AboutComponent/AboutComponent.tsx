import styles from "./AboutComponent.module.scss";
import React from "react";
import Link from "next/link";

export type Props = {
  emptyProp?: boolean;
};

const AboutComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>About</h2>
    <section>
      <h3>CV</h3>
      {/* <Link href="/api/getCV">Get CV PDF</Link> */}
      <Link href="/Ed_Wong_CV.pdf">Get CV PDF</Link>
    </section>
    <section>
      <h3>HOBBIES AND INTERESTS</h3>
    </section>
    <section>
      <h3>ACHIEVEMENTS</h3>
      <ul>
        <li>Run 2 half marathons, with another one coming up</li>
        <li></li>
      </ul>
    </section>
  </div>
);

export default AboutComponent;
