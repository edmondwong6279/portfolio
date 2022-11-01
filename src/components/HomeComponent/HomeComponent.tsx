import styles from "./HomeComponent.module.scss";
import React from "react";
import AboutComponent from "../AboutComponent";
import ProjectsComponent from "../ProjectsComponent";
import ContactComponent from "../ContactComponent";
// import { motion, AnimatePresence } from "framer-motion";

export type Props = {
  emptyProp?: boolean;
};

const HomeComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h1>ed wong</h1>
    <div className={styles.sectionContainer}>
      <AboutComponent />
    </div>
    <div className={styles.sectionContainer}>
      <ProjectsComponent />
    </div>
    <div className={styles.sectionContainer}>
      <ContactComponent />
    </div>
  </div>
);
export default HomeComponent;
