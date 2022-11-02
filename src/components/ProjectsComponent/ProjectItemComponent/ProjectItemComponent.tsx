import styles from "./ProjectItemComponent.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Props = {
  projectItem: {
    title: string;
    image: string;
    description: string;
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
        <Image
          alt={""}
          src={projectItem.image}
          object-fit={"contain"}
          width={400}
          height={300}
        />
      </Link>
    </div>
    <div className={styles.gridDescription}>
      <p>{projectItem.description}</p>
    </div>
    <div className={styles.gridTags}>
      Tags:
      {projectItem.tags.map((tag) => (
        <div className={styles.gridTag}>{tag}</div>
      ))}
    </div>
  </div>
);
export default ProjectItemComponent;
