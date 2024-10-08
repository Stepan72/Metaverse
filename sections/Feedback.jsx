"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/index";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import Image from "next/image";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="text-white font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaverse
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/assets/planet-09.webp"
          alt="planet-09"
          width={4908}
          height={2259}
          className="w-full lg:h-[610px] h-auto object-cover min-h-[210px] rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[15%] top-[3%] "
        >
          <Image
            src="/assets/stamp.webp"
            width={155}
            height={155}
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
