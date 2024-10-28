import { amar } from "@/pages/_app";
import Image from "next/image";
import React from "react";
import catImg from "../public/assets/Catering.jpg";
import divider from "../public/assets/Divider.svg";
import Icon from "./svg/pat";
import lemon from "../public/assets/Lemon.png";
import onion from "../public/assets/OnionChilli.png";
import spices from "../public/assets/Spices.png";

const Catering = () => {
  return (
    <div id="catering" className="relative scroll-mt-32">
      <div className="absolute -top-8 right-6 hidden md:block -z-10">
        <Image
          src={lemon}
          alt="background image of lemon"
          className="h-52 w-52 "
        />
      </div>
      <div className="absolute bottom-0 md:left-10 -right-8 -z-10 w-fit">
        <Image
          src={spices}
          alt="background image of spices"
          className="lg:h-72 lg:w-72 h-32 w-32 opacity-70"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto w-10/12 place-items-center gap-10 py-12">
        <div className="relative">
          <div>
            <Image
              src={catImg}
              alt="Catreing service image by Himalayan Kitchen"
              className="rounded-xl hover:translate-y-4 hover:translate-x-4 transition-all duration-300"
              placeholder="blur"
              blurDataURL="LDFhhr;]9^o~.TITxZkX57Irs.tl"
            />
            <div className="absolute -bottom-14 -left-14 md:hidden block">
              <Image
                src={onion}
                alt="background onion image"
                className="h-36 w-36"
                unoptimized
              />
            </div>
          </div>
          <div className="absolute w-full h-full bg-secondary top-4 left-4 -z-10 rounded-xl"></div>
        </div>
        <div className="w-full">
          <div>
            <h2
              className={`text-2xl md:text-4xl font-bold text-center md:text-left ${amar.className}`}
            >
              Invite us to Your Next Celebration!
            </h2>
            <div className="py-6 overflow-clip">
              {/* <Image src={divider} alt="divider " className="w-full" /> */}
              <Icon />
            </div>
            <h2 className="text-lg md:text-[22px]  flex flex-col space-y-2 text-center md:text-left">
              <span>
                {`Special events deserve exceptional food! Whether it’s your child’s birthday, your parents’ 50th anniversary, or any other occasion, we’re here to make it unforgettable with the flavors of Himalayan Kitchen.
`}
              </span>
              <span>{` Our catering team is ready to assist you every step of the way—from helping you select the perfect menu to delivering attentive service on the big day.
`}</span>
              <span>
              Get in touch to make your next event a success!
              {" "}
              Call us at{" "}
                <a

                  href="tel:+1 (209) 699-4004"
                  className="underline text-green"
                >
                +1 (209) 699-4004

                </a>{" "}
                or whatsapp us at{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=13617207389"
                  target="_blank"
                  className="text-green underline inline-block"
                >
                  {" "}
                  {/* +1 (669) 666-7510 */}
                  +1 (361) 720-7389

                </a>{" "}
                Let’s create a memorable culinary experience for you and your guests
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
