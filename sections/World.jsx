'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/index';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from 'next/image';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        {/* /// First man */}
        <div className="absolute bottom-[20%] right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        {/* /// Second man */}
        <div className="absolute top-10 left-[12%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        {/* /// Third man */}
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* /// нужно добавить еще 2 картинки!!! */}
        <div>
          <div className="w-[217px] h-[167px] rounded-[15%]  absolute top-[40%] left-[15%] bg-[rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
            <img
              src="/planet-02.png"
              alt="planet"
              className="object-cover object-fit h-[90%] w-[90%] rounded-[15%]"
            />
            <div className="absolute top-[60%]">
              <div className="flex flex-wrap flex-row justify-center items-center">
                <div className="flex flex-row">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680]  ">
                    <img
                      src="people-01.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680]  ">
                    <img
                      src="people-02.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680] ">
                    <img
                      src="people-03.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-white text-[12px]">+264 has joined</p>
              </div>
              <h4 className="font-bold text-white">The Upside Down</h4>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[217px] h-[167px] rounded-[15%]  absolute top-[10%] right-[20%] bg-[rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
            <img
              src="/planet-05.png"
              alt="planet"
              className="object-cover object-fit h-[90%] w-[90%] rounded-[15%]"
            />
            <div className="absolute top-[60%]">
              <div className="flex flex-wrap flex-row justify-center items-center">
                <div className="flex flex-row">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680]  ">
                    <img
                      src="people-03.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680]  ">
                    <img
                      src="people-01.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#5d6680] ">
                    <img
                      src="people-02.png"
                      alt="people"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-white text-[12px]">+314 has joined</p>
              </div>
              <h4 className="font-bold text-white">The Hawkin Labs</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
