"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion"
import { CardStack } from "./card-stack";
import { Button } from "./button";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "I'm always on the go.",
      description:
        "I am always up for learning new tech and also love writing about it",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "I care about visual design.",
      description:
        "I love playing around in Figma to create beautiful and thoughtful designs.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    }
  ];
  return (
    <div className="relative max-w-7xl mx-auto min-h-screen">
      {/* <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium  text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto  text-center font-normal text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div> */}

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-600">
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

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-purple-200 text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
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
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <Button>View blog</Button>
      {/* <div className="w-full p-5 mx-auto shadow-lg group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <Image
            src="/blog.png"
            alt="header"
            width={800}
            height={800}
            className="h-[200] w-[200] aspect-auto object-cover rounded-sm"
          />
          <Button>View blog</Button>
        </div>
      </div> */}
      {/* <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black  via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" /> */}
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://devroy.hashnode.dev/"
      target="__blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="h-full flex items-center justify-center w-full border">
          <CardStack items={CARDS} />
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
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
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
            className="rounded-xl -mr-4 mt-4 p-1  bg-neutral-800 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border border-neutral-100 flex-shrink-0 overflow-hidden"
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

      {/* <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r  from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l  from-black  to-transparent h-full pointer-events-none" /> */}
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
    </div>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <Image
            src="/blog.png"
            alt="header"
            width={200}
            height={200}
            className="h-[200] w-[200] aspect-auto object-cover rounded-sm"
          />
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        
      </p>
    ),
  },
];

