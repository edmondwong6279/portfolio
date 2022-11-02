import styles from "./NavComponent.module.scss";
import React from "react";
import { motion } from "framer-motion";
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

const NavComponent: React.FC<Props> = ({
  sectionArray,
  totalDuration,
  section,
  setSection,
}) => (
  <motion.nav
    className={styles.navBar}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1], y: ["-20px", "0px"] }}
    transition={{ delay: totalDuration * 0.6 }}
  >
    {sectionArray.map((navItem, idx) => {
      if (idx > 0) {
        return (
          <motion.div
            className={classNames(styles.navItem, {
              [styles.highlight]: section === idx,
            })}
            animate={{ x: ["0px", "0px"] }}
            transition={{ delay: totalDuration * 0.6 }}
            onClick={() => setSection(section === idx ? 0 : idx)}
            key={idx}
          >
            {navItem.name}
          </motion.div>
        );
      }
    })}
  </motion.nav>
);

export default NavComponent;
