import styles from "./LandingComponent.module.scss";
import React from "react";
import Link from "next/link";
import classNames from "classnames";

export type Props = {
  emptyProp?: boolean;
};

const contactArray = [
  {
    type: "Email: ",
    href: "mailto:edmondwong6279@gmail.com",
    text: "edmondwong6279@gmail.com",
  },
  {
    type: "LinkedIn: ",
    href: "https://www.linkedin.com/in/edmondwong6279/",
    text: "edmondwong6279",
  },
  {
    type: "Github: ",
    href: "https://github.com/edmondwong6279",
    text: "github.com/edmondwong6279",
  },
  {
    type: "CV: ",
    href: "/Ed_Wong_CV.pdf",
    text: "My CV",
  },
  {
    type: "Portfolio github repository: ",
    href: "https://github.com/edmondwong6279/portfolio",
    text: "Portfolio Repo",
  },
];

const LandingComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2 className={styles.bigHeader}>
      My name is Ed and welcome to my portfolio.
    </h2>
    <p className={styles.text}>
      I am an enthusiastic programmer with a wide range of skills. This
      portfolio demonstrates many of the skills I have attained from a few of
      the projects that I've worked on.
    </p>
    <p className={styles.text}>
      This application was created using Next.js and is fully responsive. It is
      regularly updated, and the latest commit can be found at the footer.
    </p>
    <p className={styles.text}>Each section is described as follows:</p>
    <ul>
      <li className={styles.text}>
        <span className={styles.bold}>About</span>- General information about
        me, interests, hobbies and achievements in my life that I'm proud of!
      </li>
      <li className={styles.text}>
        <span className={styles.bold}>Skills</span>- Programming languages I
        have an understanding of, rated by proficiency.
      </li>
      <li className={styles.text}>
        <span className={styles.bold}>Projects</span>- Breakdown of many
        different projects I've worked on. Most are small projects but valuable
        regardless to my learning and understanding of programming.
      </li>
    </ul>
    <p className={styles.text}>Contact details and links:</p>
    <ul className={styles.contactList}>
      {contactArray.map((contact, idx) => (
        <li className={classNames(styles.text, styles.item)} key={idx}>
          {contact.type}
          <Link className={styles.link} href={contact.href} target={"_blank"}>
            {contact.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LandingComponent;
