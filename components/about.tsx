"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca de mi</SectionHeading>
      <p className="mb-3 text-skin-claro dark:text-skin-oscuro">
        Encontré la pasión en la programación.  Me inscribí en un bootcamp donde aprendí{" "}
        <span className="font-medium bg-gradient-to-r from-[#822ED6] via-[#822ed6] to-[#111155] dark:to-[#3c3cb6] inline-block text-transparent bg-clip-text">desarrollo web full-stack</span>.{" "}
        <span className="italic">Mi parte favorita de la programación</span> es la resolución de problemas. Me <span className="underline">encanta</span> la sensación de finalmente encontrar una solución a un problema.
         Mi tecnologías principales son{" "}
        <span className="font-medium bg-gradient-to-r from-[#822ed6] to-[#111155] dark:to-[#3c3cb6] inline-block text-transparent bg-clip-text">
          React, Next.js, Node.js, and MongoDB
        </span>
        . También estoy familiarizado con TypeScript y Prisma. Siempre estoy buscando aprender nuevas tecnologías. I Actualmente estoy buscando un puesto a{" "}
        <span className="font-medium text-skin-acc">tiempo completo</span> como desarrollador.
      </p>

      <p>
        <span className="italic">Cuando no estoy programando</span>, disfruto jugando videojuegos, viendo películas y jugando con mi gato. También disfruto aprendiendo{" "}
        <span className="font-medium text-skin-acc"> cosas nuevas</span>.
      </p>
    </motion.section>
  );
}
