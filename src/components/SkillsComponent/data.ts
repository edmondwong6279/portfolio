export type skillType = {
  name: string;
  score: number;
};

export const webSkills: skillType[] = [
  { name: "JS/TS", score: 4 },
  { name: "CSS/SCSS", score: 3 },
  { name: "React", score: 4 },
  { name: "Node.js", score: 3 },
  { name: "Next.js", score: 3 },
  { name: "D3.js", score: 2 },
  { name: "Matter.js", score: 1 },
  { name: "Three.js", score: 2 },
  { name: "Ammo.js", score: 1 },
  { name: "Canvas", score: 4 },
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
