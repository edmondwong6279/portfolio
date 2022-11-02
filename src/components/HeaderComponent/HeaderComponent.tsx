import styles from "./HeaderComponent.module.scss";
import React from "react";
import { motion } from "framer-motion";

export type Props = {
  totalDuration: number;
  emptyProp?: boolean;
};

const HeaderComponent: React.FC<Props> = ({ totalDuration }) => (
  <motion.div
    className={styles.headerContainer}
    animate={{
      opacity: [0, 1],
      y: ["50vh", "50vh", "0vh"],
      transition: { duration: totalDuration * 0.6, times: [0, 0.6, 1] },
    }}
  >
    <h1>ed wong</h1>
    <motion.hr
      className={styles.hr}
      animate={{
        opacity: [0, 1],
        height: ["0px", "5px"],
        width: ["0%", "90%"],
        transition: {
          delay: totalDuration * 0.6,
          duration: totalDuration * 0.6,
        },
      }}
    />
  </motion.div>
);

export default HeaderComponent;
