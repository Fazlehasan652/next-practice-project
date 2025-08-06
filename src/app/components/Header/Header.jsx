import React from "react";

import "./Header.css";
// import imges from "../../assets/pngfind.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="">
          <marquee className="banner__title" behavior="" direction="">
            <div className="flex items-center justify-center gap-3 bg-gray-950/20 w-[600px] rounded-full  shadow shadow-fuchsia-500 ">
              {/* <Image src="/public/assets/pngfind.png" alt="50%" className="imginSize mt-5" /> */}
              <div className="imginSize mt-5">
                <Image
                  height={500}
                  width={500}
                  src="/assets/pngfind.png"
                  alt="50%"
                />
              </div>
              <span className="text-shadow-2xs text-shadow-violet-500 -mt-5">
                Sales going on.
              </span>
            </div>
          </marquee>
          <div className="flex justify-around items-center  mt-48 text-center ">
            <article className="bg-green-500/50 p-1 rounded-lg text-white text-xl h-30 w-60">
              <i className="bi bi-truck text-5xl"></i>
              <h3 className="text-center">Shipping within <br/> 7 days</h3>
            </article>
            <article className="bg-green-500/50 p-4 rounded-lg text-white text-xl h-30 w-60">
              <i className="bi bi-chat-left-dots text-5xl"></i>
              <h3 className="text-center">Support 24/7</h3>
            </article>
            <article className="bg-green-500/50 p-2 rounded-lg text-white text-xl h-30 w-60">
             <i className="bi bi-credit-card-2-front text-5xl"></i>
              <h3 className="text-center">Safe Payment</h3>
            </article>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
