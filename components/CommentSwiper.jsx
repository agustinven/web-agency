"use client";
import Image from "next/image";
import ScrollerAnimation from "../utils/scrollerhorizontal";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

const CommentSwiper = () => {
  ScrollerAnimation();
  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="mx-4"
      >
        {/* image (visible only on large screens) */}
        <motion.div className="max-w-[375px] mx-auto md:container mt-24 md:mt-48">
          <Image
            src={"/hero/daily.webp"}
            className="object-cover w-full h-[350px] md:h-[800px] rounded-t-[30px] md:rounded-t-[100px]"
            width={500}
            height={500}
            alt=""
            unoptimized
          />
        </motion.div>
      </motion.div>

      <div
        className="text-yellow bg-black text-[32px] lg:text-[42px] py-2 font-extrabold scroller"
        data-speed="slow"
      >
        <ul className="tag-list scroller__inner">
          {Array.from({ length: 7 }, (_, index) => [
            <li key={`li-${index}`}>COMENTANOS TU IDEA</li>,
            <div
              key={`sparkle-${index}`}
              className="flex items-center justify-center"
            >
              <Sparkle className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]" />
            </div>,
          ])}
        </ul>
      </div>
    </div>
  );
};

export default CommentSwiper;
