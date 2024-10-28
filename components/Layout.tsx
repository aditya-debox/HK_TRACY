import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"), {});
const Navbar = dynamic(() => import("./Navbar"), {});

function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <div className="min-h-[100vh] ">
      <Head>
        <title>
          {"Himalayan Kitchen - Best Indian Restaurant in Tracy, CA"}
        </title>
        <meta
          name="description"
          content="Best Indian Restaurant serving authentic Biryanis, Curries, Appetizers, Naans, Tandoori and Desserts. Dine-in, Order Online, Catering, DoorDash, UberEats, GrubHub."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.png" />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={
            "Himalayan Kitchen - Best Indian Restaurant in Tracy, CA"
          }
        />
        <meta property="og:url" content="https://himalayankitchentracy.com/" />
        <meta
          property="og:image"
          content="/assets/Himalayan-kitchen_Weekday-specials_Webbanner.jpg"
        />
        <meta
          property="og:type"
          content="Biryanis, Curries, Appetizers, Naans, Tandoori and Desserts."
        />
        <meta
          property="og:description"
          content={
            "Best Indian Restaurant serving authentic Biryanis, Curries, Appetizers, Naans, Tandoori and Desserts. Dine-in, Order Online, Catering, DoorDash, UberEats, GrubHub."
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={
            "Himalayan Kitchen - Best Indian Restaurant in Tracy, CA"
          }
        />
        <meta
          property="twitter:description"
          content={
            "Best Indian Restaurant serving authentic Biryanis, Curries, Appetizers, Naans, Tandoori and Desserts. Dine-in, Order Online, Catering, DoorDash, UberEats, GrubHub."
          }
        />
        <meta property="twitter:url" content="https://himalayankitchentracy.com/" />
        <meta
          property="twitter:image"
          content="/assets/Himalayan-kitchen_Weekday-specials_Webbanner.jpg"
        />
      </Head>
      {loading ? (
        <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center transition-all visible  z-50">
          {/* <InfinitySpin width="200" color="#1a7780" /> */}
          Loading..
        </div>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
