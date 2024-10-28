import React, { useRef, useState } from "react";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import I1 from "../public/assets/GoatBiryani.jpg";
import I2 from "../public/assets/Chicken65.jpg";
import I3 from "../public/assets/ButterChicken.jpg";
import I4 from "../public/assets/Dosa.png";
import Image from "next/legacy/image";
import { amar } from "@/pages/_app";
import Icon from "./svg/pat";

import onion from "../public/assets/OnionChilli.png";

const service = [
  {
    title: "Goat Biryani",
    subTitle: "Spiced and fragrant rice mixed with marinated goat.",
    img: I1,
    alt: "Goat Biryani",
    blurData: "L7Hw#?.A}rM_#ODOIV?b00E05ko#",
  },
  {
    title: "Chicken 65",
    subTitle: "Deep-fried chicken tossed in our chef's specials sauces.",
    img: I2,
    alt: "Chicken 65",
    blurData: "L4Gb6R4X.k~Dx+IWbuMy00x8Hs4-",
  },
  {
    title: "Butter Chicken",
    subTitle:
      "Chicken pieces cooked in a creamy tomato-based sauce with butter and spices.",
    img: I3,
    alt: "Butter Chicken",
    blurData: "LBH,kfI:6*WX}?$$NHoJ3DxD;{kC",
  },
  {
    title: "Dosa",
    subTitle: "Crispy, thin crepe made of black lentils and rice batter.",
    img: I4,
    alt: "Dosa",
    blurData: "L1Gti^00G+%D000U%M}?003G:U#8",
  },
];

export default function Services1() {
  const sliderSettings: Settings = {
    slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const [swiper, setSwiper] = useState<any>();
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto w-10/12 py-16">
        <div className="pb-6">
          <h2
            className={`text-center text-2xl md:text-4xl font-bold pb-8 ${amar.className}`}
          >
            {"We’ve got something for everyone!"}
          </h2>
          <div className="pb-6 overflow-clip ">
            <Icon />
          </div>
        </div>
        <Slider {...sliderSettings}>
          {service.map((serv) => (
            <div className="px-2" key={serv.title}>
              <div className="text-center md:text-left relative group/item w-full h-full ">
                <Image
                  src={serv.img}
                  alt={serv.alt + "image"}
                  className="rounded-xl"
                  placeholder="blur"
                  blurDataURL={serv.blurData}
                />
                <div className="absolute w-full bottom-0 left-0 z-10 text-black bg-white py-3 md:py-0 md:group-hover/item:py-7 px-4 md:h-0 md:group-hover/item:h-32 md:invisible md:group-hover/item:visible rounded-t-3xl text-center transition-all duration-500">
                  <h2 className="pb-1">{serv.title}</h2>
                  <h2 className="text-xs md:text-sm">{serv.subTitle}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
