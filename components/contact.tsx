"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  return (
    <motion.section
      id="contacto"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contactame</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Puedes contactar directamente conmigo en{" "}
        <a className="underline" href="mailto:brenda_work@outlook.com">
        brenda_work@outlook.com
        </a>{" "}
        o completa el siguiente formulario.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("¡El email se envio correctamente!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-skin-bgsec-dark dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-skin-acc"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-skin-bgsec-dark dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-skin-acc"
          name="message"
          placeholder="Aqui tu mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
