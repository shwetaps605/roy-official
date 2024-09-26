"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import SkillTile from "../SkillTile";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "I'm always on the go.",
      description:
        "I am always up for learning new tech and also love writing about it",
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
    <div className="relative max-w-7xl mx-auto mt-5">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-400">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
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
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-emerald-500 text-xl md:text-2xl md:leading-snug">
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
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
      <div className="w-full mx-auto shadow-lg group h-full">
        <div className=" mt-5 grid grid-cols-[1fr,1fr,1fr,1fr] w-full justify-center gap-x-5 gap-y-3">
         <SkillTile>
           <p>Angular</p>
         </SkillTile>
         <SkillTile>
           <p>React</p>
         </SkillTile>
         <SkillTile>
           <p>Redux</p>
         </SkillTile>
         <SkillTile>
           <p>NextJS</p>
         </SkillTile>
         <SkillTile>
           <p>HTML5</p>
         </SkillTile>
         <SkillTile>
           <p>JavaScript</p>
         </SkillTile>
         <SkillTile>
           <p>TypeScript</p>
         </SkillTile>
         <SkillTile>
           <p>Sass/CSS</p>
         </SkillTile>
         <SkillTile>
           <p>TailwindCSS</p>
         </SkillTile>
        </div>
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
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden ">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
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
      <div className="flex flex-row -ml-20">
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
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r  from-black-100 to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l  from-black-100  to-transparent h-full pointer-events-none" />
    </div>
  );
};

