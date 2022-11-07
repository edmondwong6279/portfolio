import styles from "./HeaderComponent.module.scss";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

export type Props = {
  sectionArray: {
    name: string;
    linkName: string;
    component: JSX.Element;
  }[];
  totalDuration: number;
  scrolled: boolean;
};

const HeaderComponent: React.FC<Props> = ({
  sectionArray,
  totalDuration,
  scrolled,
}) => {
  const router = useRouter();

  return (
    <div
      className={classNames(styles.headerContainerOuter, {
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
      </motion.div>

      <motion.nav
        className={styles.navBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: ["-20px", "0px"] }}
        transition={{ delay: totalDuration * 0.6 }}
      >
        {sectionArray.map((navItem, idx) => (
          <Link href={navItem.linkName} key={idx}>
            <div className={styles.navItem}>
              {navItem.name}
              <AnimatePresence>
                {router.pathname === navItem.linkName && (
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
          </Link>
        ))}
      </motion.nav>
    </div>
  );
};

export default HeaderComponent;
