"use client";
// Import Button
import { Button } from "./ui/button";
// Import Image next
import Image from "next/image";
// Import Arrow Icon
import { ArrowRight } from "lucide-react";
// Import motion
import { motion } from "framer-motion";
// Import transition
import { transition1 } from "../utils/transition";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="mt-12 md:mt-32 mx-4"
    >
      <div className="container bg-white rounded-[30px] md:rounded-[50px] py-8 md:py-16 mx-auto flex flex-col md:gap-10 gap-20 xl:gap-0 md:flex-row justify-between ">
        <div className="md:flex-1 max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            <div className="border-[2px] border-gray-text text-[14px] rounded-full py-2 px-4 w-fit text-gray-text mb-4">
              <p>Introduciendo una nueva era de creatividad</p>
            </div>
            {/* title (visible at the top on mobile) */}
            <h1 className="h1 text-black break-all mb-4">
              Digitaliza <br />
              <span className="text-black">tus ideas</span>
            </h1>
            {/* description */}
            <p className="text-gray-text max-w-[370px] lg:max-w-[600px] md:max-w-none mb-7">
              Explora el poder de la innovación. Transformamos ideas en
              experiencias excepcionales. Tu futuro comienza aquí, con nosotros.
            </p>
            {/* button */}

            <Button variant="accent" size="sm" className="">
              Contactanos <ArrowRight className="ml-4 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} transition={transition1} className="hidden md:block ">
          {/* image (visible only on large screens) */}
          <Image
            src={"/hero/test.jpg"}
            className="rounded-[50px] w-[280px] lg:w-[420px] 2xl:w-[540px] h-full"
            width={500}
            height={500}
            alt=""
            unoptimized
            priority
          />
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default Hero;
