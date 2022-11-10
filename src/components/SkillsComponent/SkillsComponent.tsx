import styles from "./SkillsComponent.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { skillType, skillBarType } from "types";
import { webSkills, pythonSkills, otherSkills } from "./data";
import { useDims } from "hooks";
import HoverComponent from "./HoverComponent";

export const textOffset = 3;

const getData = (
  skill: skillType,
  idx: number,
  xUnit: number
): skillBarType => ({
  height: 60,
  width: skill.score * xUnit,
  x: textOffset * xUnit,
  y: idx * 65 + 65,
  name: skill.name,
  value: skill.score,
  description: skill.info,
});

const SkillsComponent: React.FC = () => {
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
      <h2 className={styles.bigHeader}>Skills</h2>
      <p className={styles.text}>
        Here is a breakdown of my proficiencies in different languages,
        frameworks and libraries, from beginner to intermediate. (Work in
        progress).
      </p>
      {allSVG.map((resultSVG, idx) => (
        <div className={styles.graphContainer} key={idx}>
          <h3 className={styles.header}>{resultSVG.skillType}</h3>
          <svg className={styles.svg} height={resultSVG.data.length * 65 - 5}>
            {resultSVG.data.map((skill, idx) => (
              <g key={idx}>
                <text
                  y={skill.y + 30}
                  className={styles.text}
                  dominantBaseline="middle"
                >
                  {skill.name}
                </text>
                <HoverComponent idx={idx} skill={skill} />
              </g>
            ))}
            <text
              y={30}
              x={textOffset * xUnit - 5}
              className={styles.scaleLabel}
              dominantBaseline="middle"
            >
              Beginner
            </text>
            <text
              y={30}
              x={textOffset * xUnit + 5 * xUnit}
              className={styles.scaleLabel}
              dominantBaseline="middle"
              textAnchor="end"
            >
              Intermediate
            </text>
            <line
              x1={textOffset * xUnit - 5}
              x2={textOffset * xUnit - 5}
              y1={65}
              y2={65 * 11 - 5}
              className={styles.divider}
            />
            {new Array(6).fill(undefined).map((_, idx) => (
              <line
                key={idx}
                x1={textOffset * xUnit + idx * xUnit}
                x2={textOffset * xUnit + idx * xUnit}
                y1={65}
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
