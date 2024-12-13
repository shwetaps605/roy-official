"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import SkillTile from "../SkillTile";
import { FaAngular, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiJest, SiNextdotjs, SiStorybook, SiTypescript, SiWebpack } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { IoNavigateCircleOutline } from "react-icons/io5";

export function FeaturesSectionGrid() {
  const features = [
    {
      title: "I'm always on the go.",
      description:
        "I am obsessed with learning new technologies and frameworks to build better products",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "I care about visual design.",
      description:
        "I love playing around in Figma to create beautiful and thoughtful designs.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    }
  ];
  return (
    <div className="relative mx-auto h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:border rounded-lg border-indigo-950">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
    </div>
  );
}

const FeatureCard = ({children,className,}: {children?: React.ReactNode;className?: string;}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto text-left tracking-tight text-indigo-500 md:text-2xl text-2xl">
      {children}
      
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-lg md:text-base max-w-4xl text-left mx-auto",
        "text-center font-normal text-neutral-300",
        "text-left mx-0 md:text-lg my-2"
      )}
    >
      {children}
    </p>
  );
};

type SkillInfo = {
  skill: string;
  icon: React.ReactNode;
  stack?: string;
}

export const SkeletonOne = () => {
  const skills: SkillInfo[] = [
    {
      skill: "React",
      icon: <FaReact/>,
      stack: "Frontend"

    },
    {
      skill: "Angular",
      icon: <FaAngular />,
      stack: "Frontend"
    },
    {
      skill: "Next.js",
      icon: <SiNextdotjs />,
      stack: "Frontend"
    },
    {
      skill: "HTML5",
      icon: <FaHtml5 />,
      stack: "Frontend"
    },
    {
      skill: "CSS3",
      icon: <FaCss3Alt />,
      stack: "Frontend"
    },
    {
      skill: "Javascript",
      icon: <RiJavascriptFill />,
      stack: "Frontend"
    },
    {
      skill: "Typescript",
      icon: <SiTypescript />,
      stack: "Frontend"
    },
    {
      skill: "Webpack",
      icon: <SiWebpack />,
      stack: "Frontend"
    },
    {
      skill: "Jest",
      icon: <SiJest />,
      stack: "Frontend"
    },
    {
      skill: "Storybook",
      icon: <SiStorybook />,
      stack: "Frontend"
    },
    {
      skill: "Node.js",
      icon: <FaNode />,
      stack: "Backend"
    },
    {
      skill: "Express",
      icon: <SiExpress />,
      stack: "Backend"
    },
    {
      skill: "Java",
      icon: <FaJava />,
      stack: "Backend"
    },
    {
      skill: "Python",
      icon: <FaPython />,
      stack: "Backend"
    },
    {
      skill: "Docker",
      icon: <FaDocker />,
      stack: "DevOps"
    },
    {
      skill: "Github",
      icon: <FaGithub />,
      stack: "DevOps"
    },
  ];

  return (
      <div className="w-full mx-auto shadow-lg group h-full">
        <div className="flex flex-row gap-4 text-gray-400 text-sm sm:text-lg">
          <p className="">Frontend: {skills.filter(skill => skill?.stack === "Frontend").length}/{skills.length}</p>
          <p className="">Backend: {skills.filter(skill => skill?.stack === "Backend").length}/{skills.length}</p>
          <p className="">DevOps: {skills.filter(skill => skill?.stack === "DevOps").length}/{skills.length}</p>
        </div>
        <div className="mt-5 grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr,1fr,1fr,1fr] md:grid-cols-[1fr,1fr,1fr,1fr,1fr] auto-cols-auto w-full justify-center gap-x-5 gap-y-3">
          {
            skills.map(skill => <SkillTile key={skill.skill}>
              {/* <div className="flex items-center gap-2"> */}
                {skill.icon}
                <span>{skill.skill}</span>
              {/* </div> */}
            </SkillTile>)
          }
        </div>
          <p className="text-md sm:text-lg text-gray-400 mt-10 float-right hover:text-gray-300 hover:cursor-pointer flex flex-row gap-1 justify-center items-center">
            <a href="https://github.com/shwetaps605" target="__blank">Github</a>
            <IoNavigateCircleOutline  />
          </p>
      </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link href="https://devroy.hashnode.dev/" target="__blank" className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="h-full flex items-center justify-center w-full">
          {/* <CardStack items={CARDS} /> */}
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/vector-art-6.png",
    "/vector-art-2.png",
    "/vector-art-3.png",
    "/vector-art-5.png",
    "/vector-art-1.png",
    "/vector-art-4.png",
    "/vector-art-6.png",
    "/vector-art-2.png",
    "/vector-art-3.png",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative  h-full overflow-hidden ">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-transparent flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="dribble designs"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-md sm:text-lg text-gray-400 mt-10 float-right hover:text-gray-300 hover:cursor-pointer flex flex-row gap-1 justify-center items-center">
        <a href="https://dribbble.com/shwetaroy" target="__blank">Dribble</a>
        <IoNavigateCircleOutline />
      </p>
      {/* <div className="flex flex-row -ml-20">
        {images.slice(3,images.length).map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-transparent flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="dribble designs"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}

      {/* <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r  from-black-100 to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l  from-black-100  to-transparent h-full pointer-events-none" /> */}
    </div>
  );
};

