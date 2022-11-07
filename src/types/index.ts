export type skillType = {
  name: string;
  score: number;
  info: string;
};

export type sectionArrayType = {
  name: string;
  linkName: string;
  component: JSX.Element;
}[];

export type contactArrayType = {
  type: string;
  href: string;
  text: string;
}[];

export type projectType = {
  title: string;
  image: string;
  description: JSX.Element;
  projectLink?: string;
  gitprojectLink?: string;
  tags: string[];
};

export type Dims = { width: number; height: number };
