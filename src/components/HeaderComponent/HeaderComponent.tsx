import styles from "./HeaderComponent.module.scss";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export type Props = {
  sectionArray: {
    name: string;
    component: JSX.Element;
  }[];
  totalDuration: number;
  section: number;
  setSection: React.Dispatch<React.SetStateAction<number>>;
  emptyProp?: boolean;
};

const HeaderComponent: React.FC<Props> = ({
  sectionArray,
  totalDuration,
  section,
  setSection,
}) => (
  <>
    <motion.div
      className={styles.headerContainer}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
        y: ["50vh", "50vh", "0vh"],
        transition: { duration: totalDuration * 0.6, times: [0, 0.6, 1] },
      }}
    >
      <h1 onClick={() => setSection(0)}>ed wong</h1>
      <motion.hr
        className={styles.hr}
        animate={{
          opacity: [0, 1],
          height: ["0px", "5px"],
          width: ["0%", "100%"],
          transition: {
            delay: totalDuration * 0.6,
            duration: totalDuration * 0.6,
          },
        }}
      />
    </motion.div>

    <motion.nav
      className={styles.navBar}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], y: ["-20px", "0px"] }}
      transition={{ delay: totalDuration * 0.6 }}
    >
      {sectionArray.map((navItem, idx) => {
        if (idx > 0) {
          return (
            <div
              className={classNames(styles.navItem, {
                [styles.highlight]: section === idx,
              })}
              onClick={() => setSection(section === idx ? 0 : idx)}
              key={idx}
            >
              {navItem.name}
              <AnimatePresence>
                {section === idx && (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        }
      })}
    </motion.nav>
  </>
);

export default HeaderComponent;
