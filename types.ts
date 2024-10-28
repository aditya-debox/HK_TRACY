import { StaticImageData } from "next/image";

export interface IBanner {
  img: StaticImageData;
  alt: string;
  blurData: string;
}

export interface HerosectionProps {
  homeData: IBanner[];
  mobile: IBanner[];
}
