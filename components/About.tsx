import { amar } from "@/pages/_app";
import Image from "next/image";
import React from "react";
import abooutGif from "../public/assets/AboutUs.gif";
import divider from "../public/assets/Divider.svg";
import lemon from "../public/assets/Lemon.png";
import onion from "../public/assets/OnionChilli.png";
import Icon from "./svg/pat";

const About = () => {
  return (
    <div id="about" className="relative scroll-mt-28 ">
      <div className="absolute -top-8 right-6 hidden md:block  -z-10">
        <Image src={lemon} alt="" className="h-52 w-52 " />
      </div>
      <div className="absolute bottom-0 md:-left-4 -right-7 z-10 w-fit ">
        <Image src={onion} alt="" className="h-32 w-32 lg:h-72 lg:w-72 " />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto w-10/12 place-items-center py-16 gap-10 ">
        <div className="relative">
          <div>
            <Image
              src={abooutGif}
              alt="About Us preview gif about food"
              className="rounded-xl hover:translate-y-4 hover:translate-x-4 transition-all duration-300 "
              unoptimized
            />
            <div className="absolute -bottom-14 -left-14 md:hidden block">
              <Image
                src={lemon}
                alt="preview image of lemon"
                className="h-36 w-36"
                unoptimized
              />
            </div>
          </div>
          <div className="absolute w-full h-full bg-secondary top-4 left-4 -z-10 rounded-xl"></div>
        </div>
        <div className="w-full ">
          <div>
            <h2
              className={`text-2xl md:text-4xl font-bold text-center md:text-left ${amar.className}`}
            >
              {`For the Love of Serving Flavorful Indian Cuisine`}
            </h2>
            <div className="py-6 overflow-clip">
              {/* <Image src={divider} alt="divider " className="w-full" /> */}
              <Icon />
            </div>
            <h2 className="text-lg md:text-[22px] leading-relaxed text-center md:text-left">
              <span className="block">Namaste!</span>
              {`Welcome to Himalayan Kitchen, now opening in the vibrant community of Tracy, CA! After a decade of serving delicious Indian food in Mountain View, we are thrilled to bring our culinary journey to a new home. Inspired by India’s rich cultural heritage, we are dedicated to providing an authentic dining experience in a warm, welcoming space. Join us in Tracy to explore the best of Indian flavors, made with passion and tradition.
`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
