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
import { ThemeContext } from "context/context";
import classNames from "classnames";

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
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // for the scroll effect in the header
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 0));

    // check if localstorage has theme already
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      // otherwise, use the preferred color scheme
      const newTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }

    document.body.style.transition = "all 0.2s ease-in-out";
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? styles.bg_light : styles.bg_dark;
  }, [theme]);

  return (
    (theme === "light" || theme === "dark") && (
      <>
        <Head>
          <title>Ed Wong Portfolio</title>
          <link
            rel="icon"
            href={theme === "light" ? "/fav.ico" : "/fav_dark.ico"}
          />
          <link
            rel="shortcut icon"
            href={theme === "light" ? "/fav.ico" : "/fav_dark.ico"}
          />
          <link
            rel="apple-touch-icon"
            sizes="184x184"
            type="image/png"
            href={theme === "light" ? "/fav.png" : "/fav_dark.png"}
          />
        </Head>
        <div className={classNames(styles.container, styles[theme])}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
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
          </ThemeContext.Provider>
        </div>
        <Analytics />
      </>
    )
  );
}
