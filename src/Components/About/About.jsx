import React from "react";
import HeroImg from "../../Assets/walilima2.jpg";

const About = () => {
  return (
    <>
      <div className="">
        <div className="container mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[600px] place-content-center gap-16">
            <img src={HeroImg} alt="" />
            <div className="h-[100%] w-[100%] place-content-center grid grid-cols-1 gap-4">
              <h1 className="text-8xl font-poppins text-primary">
                About
                <span className="text-blue-900 font-bold"> Us</span>
              </h1>
              <p className="text-gray-400 text-[18px]">
                Didirikan oleh Hj. Soleha bersama H. Suhri pada tahun 2010,
                Al-Furqon Indo Wisata dipercayai untuk menjadi jembatan antara
                jamaah haji / umroh bisa menunaikan rukun islam yang ke lima
              </p>
              <div className="mt-10">
                <button className="w-[150px] bg-primary text-white font-bold py-2 px-4 rounded-md">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
