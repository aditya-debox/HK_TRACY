import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amaranth, Montserrat, Playfair_Display, Nunito } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import { OnlineButton, OnlineButton2 } from "../components/OnlineButton";
import { useState } from "react";

const mont = Nunito({
  weight: ["600"],
  subsets: ["latin"],
});

export const amar = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
});


// const mont = Montserrat({
//   weight: "600",
//   subsets: ["latin"],
// });
// export const amar = Amaranth({
//   weight: "700",
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false);
  return (
    // <ParallaxProvider scrollAxis="vertical">
    <div className={mont.className}>
      <Layout>
        <Component {...pageProps} />

        <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-10">
          <a
            // target={"_blank"}
            // href="https://himalayan-kitchen.getbento.com/online-ordering/"
          >
            <button className="relative block mx-auto group  cursor-pointer w-fit">
              <span
                className={`relative inline-block px-3 py-1.5 text-lg font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md transition-colors duration-200 bg-green hover:bg-black`}
              >
                Order Now
              </span>
            </button>
          </a>
        </div>
      </Layout>
    </div>
    // </ParallaxProvider>
  );
}
