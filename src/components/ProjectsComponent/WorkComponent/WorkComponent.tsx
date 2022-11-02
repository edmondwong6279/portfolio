import styles from "./WorkComponent.module.scss";
import React from "react";
import ProjectItemComponent from "../ProjectItemComponent";

export type Props = {
  emptyProp?: boolean;
};

const workArray = [
  {
    title: "xenonarc",
    image: "/images/snake.gif",
    description:
      "Using library XYZ and fetching data from INSERT LINK, I plotted a line graph that visualised the number of COVID-19 deaths in any country in any time period.",
    link: "https://xenonarc.com/",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Shoe Generator",
    image: "/images/shoes.gif",
    description:
      "Using library XYZ and fetching data from INSERT LINK, I plotted a line graph that visualised the number of COVID-19 deaths in any country in any time period.",
    link: "https://shoegen.universlabs.co.uk/",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Rhinostics ROI Calculator",
    image: "/images/snake.gif",
    description:
      "Learning canvas through a fun little game I made in react. Nothing serious, just a bit of fun! Also allows for muiltiplayer.",
    link: "https://rhinostics.com/roi/",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Balderton Benchmark Tool",
    image: "/images/bald.gif",
    description:
      "Learning canvas through a fun little game I made in react. Nothing serious, just a bit of fun! Also allows for muiltiplayer.",
    link: "https://rhinostics.com/roi/",
    tags: ["asdf", "asdf"],
  },
];

const WorkComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h3>WORK PROJECTS</h3>
    <div className={styles.gridContainer}>
      {workArray.map((workItem, idx) => (
        <ProjectItemComponent key={idx} projectItem={workItem} />
      ))}
    </div>
  </div>
);
export default WorkComponent;
