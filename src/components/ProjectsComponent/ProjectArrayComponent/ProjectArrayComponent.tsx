import styles from "./ProjectArrayComponent.module.scss";
import React, { useState } from "react";
import ProjectItemComponent from "../ProjectItemComponent";

export type Props = {
  emptyProp?: boolean;
};

import { projectsArray } from "./projectArrays";

const ProjectArrayComponent: React.FC<Props> = ({}) => {
  const [itemPlaying, setItemPlaying] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.bigHeader}>Projects</h3>
      <div className={styles.gridContainer}>
        {projectsArray.map((workItem, idx) => (
          <ProjectItemComponent
            projectItem={workItem}
            idx={idx}
            key={idx}
            itemPlaying={itemPlaying}
            setItemPlaying={setItemPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectArrayComponent;
