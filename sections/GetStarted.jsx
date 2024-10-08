"use client";
import React from "react";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { staggerContainer, planetVariants, fadeIn } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants/index";
import Image from "next/image";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          src="/assets/get-started.webp"
          alt="get started"
          width={1403}
          height={1535}
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {startingFeatures.map((feature, index) => {
            return (
              <StartSteps key={feature} number={index + 1} text={feature} />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
