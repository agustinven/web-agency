"use client";
// Import Button
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

const Letstalk = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="container mt-28"
    >
      <div className="bg-yellow  px-2 md:px-24 xl:px-40 rounded-b-[40px] py-8 flex flex-col gap-y-8 text-center">
        <h2 className="text-[24px] md:text-[36px] xl:text-[48px] text-black font-extrabold">
          COMENZEMOS A DIALOGAR SOBRE TUS IDEAS
        </h2>
        <div>
          <Button variant="accent" size="md" className="">
            Hablemos
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Letstalk;
