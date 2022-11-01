import styles from "./ContactComponent.module.scss";
import React from "react";
import Link from "next/link";

export type Props = {
  emptyProp?: boolean;
};

const ContactComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>Contact</h2>
    <Link href={"mailto:edmondwong6279@gmail.com"}>Email</Link>
    <Link
      href={"https://www.linkedin.com/in/edmondwong6279/"}
      target={"_blank"}
    >
      LinkedIn
    </Link>
  </div>
);
export default ContactComponent;
