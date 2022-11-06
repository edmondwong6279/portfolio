import styles from "./ProjectItemComponent.module.scss";
import React, { useEffect, useRef } from "react";
import { useIsInViewport } from "../../../hooks/hooks";

import { projectType } from "../ProjectArrayComponent/projectArrays";
import classNames from "classnames";

export type Props = {
  projectItem: projectType;
  idx: number;
  itemPlaying: number;
  setItemPlaying: React.Dispatch<React.SetStateAction<number>>;
};

const ProjectItemComponent: React.FC<Props> = ({
  projectItem,
  idx,
  itemPlaying,
  setItemPlaying,
}) => {
  // all this is to ensure only one video is playing at a time automatically (can be overridden).
  // if multiple videos are in the viewport at the same time and are playing, lots of flickering
  // occurs...
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const isInViewport1 = useIsInViewport(vidRef);

  useEffect(() => {
    if (isInViewport1) {
      setItemPlaying(idx);
    }
  }, [idx, isInViewport1, projectItem.title, setItemPlaying]);

  useEffect(() => {
    if (itemPlaying === idx) {
      vidRef.current?.play();
    } else {
      vidRef.current?.pause();
    }
  }, [idx, itemPlaying]);

  return (
    <div
      ref={refContainer}
      className={classNames(styles.gridItem, { [styles.noLine]: idx === 0 })}
    >
      <hr className={styles.line} />
      <div className={styles.gridTitle}>{projectItem.title}</div>
      <div className={styles.gridImage}>
        <video className={styles.vid} playsInline loop ref={vidRef}>
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
};
export default ProjectItemComponent;
