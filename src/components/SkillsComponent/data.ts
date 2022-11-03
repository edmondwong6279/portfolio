export type skillType = {
  name: string;
  score: number;
};

export const webSkills: skillType[] = [
  { name: "JS/TS", score: 4 },
  { name: "CSS/SCSS", score: 3 },
  { name: "React", score: 4 },
  { name: "Nodejs", score: 3 },
  { name: "Nextjs", score: 3 },
  { name: "d3", score: 2 },
  { name: "matterjs", score: 1 },
  { name: "threejs", score: 2 },
  { name: "ammo", score: 1 },
  { name: "canvas", score: 4 },
  { name: "SVG", score: 4 },
];

export const pythonSkills: skillType[] = [
  { name: "Python", score: 4 },
  { name: "PyTorch", score: 3 },
  { name: "Numpy", score: 3 },
  { name: "SciPy", score: 1 },
];

export const otherSkills: skillType[] = [
  { name: "SQL", score: 2 },
  { name: "Git", score: 3 },
  { name: "Docker", score: 2 },
  { name: "Java", score: 3 },
];
