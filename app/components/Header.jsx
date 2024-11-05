"use client"
import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="pl-20 w-full bg-white  max-md:pl-5 md:mb-64 mb-16">
      <div className="flex gap-5 w-full max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full order-2 sm:order-1">
          <div className="flex flex-col mt-8 w-full max-md:mt-10">
            <Image src="/Screenshot_669 1.png" width={107} height={200} className="hidden md:md:inline-block"/>
            <div className="flex flex-col sm:justify-center justify-start">
              <h1 className="mt-28 text-6xl text-[#0E2368] font-bold leading-[69px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px]">
                Discover the <br /> <span className="text-red-500">Best</span>{" "}
                Food and Drinks
              </h1>
              <p className="text-sm md:text-base text-[#444957] mt-7 w-[345px]">
                Naturally made Healthcare Products for the better care & support
                of your body.
              </p>
              <button className="font-bold gap-2 md:self-start self-center px-9 py-3.5 mt-10 text-lg tracking-normal leading-9 text-white bg-red-500 min-h-[63px] rounded-[34px] max-md:px-5 max-md:mt-10">
                Explore Now!
              </button>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[68%] h-[426px] max-md:ml-0 max-md:w-full order-1 sm:order-2">
          <div className="flex relative flex-col  text-base font-semibold tracking-wide leading-9 text-white min-h-[839px] max-md:mt-10 max-md:max-w-full">
            <div className="hero-section relative">
              <Image
                  src="/pizza.png"
                  alt="hero"
                  // fill
                  width={735}
                  height={804}
                  className="object-contain right-0 absolute"
                />
              <Image
                  src="/Vector.svg"
                  alt="hero"
                  // fill
                  width={752} height={839}
                  className="object-contain z-10 top-0 absolute right-0 "
                />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;