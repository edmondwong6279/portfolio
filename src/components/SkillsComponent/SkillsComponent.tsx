import styles from "./SkillsComponent.module.scss";
import React from "react";

export type Props = {
  emptyProp?: boolean;
};

const SkillsComponent: React.FC<Props> = ({}) => (
  <div className={styles.container}>
    <h2>Skills</h2>
    <div className={styles.graphContainer}>
      {/* TODO make this into a cool looking graph that loads in nicely. */}
      {/* Sort by category, score, alphabetical */}
      Web Development:
      <ul>
        <li>Javascript/ Typescript- 4/5</li>
        <li>CSS/SCSS- 3/5</li>
        <li>React- 4/5</li>
        <li>Nodejs- 3/5</li>
        <li>Nextjs- 3/5</li>
        <li>d3- 2/5</li>
        <li>matterjs- 1/5</li>
        <li>threejs- 2/5</li>
        <li>ammo- 1/5</li>
        <li>canvas- 4/5</li>
        <li>SVG- 4/5</li>
      </ul>
      Python Development:
      <ul>
        <li>Python- 4/5</li>
        <li>PyTorch- 3/5</li>
        <li>Numpy- 3/5</li>
        <li>SciPy- 1/5</li>
      </ul>
      Other:
      <ul>
        <li>SQL- 2/5</li>
        <li>Git- 3/5</li>
        <li>Docker- 2/5</li>
        <li>Java- 3/5</li>
      </ul>
    </div>
  </div>
);

export default SkillsComponent;
