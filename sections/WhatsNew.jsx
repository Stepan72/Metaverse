"use client";
import React from "react";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { staggerContainer, planetVariants, fadeIn } from "../utils/motion";
import Image from "next/image";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants/index";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What's New About Metaversus? </>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
          {newFeatures.map((feature) => {
            return <NewFeatures key={feature.title} {...feature} />;
          })}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          src="/assets/whats-new.webp"
          width={1400}
          height={1400}
          alt="whats new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
