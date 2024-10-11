import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import drcImg from "@/public/drc.png";
import routingPlanImg from "@/public/routingPlan.png";
import rgcImg from "@/public/rgc.png";
import quizAppImg from "@/public/quiz_app.jpg";
import mmeImg1 from "@/public/mme1.jpg";
import mme1Img2 from "@/public/mme1_admin.jpg";
import mme2Img from "@/public/mme2.png";
import posImg from "@/public/tsi_admin/4.jpg";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "CamCyber Ditial Tech Team",
    description:
      "I worked on front-end development using Next.js, developed some APIs using Nest.js, and handled backend development for certain projects using Laravel.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    title: "Internship Full-Stack Developer",
    location: "One Fraternity Co. LTD",
    description:
      "I worked as a front-end and back-end developer for 4 months on two projects. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Independent Freelancer",
    description:
      "I worked as a full-stack developer working as a freelancer. My stack includes React, Next.js, Nest.js, TypeScript, Tailwind, Prisma, and MySQL. I have opportunities worked on two projects.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Delivery Route Calculation System",
    description:
      "I worked as a full-stack developer on this intern project for 3 months.",
    tags: ["Tailwind", "React", "Next.js", "Nest.js", "Prisma", "MySql"],
    imageUrl: drcImg,
    images: [
      "/drc/1.png",
      "/drc/2.png",
      "/drc/3.png",
      "/drc/4.png",
      "/drc/5.png",
      "/drc/6.png",
      "/drc/7.png",
      "/drc/8.png",
      "/drc/9.png",
      "/drc/10.png",
      "/drc/11.png",
      "/drc/12.png",
      "/drc/13.png",
      "/drc/14.png",
    ],
  },
  {
    title: "Routing plan System",
    description:
      "I worked as a full-stack developer on this bonus project for one month, and it is currently being used in the company.",
    tags: ["Tailwind", "React", "Next.js", "Nest.js", "Prisma", "MySql"],
    imageUrl: routingPlanImg,
    images: [
      "/rps/1.png",
      "/rps/2.png",
      "/rps/3.png",
      "/rps/4.png",
      "/rps/5.png",
      "/rps/6.png",
      "/rps/7.png",
    ],
  },

  {
    title: "Royal Government of Cambodia Website",
    description:
      "I built the UI and frontend for this project according to the requirements, working with the CamCyber Digital Tech Team.",
    tags: ["React", "Next.js", "Tailwind", "Ant Design"],
    imageUrl: rgcImg,
    images: [
      "/rgc/1.png",
      "/rgc/2.png",
      "/rgc/3.png",
      "/rgc/4.png",
      "/rgc/5.png",
      "/rgc/6.png",
    ],
  },
  {
    title: "Ministry of Mines and Energy Website",
    description:
      "I built the UI and frontend for this project, working with the CamCyber Digital Tech Team.",
    tags: ["Laravel"],
    imageUrl: mmeImg1,
    images: [
      "/mme_web/2.png",
      "/mme_web/3.png",
      "/mme_web/4.png",
      "/mme_web/5.png",
      "/mme_web/6.png",
      "/mme_web/7.png",
      "/mme_web/8.png",
    ],
  },
  {
    title: "Ministry of Mines and Energy Web Admin",
    description:
      "I built the UI, frontend, and backend for this project using laravel, working with the CamCyber Digital Tech Team.",
    tags: ["Laravel", "MySql"],
    imageUrl: mme1Img2,
    images: [
      "/mme_admin/1.jpg",
      "/mme_admin/2.jpg",
      "/mme_admin/3.jpg",
      "/mme_admin/4.jpg",
      "/mme_admin/5.jpg",
      "/mme_admin/6.jpg",
      "/mme_admin/7.jpg",
      "/mme_admin/8.jpg",
      "/mme_admin/9.jpg",
      "/mme_admin/10.jpg",
    ],
  },
  {
    title: "Ministry of Mines and Energy Website V2",
    description:
      "I built the UI, frontend using Next.js, working with the CamCyber Digital Tech Team.",
    tags: ["Tailwind", "React", "Next.js"],
    imageUrl: mme2Img,
    images: [
      "/mme_v2/1.png",
      "/mme_v2/2.png",
      "/mme_v2/3.png",
      "/mme_v2/4.png",
      "/mme_v2/5.png",
      "/mme_v2/6.png",
      "/mme_v2/7.png",
    ],
  },
  {
    title: "Techo Sen Institute Web Admin",
    description:
      "I built the UI, Admin Dashboard, and Backend using Laravel, working with the CamCyber Digital Tech Team.",
    tags: ["Laravel", "MySql"],
    imageUrl: posImg,
    images: [
      "/tsi_admin/1.jpg",
      "/tsi_admin/2.jpg",
      "/tsi_admin/3.jpg",
      "/tsi_admin/4.jpg",
      "/tsi_admin/5.jpg",
      "/tsi_admin/6.jpg",
      "/tsi_admin/7.jpg",
    ],
  },
  {
    title: "Quiz App System",
    description:
      "I worked as a freelancer for my first client, creating a system for a quiz app to manage a small number of users.",
    tags: ["Tailwind", "React", "Next.js", "Nest.js", "Prisma", "PostgreSQL"],
    imageUrl: quizAppImg,
    images: [quizAppImg],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "Laravel",
  "Tailwind",
  "Git",
  "Prisma",
  "Redux",
  "React Query",
  "Ant Design",
  "Express",
  "PostgreSQL",
  "ApexCharts.js",
] as const;
