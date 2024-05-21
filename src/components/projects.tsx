import { ProjectCard } from "./project-card";

type ProjectType = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
};

// const projectFactory = (
//   title: string,
//   desc: string,
//   image: string,
//   tags: string[],
// ): ProjectType => {
//   return {
//     title,
//     desc,
//     image,
//     tags,
//   };
// };

const projects: ProjectType[] = [
  {
    title: "sample project 1",
    desc: "sample description",
    image: "/skeleton.png",
    tags: ["coding", "web"],
  },
  {
    title: "sample project 2",
    desc: "sample description",
    image: "/skeleton.png",
    tags: ["coding", "web", "javascript"],
  },
  {
    title: "sample project 3",
    desc: "sample description",
    image: "/skeleton.png",
    tags: ["coding", "web"],
  },
  {
    title: "sample project 4",
    desc: "sample description",
    image: "/skeleton.png",
    tags: ["coding", "web"],
  },
];

const Projects = () => {
  return (
    <section className="flex flex-wrap gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export { Projects };
export type { ProjectType };
