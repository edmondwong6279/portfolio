import styles from "./ProjectsComponent.module.scss";
import React from "react";
import ProjectArrayComponent from "./ProjectArrayComponent";

const ProjectsComponent: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      Here are a bunch of my projects I have worked on. I have provided links to
      any deployed sites and the corresponding source code where I can.
    </div>
    <ProjectArrayComponent />
  </div>
);
export default ProjectsComponent;
