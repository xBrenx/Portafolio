"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
    <div className="flex items-center justify-center">
        <motion.span
          className="text-5xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7, }}>
          🍇
        </motion.span>
    </div>

    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold bg-gradient-to-r from-[#822ed6] to-[#0d0562] dark:from-[#7032c6] dark:to-[#3c0c70] inline-block text-transparent bg-clip-text">Hola, Soy Brenda.</span> Soy{" "}
      <span className="font-bold bg-gradient-to-r from-[#822ED6] via-[#822ed6] to-[#111155] dark:from-[#600fb0] dark:via-[#5c2099] dark:to-[#111155] inline-block text-transparent bg-clip-text">full-stack developer</span> Disfruto
      construyendo <span className="italic">sitios web y aplicaciones </span>. Me centro en{" "}
      <span className="underline bg-[#822ED6] inline-block text-transparent bg-clip-text">React (Next.js)</span>.
    </motion.h1>

    <motion.h1
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >

      <Link href="#contacto" onClick={() => {
          setActiveSection("Contacto");
          setTimeOfLastClick(Date.now());
        }}
      className='group bg-skin-pri text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-skin-bgacc active:scale-105 transition'> Contacto <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
      </Link>

      <a className='group bg-skin-bgsec text-gray-700 hover:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
      href="/cv.pdf" download={true}>CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition text-[#2A2AD5] dark:text-[#3c0c70]' /></a>

      <a className='bg-skin-bgsec p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10' 
      href="https://www.linkedin.com/in/brenda-panes/"> <BsLinkedin className="text-[#2A2AD5] dark:text-[#3c0c70]"/> </a>

    <a className='bg-skin-bgsec p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10' 
      href="https://github.com/xBrenx"> <FaGithubSquare className="text-[#2A2AD5] dark:text-[#3c0c70]" /> </a>

    </motion.h1>
  </section>
  );
}
