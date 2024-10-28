import { HerosectionProps } from "@/types";
import Image from "next/image";

// import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// const homeData = [
//   {
//     img: bannerLaunch,
//     alt: "TRACY Opening Soon",
//     blurData: "LBF5]mIV00M|%jM{Myj?00?Ex[s.",
//   },
//   {
//     img: banner0,
//     alt: "Midnight Biryani Combo",
//     blurData: "LbO8@0jF+xWC||j=NIoJIqSxr]j?",
//   },
//   {
//     img: banner1,
//     alt: "Catering packages starting at $15",
//     blurData: "LePzJFni-gni}WS5awj[I.s.NfR-",
//   },
//   {
//     img: banner2,
//     alt: "Delivery Service image",
//     blurData: "LDRU4m~SyU^~:jQ.bvIV]O4=#8Dk",
//   },
// ];

// const mobile = [
//   {
//     img: bannerLaunchMobile,
//     alt: "TRACY Opening Soon",
//     blurData: "LIC6r%WBE2WB?wWBM|ay00ofs:oe",
//   },
//   {
//     img: mobBanner0,
//     alt: "Midnight Biryani Combo",
//     blurData: "LLO**FsD#Doe|7WWWEja:Wj=XQaf",
//   },
//   {
//     img: mobBanner1,
//     alt: "Catering packages starting at $15",
//     blurData: "LvNtdct6oIWC}YR+oIoLV?niS4WV",
//   },
// ];

const Herosection = ({ homeData, mobile }: HerosectionProps) => {
  return (
    <div className="relative">
      <div className="">
        <div className="pt-12 hidden md:block">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={false}
            speed={13000}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full relative"
          >
            {homeData.map((home: any) => {
              return (
                <SwiperSlide
                  key={home.alt}
                  className="flex justify-center h-full "
                >
                  <div className="min-h-screen relative">
                    <Image
                      src={home.img}
                      className="h-full bg-cover object-cover"
                      fill
                      alt={home.alt}
                      priority
                      placeholder="blur"
                      blurDataURL={home.blurData}
                    />
                    <div className="custom-shape-divider-bottom-1677500264">
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
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* MD - */}
        <div className="block md:hidden ">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={false}
            speed={13000}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full relative"
          >
            {mobile.map((home: any) => {
              return (
                <SwiperSlide
                  key={home.alt}
                  className="flex justify-center h-full"
                >
                  <div className="min-h-screen relative">
                    <Image
                      src={home.img}
                      className="h-full bg-center"
                      fill
                      alt={home.alt}
                      priority
                      placeholder="blur"
                      blurDataURL={home.blurData}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
