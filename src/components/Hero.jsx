import Image from "next/image";
import React from "react";
import hero from "../../public/hero.png";
import logo from "../../public/anime.png";

const Hero = () => {
  return (
    <section className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className=" text-4xl md:text-6xl text-white lg:max-w-lg font-semibold md:font-bold leading-[120%]">
          Enjoy<span className="text-red-400"> The Anime App</span> and checkout
          your favorite anime
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src={logo} alt="anime" fill className="object-contain" />
      </div>
    </section>
  );
};

export default Hero;
