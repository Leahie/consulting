"use client"
import Image from "next/image";
import Nav from '@/(components)/Nav'
import Hero from '@/(components)/Hero'
import Heading from "@/(components)/Heading";

import { motion } from "framer-motion"
import TimelineComp from "./Timeline";
import Team from "./Team";
import Method from "./Method";

export default function Home() {
  return (
    <div>
      <Nav place={-1}/>
      <Hero source="/Intro.mp4" tagline={<h1 className="text-[7em]">Develop <i>Your</i> Story</h1>}/>

      {/* Introduction */}
      <div className="bg-slate-100">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-center py-[5em] px-4 lg:px-[10em] gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div className="flex flex-col text-center lg:text-left w-full lg:basis-1/3 text-[calc(50vh/25)] text-black">
            <h2 className="font-bold text-[1.7em]">
              <span className="decoration-light-color decoration-4 underline underline-offset-[3px]">Luck</span> is what happens when preparation meets opportunity.
            </h2>
            <motion.div className="mt-3">
              <p>
                Our consulting is made by <span className="decoration-light-color decoration-4 underline underline-offset-[3px]">students</span> for students.
              </p>
            </motion.div>
          </div>
          <div className="basis-2/3 object-cover flex overflow-hidden relative h-[50vh] w-[65em] mx-10 mb-5 rounded-lg shadow-xl"><Image  src={"/1.jpg"} fill={true}  quality={100} objectFit="cover"   alt="Picture of the author" /></div>                    
      </motion.div>

      </div>
      
      {/* Timeline */}
      <div className="text-[var(--white)] w-full flex flex-col content-center items-center">
      <Heading link="none" num="2" blurb="the typical timeline."/>     
      <TimelineComp/>
      </div>

      {/* Team */}
      {/* Gradient Fade Wrapper */}
      <div className="relative z-10">
      {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[ #131313] to-[rgba(241,245,249,0)] z-[-1]" />

      {/* Team Section (bg-slate-100) */}
        <div className="bg-slate-100 relative z-10">
          <Team />
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(27,8,63,1)] to-[rgba(241,245,249,0)] z-[-1]" />
      </div>


      {/* Why Should You Trust Us */}
          <h2 className=" flex flex-col items-center text-[40px] mx-[1em] my-[1em] text-white font-barlow text-500">
                <span className="font-bold lg:text-[100px] sm:text-[50px]">Nervous? </span> <span className="sm:text-[40px] text-[25px]">trust our method</span>
            </h2>  
          <Method/>
    </div>
  );
}
