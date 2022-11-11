import styles from "./DarkModeComponent.module.scss";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { ThemeContext } from "context/context";
import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";
import Image from "next/image";

type Props = {
  totalDuration: number;
};

const DarkModeComponent: React.FC<Props> = ({ totalDuration }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className={classNames(styles.switch, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
        transition: {
          duration: totalDuration * 0.6,
          delay: totalDuration * 0.8,
        },
      }}
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
      }}
    >
      <Image
        className={styles.themeIcon}
        alt={"Light mode image"}
        src={Sun}
        width={50}
        height={50}
      />
      <Image
        className={styles.themeIcon}
        alt={"Dark mode image"}
        src={Moon}
        width={50}
        height={50}
      />
    </motion.div>
  );
};

export default DarkModeComponent;
