import React from 'react'
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
const Card = ({title, summary, postLink}: {title: string, summary: string, postLink: string}) => {
  return (
   <>
   <CardContainer>
      <CardBody className="bg-black-100  relative group/card hover:shadow-2xl hover:shadow-indigo-400/[0.1] border-white/[0.2] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border hover:border-indigo-400 ">
        <CardItem ranslateZ="50" className="text-xl font-bold text-white hover:text-indigo-400">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300 text-left"
        >
         {summary}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={postLink}
            target="__blank"
            className="py-2 rounded-xl text-sm font-normal text-indigo-400"
          >
            Read now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
   </>
  )
}

export default Card