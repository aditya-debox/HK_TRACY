// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import { amar } from "@/pages/_app";
import reviewgif from "../public/assets/Reviews.gif";
import Icon from "./svg/pat";

const reviews = [
  {
    review:
      "Went for a lunch buffet.Great variety of Indian food and desserts. Pani puri was a good add on.",
    customerName: "Hari Lukku",
    bgColor: "secondary",
  },
  {
    review:
      "I've only been there on Saturdays for the lunch buffet. Both times it was good and worth the $25. They include drinks (beer too!) and have a nice dessert selection. plus they have lunch buffet everyday! Even Sunday!",
    customerName: "Thomas Rodriguez",
    bgColor: "green",
  },
  {
    review:
      "We had a buffet lunch. Worth the money. There were wide spread options both for veg and non veg. 2 starters, 4 desserts, 2 chaats were highlight on the menu.All items were very tasty.",
    customerName: "Mahima Prabhu",
    bgColor: "ternary",
  },
];

export default function Reviews() {
  // const [bgColor, setBgColor] = useState({});
  return (
    <div className="relative w-10/12 mx-auto ">
      <h2
        className={`text-2xl md:text-4xl font-bold text-center py-8  ${amar.className}`}
      >
        Our Customers Love Us
      </h2>
      <div className="pb-6 overflow-clip ">
        <Icon />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto place-items-center py-12 gap-10">
        <div
          className={`max-w-xs  lg:max-w-lg border bg-secondary  lg:rounded-full rounded-md p-6 lg:min-h-[500px] min-h-[350px] grid place-items-center`}
        >
          <Swiper
            wrapperClass=""
            spaceBetween={0}
            centeredSlides={true}
            autoHeight
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="text-white">
                  <h2 className="text-lg italic">{review.review}</h2>
                  <h3 className={`pt-2 text-2xl ${amar.className}`}>
                    {review.customerName}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative">
          <Image
            src={reviewgif}
            alt="what are custome saying about Himalayan Kitchen foods"
            className="rounded-xl hover:translate-y-4 hover:translate-x-4 transition-all duration-300"
            unoptimized
          />
          <div className="absolute w-full h-full bg-secondary top-4 left-4 -z-10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
