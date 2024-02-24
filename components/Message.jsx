"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

const Message = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="container  mt-28"
    >
      <h3 className="bg-black  text-[23px] md:text-[42px] lg:text-[60px] xl:text-[70px] font-bold p-6 xl:p-12 leading-normal">
        " TRANSFORMAMOS IDEAS EN EXPERIENCIAS DIGITALES CAUTIVADORAS. DESDE EL
        CONCEPTO HASTA LA CREACIÓN, DAMOS VIDA A LA VISIÓN DE TU MARCA EN EL
        MUNDO DIGITAL "
      </h3>
    </motion.div>
  );
};

export default Message;
