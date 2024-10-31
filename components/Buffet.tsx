import { amar } from "@/pages/_app";
import Image from "next/image";
import React from "react";
import bufImg from "../public/assets/Buffet.jpg";
import divider from "../public/assets/Divider.svg";
import Icon from "./svg/pat";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import I1 from "../public/assets/buffet/IMG_4879.jpg";
import I2 from "../public/assets/buffet/IMG_4881.jpg";
import I3 from "../public/assets/buffet/IMG_4882.jpg";
import I4 from "../public/assets/buffet/IMG_4883.jpg";
import I5 from "../public/assets/buffet/IMG_4887.jpg";
import I6 from "../public/assets/buffet/IMG_4890.jpg";
import I7 from "../public/assets/buffet/IMG_4892.jpg";

const buffetImage = [
  {
    title: "buffet service food image1",
    img: I1,
    desc: "",
    blurData: "L9HUd~VV00bJ.-XBIns+~CS6bxs+",
  },
  {
    title: "buffet service - various idian food image2",
    img: I2,
    desc: "",
    blurData: "LCG8r{*058bX--NyIBsR$dofE2Ri",
  },
  {
    title: "buffet service - various idian food  image3",
    img: I3,
    desc: "",
    blurData: "L6HeF5F~00XI1UVDvc$-%~ITMJw~",
  },
  {
    title: "bubuffet service - various idian food ffet image4",
    img: I4,
    desc: "",
    blurData: "L8GR#c{a00xA0Lx]wrxv%htSM{NL",
  },
  {
    title: "buffet service - various idian food  image5",
    img: I5,
    desc: "",
    blurData: "LIHLJ6*04qw]^hENnSn3MyxbrqV?",
  },
  {
    title: "buffet service - various idian food  image6",
    img: I6,
    desc: "",
    blurData: "LBF5dB5=0N#6-p4=-.~A03vzr=T0",
  },
  {
    title: "buffet service panipuri image",
    img: I7,
    desc: "",
    blurData: "L6GRxK?v00D$=lxt02IB~BxaNKR.",
  },
];

const Buffet = () => {
  const sliderSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: true,
    cssEase: "linear",
    draggable: true,
    // centerMode: true,
    // fade:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="buffet" className="relative scroll-mt-32">
      <div className="custom-shape-divider-bottom-1677566957">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="bg-primary pb-16 pt-8 md:py-28 text-primText">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto w-11/12 place-items-center gap-10">
          <div className="w-full">
            <h2
              className={`text-2xl md:text-4xl font-bold text-center md:text-left py-4 ${amar.className}`}
            >
              {"Eat to your heart's content"}
            </h2>
            <div className="py-6  overflow-clip">
              {/* <Image src={divider} alt="divider " className="w-full" /> */}
              <Icon />
            </div>
            <h2 className="text-lg md:text-[22px] flex flex-col space-y-4 text-center md:text-left">
              <span>
                {`At Himalayan Kitchen, we believe that food is an expression of love and hospitality. That’s why we offer a buffet that reflects the warmth of our rooted Indian culture. We invite you to join us and experience the joy of being fed and cared for like family, while indulging in the vibrant and flavorful Indian cuisine.`}
              </span>
              <span>{`Join us for Lunch Buffet every Friday to Sunday from 11 AM to 3 PM`}</span>
            </h2>
          </div>
          <div className="max-w-lg md:max-w-3xl w-11/12 mx-auto">
            <Slider {...sliderSettings}>
              {buffetImage.map((serv) => (
                <div className="px-5 py-3" key={serv.title}>
                  <div className="text-center md:text-left relative group/item  ">
                    <Image
                      src={serv.img}
                      alt={serv.title}
                      className="rounded-xl"
                      placeholder="blur"
                      blurDataURL={serv.blurData}
                    />
                    <div className="absolute w-full h-full inset-0 bg-green -z-10 translate-y-4 translate-x-4 transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buffet;
