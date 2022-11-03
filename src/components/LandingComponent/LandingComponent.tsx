import styles from "./LandingComponent.module.scss";
import React from "react";
import Link from "next/link";

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
    text: "linkedin.com/in/edmondwong6279/",
  },
  {
    type: "Github: ",
    href: "https://github.com/edmondwong6279",
    text: "github.com/edmondwong6279",
  },
];

const LandingComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>My name is ed and welcome to my portfolio.</h2>
    <p>
      I am an enthuisastic programmer with a wide range of skills. This
      portfolio demonstrates many of the skills I have attained from a few of
      the projects that I've worked on.
    </p>
    <p>Each section is described as follows:</p>
    <ul>
      <li>
        <span className={styles.bold}>About</span>- General information about
        me, interests, hobbies and achievements in my life that I'm proud of!
      </li>
      <li>
        <span className={styles.bold}>Skills</span>- Programming languages I
        have an understanding of, rated by proficiency.
      </li>
      <li>
        <span className={styles.bold}>Projects</span>- Breakdown of many
        different projects I've worked on. Most are small projects but valuable
        regardless to my learning and understanding of programming.
      </li>
    </ul>
    <p>Contact details and links:</p>
    <ul>
      {contactArray.map((contact, idx) => (
        <li className={styles.contactItem} key={idx}>
          {contact.type}
          <Link className={styles.link} href={contact.href} target={"_blank"}>
            {contact.text}
          </Link>
        </li>
      ))}
    </ul>
    <p>
      If you want the short version, please refer to my CV below, or download it{" "}
      <Link className={styles.link} target={"_blank"} href="/Ed_Wong_CV.pdf">
        here.
      </Link>
    </p>
    <div className={styles.cvContainer}>
      <object
        className={styles.cv}
        type="application/pdf"
        data={"/Ed_Wong_CV.pdf"}
      ></object>
    </div>
  </div>
);

export default LandingComponent;
