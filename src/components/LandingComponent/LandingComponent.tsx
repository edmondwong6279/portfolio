import styles from "./LandingComponent.module.scss";
import React from "react";

export type Props = {
  emptyProp?: boolean;
};

const LandingComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>Welcome to my portfolio.</h2>
    <p>Have a look around, and have a nice stay.</p>
    <p>Each section is described as follows:</p>
    <ul>
      <li>
        About- General information about me, interests, hobbies and achievements
        in my life that I'm proud of!
      </li>
      <li>
        Projects- Breakdown of many different projects I've worked on. Most are
        small projects but valuable regardless to my learning and understanding
        of programming.
      </li>
      <li>
        Skills- Programming languages I have an understanding of, described by
        competancy.
      </li>
      <li>Contact- My contact details should you wish to get in touch.</li>
    </ul>
  </div>
);

export default LandingComponent;
