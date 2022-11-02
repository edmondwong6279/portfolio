import styles from "./ContactComponent.module.scss";
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

const ContactComponent: React.FC<Props> = ({}) => (
  <section className={styles.container}>
    <ul>
      {contactArray.map((contact, idx) => (
        <li key={idx}>
          {contact.type}
          <Link href={contact.href} target={"_blank"}>
            {contact.text}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
export default ContactComponent;
