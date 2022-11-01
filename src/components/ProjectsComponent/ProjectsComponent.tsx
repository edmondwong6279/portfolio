import styles from "./ProjectsComponent.module.scss";
import React from "react";

export type Props = {
  emptyProp?: boolean;
};

const ProjectsComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>Projects</h2>
    <h3>Personal Projects</h3>
    <ul>
      <li>Covid data visualisation</li>
      <li>Let the words out</li>
      <li>Bacon snakes?</li>
    </ul>
    <h3>Work Projects</h3>
    <ul>
      <li>Shoe Gen</li>
      <li>Balderton</li>
      <li>Rhinostics</li>
      <li>Xenon-arc</li>
    </ul>
  </div>
);
export default ProjectsComponent;
