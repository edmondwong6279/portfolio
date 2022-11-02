import styles from "./ProjectArrayComponent.module.scss";
import React from "react";
import ProjectItemComponent from "../ProjectItemComponent";

export type Props = {
  emptyProp?: boolean;
};

import { personalArray, workArray } from "./projectArrays";

const ProjectArrayComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h3>Personal Projects</h3>
    <div className={styles.gridContainer}>
      {personalArray.map((personalItem, idx) => (
        <ProjectItemComponent projectItem={personalItem} key={idx} />
      ))}
    </div>
    <h3>Work Projects</h3>
    <div className={styles.gridContainer}>
      {workArray.map((workItem, idx) => (
        <ProjectItemComponent projectItem={workItem} key={idx} />
      ))}
    </div>
  </div>
);
export default ProjectArrayComponent;
