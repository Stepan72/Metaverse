"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/index";
import { navVariants } from "../utils/motion";
import Image from "next/image";

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/assets/search.svg"
          width={24}
          height={24}
          alt="search"
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          Metaverse
        </h2>
        <Image
          src="assets/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
