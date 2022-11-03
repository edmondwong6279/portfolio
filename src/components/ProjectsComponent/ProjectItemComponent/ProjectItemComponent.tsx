import styles from "./ProjectItemComponent.module.scss";
import React from "react";
import ImageComponent from "../../ImageComponent";

import { projectType } from "../ProjectArrayComponent/projectArrays";

export type Props = {
  projectItem: projectType;
  emptyProp?: boolean;
};

const ProjectItemComponent: React.FC<Props> = ({ projectItem }) => (
  <div className={styles.gridItem}>
    <div className={styles.gridTitle}>{projectItem.title}</div>
    <div className={styles.gridImage}>
      <ImageComponent alt={""} src={projectItem.image} />
    </div>
    <div className={styles.linkContainer}>
      {projectItem.projectLink && (
        <a
          target={"_blank"}
          className={styles.link}
          href={projectItem.projectLink}
        >
          Project Link
        </a>
      )}
      {projectItem.gitprojectLink && (
        <a
          target={"_blank"}
          className={styles.link}
          href={projectItem.gitprojectLink}
        >
          Github Repo
        </a>
      )}
    </div>
    <div className={styles.gridDescription}>{projectItem.description}</div>
    <div className={styles.gridTagsContainer}>
      <h4>Tags:</h4>
      <div className={styles.gridTags}>
        {projectItem.tags.map((tag, idx) => (
          <div className={styles.gridTag} key={idx}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default ProjectItemComponent;
