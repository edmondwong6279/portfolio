import styles from "./ProjectsComponent.module.scss";
import React from "react";
import PersonalComponent from "./PersonalComponent";
import WorkComponent from "./WorkComponent";

export type Props = {
  emptyProp?: boolean;
};

const ProjectsComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <div>
      Here are a bunch of my projects. I have provided links to any deployed
      sites and the corresponding source code where I can.
    </div>
    <PersonalComponent />
    <WorkComponent />
  </div>
);
export default ProjectsComponent;
