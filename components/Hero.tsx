import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={"/bannerImg.webp"}
        alt="Banner-Image"
        width={1000}
        height={1000}
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute text-center flex justify-center items-center flex-col text-white top-0 w-full h-full bg-black/30">
        <h2 className="text-5xl md:text-7xl lg:text-[150px] font-medium">
          Name Here!
        </h2>
        <p className="text-2xl md:text-3xl lg:7xl">Photographer, Traveller</p>
      </div>
    </div>
  );
};

export default Hero;
