"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function About(){
    return(
    <div className="text-white mx-5 my-[2em] ">
      <motion.div
        className="pt-16 px-4  mx-auto lg:w-[80%] w-[100%] "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 text-yellow-400">About</h1>
        <p className="text-center text-gray-300 mb-10">
          Gone through the fire of admission season, Just In Consulting became the new flame to guide students forward
        </p>

        <div className=" flex flex-col lg:flex-row gap-10 ">
          <div className="relative bg-black w-full lg:w-1/2 min-h-62 ">
            <Image className="rounded-lg object-cover" fill={true} src="/about.jpg" alt="Graduation Photo Featuring 3 of Our Team Members"/>
          </div>
          <p className="w-full lg:w-1/2 text-[15px] lg:text-[18px]">
              During last year's competitive college application season, 7 students banded together under the dome of Thomas Jefferson High School for Science and Technology, one of the most rigorous schools in the country. Through countless essay edits and suggestions of new ideas they helped each other get into their dream schools. Realizing how difficult the application process has become, they decided to start Just In Consulting (since we just got in!) as a way to guide students through a more competitive atmosphere. Now, as the 2025 admission season closes, they are passionate to help other students achieve their dreams.
              <br></br><br></br>

              Unlike other consultancy businesses, Just In Consulting is made up of a team who have just finished the college application process and know what it’s like to apply in a new, more competitive environment. Having just gone through the admissions process, our team is excited to share our experience and knowledge with others. We know what each person applying to schools is going through and can connect with students more easily.
              <br></br><br></br>

              Our goal is to ensure that clients are able to submit the best application they can. By forming deep connections with students, we will be able to provide strong and meaningful reviews to all. We want to see people succeed. We want to see your dreams become a reality.

          </p>
          
        </div>
        
      </motion.div>
    </div>
    )
}