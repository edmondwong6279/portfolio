import styles from "./HoverComponent.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { skillBarType } from "types";

type Props = {
  idx: number;
  skill: skillBarType;
};

const HoverComponent: React.FC<Props> = ({ idx, skill }) => (
  <g>
    <motion.rect
      key={idx}
      className={styles.bar}
      x={skill.x}
      y={skill.y}
      width={skill.width}
      height={skill.height}
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          width: 0,
        },
        visible: {
          width: skill.width,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.5 + 0.1 * idx,
          },
        },
      }}
    />
  </g>
);

export default HoverComponent;
