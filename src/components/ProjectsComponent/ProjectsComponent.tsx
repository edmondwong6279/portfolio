import styles from "./ProjectsComponent.module.scss";
import React from "react";
import ProjectArrayComponent from "./ProjectArrayComponent";

export type Props = {
  emptyProp?: boolean;
};

const ProjectsComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <div>
      Here are a bunch of my projects I have worked on. I have provided links to
      any deployed sites and the corresponding source code where I can.
    </div>
    <ProjectArrayComponent />
  </div>
);
export default ProjectsComponent;
