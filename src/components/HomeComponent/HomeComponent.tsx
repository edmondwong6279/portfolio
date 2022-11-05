import styles from "./HomeComponent.module.scss";
import React, { useEffect, useState } from "react";
import LandingComponent from "../LandingComponent";
import AboutComponent from "../AboutComponent";
import SkillsComponent from "../SkillsComponent";
import ProjectsComponent from "../ProjectsComponent";
import { motion, AnimatePresence } from "framer-motion";
import HeaderComponent from "../HeaderComponent";
import classNames from "classnames";
import getConfig from "next/config";

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
  const [latestCommit, setLatestCommit] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    const getMessage = async () => {
      const { publicRuntimeConfig } = getConfig();

      const modifiedDate = new Date(
        publicRuntimeConfig.modifiedDate
      ).toString();

      try {
        const res1 = await fetch(
          "https://api.github.com/repos/edmondwong6279/portfolio/git/refs/heads/main"
        );
        const blobbed1 = await res1.blob();
        const parsed1 = await blobbed1.text();
        const res1json = await JSON.parse(parsed1);

        const res2 = await fetch(res1json.object.url);
        const blobbed2 = await res2.blob();
        const parsed2 = await blobbed2.text();
        const res2json = await JSON.parse(parsed2);

        setLatestCommit(`Last updated: ${modifiedDate} -- ${res2json.message}`);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(
          `Error fetching latest commit messages (Repo may not be public): ${e}`
        );
      }
    };
    getMessage();
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
        {latestCommit}
      </footer>
    </div>
  );
};

export default HomeComponent;
