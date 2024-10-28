// import { gql, request } from "graphql-request";
import Script from "next/script";

import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
const Herosection = dynamic(() => import("../components/Herosection"), {});
const Services1 = dynamic(() => import("../components/Services1"), {});
const Buffet = dynamic(() => import("../components/Buffet"), {});
const Reviews = dynamic(() => import("../components/Reviews"), {});
const Contact = dynamic(() => import("../components/Contact"), {});
const About = dynamic(() => import("../components/About"), {});
const Catering = dynamic(() => import("../components/Catering"), {});

import { IBanner } from "@/types";

export default function Home({
  homeData,
  mobile,
}: {
  homeData: IBanner[];
  mobile: IBanner[];
}) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        id="google-tags"
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-NJ8TDN3FF2"}
      />
      <Script id="google-tags-2" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NJ8TDN3FF2'); 
        `}
      </Script>
      <main className="">
        <Herosection homeData={homeData} mobile={mobile} />
        <About />
        <Services1 />
        <Catering />
        <Buffet />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const documentDesktop = `
    {
  desktopWebBanners(orderBy: displayOrder_ASC){
        image {
          url
        }
        imageAltText
        imageBlurhash
      }
    }
  `;

  const documentMobile = `
    {
      mobileWebBanners(orderBy: displayOrder_ASC) {
        image {
          url
        }
        imageAltText
        imageBlurhash
      }
    }
  `;

  const desktopRes = await fetch(
    process.env.NEXT_PUBLIC_CMS_API!,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: documentDesktop }),
    }
  );

  
  const mobileRes = await fetch(
    process.env.NEXT_PUBLIC_CMS_API!,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: documentMobile }),
    }
  );

  const desktopJson = await desktopRes.json();  
  const mobileJson = await mobileRes.json();

  const dataDesktop: IBanner[] = desktopJson?.data?.desktopWebBanners?.map(
    (e: any) => ({
      img: e?.image.url,
      alt: e?.imageAltText,
      blurData: e?.imageBlurhash,
    })
  );
  const dataMobile: IBanner[] = mobileJson?.data?.mobileWebBanners?.map(
    (e: any) => ({
      img: e?.image.url,
      alt: e?.imageAltText,
      blurData: e?.imageBlurhash,
    })
  );
 
  return { props: { homeData: dataDesktop, mobile: dataMobile } };
}) satisfies GetServerSideProps<{ homeData: IBanner[]; mobile: IBanner[] }>;
