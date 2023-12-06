import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume_Haris_NF.pdf";
import mainImage from "/src/assets/h3.jpg"
import circleImage from "/src/assets/circle2.png"


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-violet-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Haris NF
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Analis",
                2000,
                "Quality Assurance",
                2000,
                "Web Dev",
                2000,
                "Freelance",
                2000,
              ]}
              speed={50}
              wrapper="h2"
              repeat={Infinity}
              className="text-violet-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              What sets me apart is my unwavering mindset to constantly evolve. I have a desire to keep learning, constantly evolving to embrace change. I am adept at making well-considered decisions and approach problem-solving with a very positive outlook. My talent for creative thinking allows me to cultivate new ideas through a deliberate thought process.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://linkedin.com/in/harisnf300"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-violet-500"
            >
              <span>Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-violet-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/rendevhrs">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/harisnf300/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://medium.com/@harisren">
                  {" "}
                  <FaMedium className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              {/* <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[80%]  w-full object-cover md:h-[80%] md:m-auto sm:m-0 rounded-full"
              src={mainImage}
              alt="me"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[130px] md:w-[70px] circle-text"
                  src={circleImage}
                  alt="acc"
                />
                <FaPlay
                  className=" text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
