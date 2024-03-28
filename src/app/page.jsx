"use client";
import Image from "next/image";
import Typed from "@/components/Typed";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 md:py-8 lg:py-16 ">
        {/* Image Container */}
        <div className="h-1/3 relative lg:h-full lg:w-1/2 mx-4">
          <Image src="/hero.jpg" alt="hero" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-2/3 flex flex-col gap-6 items-center justify-center lg:h-full lg:w-1/2 ">
          {/* Title */}
          <h1 className=" text-xl sm:flex sm:text-4xl md:text-4xl font-extrabold xl:text-6xl text-blue-900 ">
            <Typed />
          </h1>
          {/* Description */}
          <p className="text-xs sm:text-lg lg:text-base">
            Hey there, <br /> I am{" "}
            <span className="text-base font-bold text-blue-900">
              Joseph Ahmed
            </span>
            , I am all about bringing ideas to life on the web. From designing
            interactive interfaces to crafting robust backend systems, I am
            fueled by a passion for creating digital experiences that make a
            difference. <br />I am skilled in{" "}
            <span className="text-green-500 font-bold">
              {" "}
              || MongoDB || Express.js || React.js || Node.js ||{" "}
            </span>{" "}
            - the tools that power todays dynamic web applications. I am on a
            constant journey of learning and growth, always eager to tackle new
            challenges and push the boundaries of what is possible online. Let us
            connect and collaborate to build something awesome together!
          </p>
          <div className="flex gap-4 w-full">
            {/* Btn's */}
            <button className="p-3 rounded-xl ring-1 ring-black  bg-white text-black hover:scale-110 hover:transition hover:ease-in-out hover:delay-150">
              <Link href="./portfolio">My Works</Link>
            </button>
            <button className="p-3 rounded-xl ring-1 ring-white bg-black text-white hover:scale-110 hover:transition hover:ease-in-out hover:delay-150">
            <Link href="./contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
