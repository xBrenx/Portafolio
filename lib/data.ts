import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import videogames from "@/public/videogames.png";
import bookturn from "@/public/bookturn.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp",
    location: "Buenos Aires, Ar",
    description:
      "Después de 6 meses de estudio me gradué como Full stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Bootcamp",
    location: "Buenos Aires, Ar",
    description:
      "Trabajé como full-stack developer, agregando una página de vendedores con su respectiva base de datos.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Full-Stack Developer",
    description:
      "Trabajé en este proyecto grupal como full-stack developer como trabajo en el bootcamp.",
    tags: ["React", "Next.js", "Tailwind", "Strapi.io"],
    imageUrl: bookturn,
  },
  {
    title: "Full-Stack Developer",
    description:
      "Trabajé en este proyecto individual como full-stack developer como trabajo en el bootcamp.",
    tags: ["React", "Sequelize", "Axios"],
    imageUrl: videogames,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
