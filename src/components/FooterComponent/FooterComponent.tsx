import styles from "./FooterComponent.module.scss";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { ThemeContext } from "context/context";

export type Props = {
  totalDuration: number;
};

const FooterComponent: React.FC<Props> = ({ totalDuration }) => {
  const [latestCommit, setLatestCommit] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const getMessage = async () => {
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

        const lastTimeStamp = new Date(res2json.author.date);

        setLatestCommit(
          `Last updated: ${lastTimeStamp.toUTCString()} -- ${res2json.message}`
        );
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
    <footer className={styles.container}>
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
      <motion.div
        className={styles.commitMessage}
        animate={{
          opacity: [0, 1],
          transition: {
            delay: totalDuration,
          },
        }}
      >
        {latestCommit}
      </motion.div>
    </footer>
  );
};

export default FooterComponent;
