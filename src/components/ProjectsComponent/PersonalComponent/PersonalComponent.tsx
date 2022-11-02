import styles from "./PersonalComponent.module.scss";
import React from "react";
import ProjectItemComponent from "../ProjectItemComponent";

export type Props = {
  emptyProp?: boolean;
};

const personalArray = [
  {
    title: "Covid Data Visualisation",
    image: "/images/covid.gif",
    description:
      "Using library XYZ and fetching data from INSERT LINK, I plotted a line graph that visualised the number of COVID-19 deaths in any country in any time period.",
    link: "google.com",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Let The Words Out",
    image: "/images/ltwo.gif",
    description:
      "Using library XYZ and fetching data from INSERT LINK, I plotted a line graph that visualised the number of COVID-19 deaths in any country in any time period.",
    link: "https://letthewordsout.com/",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Bacon Snakes",
    image: "/images/snake.gif",
    description:
      "Learning canvas through a fun little game I made in react. Nothing serious, just a bit of fun! Also allows for muiltiplayer.",
    link: "google.com",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Drawing Tool",
    image: "/images/draw.gif",
    description:
      "Using canvas again to create a simple tool to doodle. Brush colour and size is randomised.",
    link: "google.com",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Expanding Shapes",
    image: "/images/shapes.gif",
    description:
      "Using canvas again to create a simple tool to doodle. Brush colour and size is randomised.",
    link: "google.com",
    tags: ["asdf", "asdf"],
  },
  {
    title: "Simulating the Solar System",
    image: "/images/space.gif",
    description:
      "Using canvas again to create a simple tool to doodle. Brush colour and size is randomised.",
    link: "google.com",
    tags: ["asdf", "asdf"],
  },
];

const PersonalComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h3>PERSONAL PROJECTS</h3>
    <div className={styles.gridContainer}>
      {personalArray.map((personalItem, idx) => (
        <ProjectItemComponent projectItem={personalItem} key={idx} />
      ))}
    </div>
  </div>
);
export default PersonalComponent;
