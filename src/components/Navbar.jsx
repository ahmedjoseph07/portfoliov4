"use client";


import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setopen] = useState(false);

  const handleClick = () => {
    setopen(!open);
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed:{
      x:"100vw"
    },
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren : 0.2,
      }
    }
  };

  const listItemVariants = {
    closed:{
      x:-10,
      opacity:0,
    },
    opened:{
      x:0,
      opacity:1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/*md,lg,xl:Links */}
      <div className="hidden md:flex md:justify-center gap-4 xl:w-1/3">
        {links.map((link) => (
          <Navlink link={link} key={link.url} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-xs bg-black rounded-lg p-1 flex items-center justify-center"
        >
          <span className="text-white font-semibold mr-1">JOSEPH</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">
            AHMED
          </span>
        </Link>
      </div>

      {/* Social links */}
      <div className="hidden md:flex md:justify-center gap-4 xl:w-1/3">
        <Link className="hover:scale-110 hover:transition hover:ease-in-out hover:delay-150" href="https://www.github.com/ahmedjoseph07">
          <Image src="./github.png" alt="gh" width={30} height={30} />
        </Link>

        <Link className="hover:scale-110 hover:transition hover:ease-in-out hover:delay-150" href="https://twitter.com/ahmedjoseph07">
          <Image src="./x.png" alt="gh" width={30} height={30} />
        </Link>

        <Link className="hover:scale-110 hover:transition hover:ease-in-out hover:delay-150" href="https://www.facebook.com/ahmedjoseph07">
          <Image src="./facebook.png" alt="fb" width={30} height={30} />
        </Link>

        <Link className="hover:scale-110 hover:transition hover:ease-in-out hover:delay-150" href="https://www.linkedin.com/in/ahmedjoseph07/">
          <Image src="./linkedin.png" alt="ln" width={30} height={30} />
        </Link>

        <Link className="hover:scale-110 hover:transition hover:ease-in-out hover:delay-150" href="https://www.instagram.com/ahmedjoseph07">
          <Image src="./instagram.png" alt="ig" width={30} height={30} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleClick}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU List*/}
        {open && (

          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center z-40 gap-8 text-4xl">
            {links.map((link) => (
              <motion.div variants={listItemVariants} className=""  key={link.url}>
              <Link href={link.url}>
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
