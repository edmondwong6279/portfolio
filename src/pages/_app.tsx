import "styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FooterComponent from "components/FooterComponent";
import HeaderComponent from "components/HeaderComponent";
import AboutComponent from "components/AboutComponent";
import LandingComponent from "components/LandingComponent";
import ProjectsComponent from "components/ProjectsComponent";
import SkillsComponent from "components/SkillsComponent";
import styles from "styles/app.module.scss";

const sectionArray = [
  {
    name: "Home",
    linkName: "/",
    component: <LandingComponent />,
  },
  {
    name: "About",
    linkName: "/about",
    component: <AboutComponent />,
  },
  {
    name: "Skills",
    linkName: "/skills",
    component: <SkillsComponent />,
  },
  { name: "Projects", linkName: "/projects", component: <ProjectsComponent /> },
];

const totalDuration = 2;

export default function App({ Component, pageProps }: AppProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Ed Wong Portfolio</title>
      </Head>
      <div className={styles.container}>
        <HeaderComponent
          sectionArray={sectionArray}
          totalDuration={totalDuration}
          scrolled={scrolled}
        />
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            className={styles.sections}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: totalDuration }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <FooterComponent totalDuration={totalDuration} />
      </div>
      <Analytics />
    </>
  );
}
