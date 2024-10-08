"use client";
import React from "react";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles/index";
import { footerVariants } from "../utils/motion";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <Image
            src="/assets/headset.svg"
            width={24}
            height={24}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2.5px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaverse</h4>
          <p className="font-normal text-white opacity-50 text-[14px]">
            Copyright ©2023 Metaverse. Made by Stepan Nimchuk
          </p>
          <div className="gap-4 flex">
            {socials.map((social, index) => {
              return (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
