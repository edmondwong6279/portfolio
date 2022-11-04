import styles from "./HomeComponent.module.scss";
import React, { useEffect, useState } from "react";
import LandingComponent from "../LandingComponent";
import AboutComponent from "../AboutComponent";
import SkillsComponent from "../SkillsComponent";
import ProjectsComponent from "../ProjectsComponent";
import { motion, AnimatePresence } from "framer-motion";
import HeaderComponent from "../HeaderComponent";
import classNames from "classnames";

export type Props = {
  emptyProp?: boolean;
};

const sectionArray = [
  {
    name: "Home",
    component: <LandingComponent />,
  },
  {
    name: "About",
    component: <AboutComponent />,
  },
  {
    name: "Skills",
    component: <SkillsComponent />,
  },
  { name: "Projects", component: <ProjectsComponent /> },
];

const totalDuration = 2;

const HomeComponent: React.FC<Props> = ({}) => {
  const [section, setSection] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.headerContainer, {
          [styles.scrolled]: scrolled,
        })}
      >
        <HeaderComponent
          sectionArray={sectionArray}
          totalDuration={totalDuration}
          section={section}
          setSection={setSection}
        />
      </div>
      <motion.div
        className={styles.sections}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: totalDuration }}
      >
        {sectionArray.map((sectionItem, idx) => (
          <AnimatePresence key={idx}>
            {section}
            {section === idx && (
              <motion.div
                className={styles.sectionContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {sectionItem.component}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </motion.div>
      <footer className={styles.hrContainer}>
        <motion.hr
          className={styles.hr}
          animate={{
            opacity: [0, 1],
            width: ["0%", "100%"],
            transition: {
              delay: totalDuration * 0.6,
              duration: totalDuration * 0.6,
            },
          }}
        />
      </footer>
    </div>
  );
};

export default HomeComponent;
