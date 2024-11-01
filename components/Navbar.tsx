import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import logo from "../public/assets/HimalayanKitchen_Logo.svg";

const navigation = [
  // { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Catering", href: "#catering" },
  // { name: "Catering Menu", href: "HK_Catering_Menu.pdf" },
  { name: "Buffet", href: "#buffet" },
  { name: "Contact Us", href: "#contact" },
];
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0  left-0  shadow-xl bg-primText md:py-4`}
    >
      {/* ${scrolled ? "bg-ternary backdrop-blur-sm" : "bg-transparent"} */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 " aria-label="Top">
        <div className="w-full  sm:-mb-0 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer">
                  <span className="sr-only">Himalayan Kitchen</span>
                  <div className="hover:scale-110 duration-300 transition-transform px-4">
                    {" "}
                    <Image
                      priority
                      // height={120}
                      // width={160}
                      className="lg:w-72 w-52 h-20"
                      alt="Himalayan Kitchen Logo"
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-8 text-center items-center relative lg:flex">
              {navigation.map((navItem) => (
                <Link key={navItem.name} href={navItem.href}>
                  <span
                    className={`text-black hover:text-secondary text-lg cursor-pointer font-bold duration-300 transition-colors`}
                    //  ${ router.pathname == navItem.href ? "text-secondary" : ""}
                  >
                    {navItem.name}
                  </span>
                </Link>
              ))}
              {/* <Link
                href={
                  "https://www.clover.com/online-ordering/himalayan-kitchen-mountain-view"
                }
                target={"_blank"}
              >
                <button className="text-sm bg-secondary  hover:bg-ternary hover:text-white border-2 font-bold  px-4 py-1.5 text-white rounded-md transition-colors duration-200">
                  Order Now
                </button>
              </Link> */}
              <a
                // href="https://himalayan-kitchen.getbento.com/online-ordering/"
                // target={"_blank"}

                rel="noreferrer"
              >
                <div className="inline py-2 font-bold items-center justify-center text-sm md:text-base text-black relative">
                  <span className="cursor-pointer text-lg border p-2 border-black rounded hover:bg-primary hover:text-primText">
                    Online Order
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* PHONES -> TILL MD */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex p-3 lg:hidden absolute top-3 right-4 ml-auto"
          aria-label="Menu Mobile Button"
        >
          <svg
            className="w-8 h-8 fill-white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed transition-all top-0 left-0 w-full h-screen z-[100]  text-lg`}
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute top-4 right-8 text-secondary text-5xl"
            aria-label="Menu Mobile Button"
          >
            &times;
          </button>
          <ul className="flex flex-col justify-center items-center gap-4 h-full bg-beige">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xl block font-medium `}
              >
                <span onClick={() => setIsOpen(false)}>{link.name}</span>
              </Link>
            ))}

            <Link
              href={"https://himalayan-kitchen.getbento.com/online-ordering/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="text-lg bg-white hover:bg-primary  px-4 py-1.5 text-black rounded-md border border-black hover:text-primText">
                Order
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
