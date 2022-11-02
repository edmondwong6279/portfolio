import styles from "./ProjectItemComponent.module.scss";
import React from "react";
import Link from "next/link";
import ImageComponent from "../../ImageComponent";

export type Props = {
  projectItem: {
    title: string;
    image: string;
    description: JSX.Element;
    link: string;
    tags: string[];
  };
  emptyProp?: boolean;
};

const ProjectItemComponent: React.FC<Props> = ({ projectItem }) => (
  <div className={styles.gridItem}>
    <div className={styles.gridTitle}>{projectItem.title}</div>
    <div className={styles.gridImage}>
      <Link href={projectItem.link} target={"_blank"}>
        <ImageComponent alt={""} src={projectItem.image} />
      </Link>
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
