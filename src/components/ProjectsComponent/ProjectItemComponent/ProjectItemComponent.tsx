import styles from "./ProjectItemComponent.module.scss";
import React from "react";
// import ImageComponent from "../../ImageComponent";

import { projectType } from "../ProjectArrayComponent/projectArrays";
import classNames from "classnames";

export type Props = {
  projectItem: projectType;
  idx: number;
};

const ProjectItemComponent: React.FC<Props> = ({ projectItem, idx }) => (
  <div className={classNames(styles.gridItem, { [styles.noLine]: idx === 0 })}>
    <hr className={styles.line} />
    <div className={styles.gridTitle}>{projectItem.title}</div>
    <div className={styles.gridImage}>
      {/* <ImageComponent alt={""} src={projectItem.image} /> */}
      {/* This causes flickering when there's multiple videos on screen*/}
      <video className={styles.vid} controls>
        <source src={projectItem.image} type={"video/mp4"} />
      </video>
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
