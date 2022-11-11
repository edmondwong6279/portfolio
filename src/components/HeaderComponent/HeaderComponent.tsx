import styles from "./HeaderComponent.module.scss";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { sectionArrayType } from "types";
import { ThemeContext } from "context/context";
import DarkModeComponent from "components/DarkModeComponent";

export type Props = {
  sectionArray: sectionArrayType;
  totalDuration: number;
  scrolled: boolean;
};

const HeaderComponent: React.FC<Props> = ({
  sectionArray,
  totalDuration,
  scrolled,
}) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(styles.headerContainerOuter, styles[theme], {
        [styles.scrolled]: scrolled,
      })}
    >
      <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          y: ["50vh", "50vh", "0vh"],
          transition: { duration: totalDuration * 0.6, times: [0, 0.6, 1] },
        }}
      >
        <Link href={"/"}>
          <h1 className={styles.mainTitle}>Ed Wong</h1>
        </Link>
        <DarkModeComponent totalDuration={totalDuration} />
        <motion.hr
          className={classNames(styles.hr, styles[theme])}
          animate={{
            opacity: [0, 1],
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
        {sectionArray.map((navItem, idx) => (
          <Link href={navItem.linkName} key={idx}>
            <div className={classNames(styles.navItem, styles[theme])}>
              {navItem.name}
              <AnimatePresence>
                {router.pathname === navItem.linkName && (
                  <motion.div
                    className={classNames(styles.underline, styles[theme])}
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </Link>
        ))}
      </motion.nav>
    </div>
  );
};

export default HeaderComponent;
