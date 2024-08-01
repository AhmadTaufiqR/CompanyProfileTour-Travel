import React from "react";
import HeroImg from "../../Assets/hero-side.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative z-[-1] top-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[600px] place-items-center">
            <div className="flex flex-col grid-cols-2 gap-[40px]">
              <h1 className="text-7xl font-poppins text-primary">
                Tour & Travel <br></br>
                <span className="text-blue-900 font-bold">
                  Al Furqon Indo Wisata
                </span>
              </h1>
              <hr className="border-0 bg-black h-[3px] w-[200px]" />
              <p className="text-lg font-poppins text-primary">
                Berdiri sejak tahun 2010. Kami menyediakan berbagai paket wisata{" "}
                <br />
                haji dan umroh dan menawarkan pengalaman berwisata yang <br />
                menyenangkan.
              </p>
            </div>
            <img src={HeroImg} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
