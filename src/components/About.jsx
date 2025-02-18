import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { jeff } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Introduction</h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >

I am a passionate full-stack developer with expertise in React and Java Spring Boot, dedicated to building scalable and efficient applications. 
With a strong foundation in frontend development and MySQL, I am expanding my backend skills to create industry-ready solutions.
Beyond coding, I have a deep interest in 2D animation and hybrid animation, actively learning Blender and Krita to bring creative ideas to life. 
My passion extends to scriptwriting, where I explore storytelling through animation and interactive media.
Currently pursuing a UG degree in Computer Science, I am eager to bridge the gap between technology and creativity, balancing software development with animation and design.
<br />
<b className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Skills & Interests:</b> <br />
✔ Front-end Development (HTML, CSS, JavaScript, React, three.js) <br />
✔ Back-end Development (Java Spring Boot, MySQL, Mangodb) <br />
✔ Animation & Storytelling (Krita, Blender)<br />

<b className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Portfolio & Projects:</b><br />

<b>Illuminati –</b> A secure messaging app with chat, video calls, and file sharing<br />
<b>SOS</b> – A tech-based project focused on practical problem-solving<br />
<b>Techno Kreaticon 2024</b> – Organizing and managing a technology pitch competition<br />

          <a
            href="mailto:sarranm528@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            sarranm528@gmial.com.
          </a>{" "}
          Let's connect and collaborate! 🚀{" "}
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={jeff}
                alt="jeff"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
