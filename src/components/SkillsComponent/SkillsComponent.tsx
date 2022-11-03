import styles from "./SkillsComponent.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export type Props = {
  emptyProp?: boolean;
};

import { webSkills, pythonSkills, otherSkills, skillType } from "./data";
import { useDims } from "../../hooks/hooks";

export const textOffset = 4;

const getData = (skill: skillType, idx: number, xUnit: number) => ({
  height: 60,
  width: skill.score * xUnit,
  x: textOffset * xUnit,
  y: idx * 65,
  name: skill.name,
  value: skill.score,
});

const SkillsComponent: React.FC<Props> = ({}) => {
  const [areaRef, dims] = useDims<HTMLDivElement>();
  const [xUnit, setXUnit] = useState(100);

  const resultSVGWeb = useMemo(
    () => webSkills.map((skill, idx) => getData(skill, idx, xUnit)),
    [xUnit]
  );
  const resultSVGPython = useMemo(
    () => pythonSkills.map((skill, idx) => getData(skill, idx, xUnit)),
    [xUnit]
  );
  const resultSVGOther = useMemo(
    () => otherSkills.map((skill, idx) => getData(skill, idx, xUnit)),
    [xUnit]
  );

  const allSVG = useMemo(
    () => [
      { skillType: "Web", data: resultSVGWeb },
      { skillType: "Python", data: resultSVGPython },
      { skillType: "Other", data: resultSVGOther },
    ],
    [resultSVGOther, resultSVGPython, resultSVGWeb]
  );

  useEffect(() => {
    if (dims.width < 900) {
      setXUnit(dims.width / 9);
    } else {
      setXUnit(100);
    }
  }, [dims]);

  return (
    <div className={styles.container} ref={areaRef}>
      <h2>Skills</h2>
      <p>
        Here is a breakdown of my proficiancies in different languages and
        frameworks.
      </p>
      {/* <p>TODO Flesh this out.</p> */}
      {allSVG.map((resultSVG, idx) => (
        <div className={styles.graphContainer} key={idx}>
          <h3 className={styles.header}>{resultSVG.skillType}</h3>
          <svg className={styles.svg} height={resultSVG.data.length * 65 - 5}>
            {resultSVG.data.map((skill, idx) => (
              <motion.g key={idx}>
                <text
                  y={skill.y + 30}
                  className={styles.text}
                  dominantBaseline="middle"
                >
                  {skill.name}
                </text>
                <motion.rect
                  key={`${idx} ${dims}`}
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
              </motion.g>
            ))}
            <line
              x1={textOffset * xUnit - 5}
              x2={textOffset * xUnit - 5}
              y1={0}
              y2={65 * 11 - 5}
              className={styles.divider}
            />
            {new Array(6).fill(undefined).map((_, idx) => (
              <line
                key={idx}
                x1={textOffset * xUnit + idx * xUnit}
                x2={textOffset * xUnit + idx * xUnit}
                y1={0}
                y2={65 * 11 - 5}
                className={styles.graphLine}
              />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
};
export default SkillsComponent;
