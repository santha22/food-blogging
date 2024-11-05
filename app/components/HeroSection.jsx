// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
    
//   return (
//     <section className="flex flex-col h-full md:flex-row justify-between items-center mb-16">
//       <div className="order-2 h-full md:order-1 w-full md:w-1/2 px-8 md:pl-24 md:pr-8 text-center md:text-left">
//         <div className="pb-64 hidden md:md:inline-block">
//           <Image
//             src="/Screenshot_669 1.png"
//             alt="Food Truck"
//             width={735}
//             height={804}
//             className="top-10 w-20 h-16  hidden md:inline-block"
//           />
//         </div>
//         <h1 className="text-3xl md:text-5xl font-bold text-[#0E2368] leading-tight mb-6 pt-10 md:pt-0">
//           Discover the <span className="text-[#E23744]">Best</span> Food and
//           Drinks
//         </h1>
//         <p className="text-base text-[#444957] mb-8">
//           Naturally made Healthcare Products for the better care & support of
//           your body.
//         </p>
//         <button className="bg-[#E23744] text-white px-8 py-3 rounded-full">
//           Explore Now!
//         </button>
//       </div>
//       {/* <div className="order-1 md:order-2 w-full md:w-1/2 relative">
//           {/* <Image src="/pizza.png" alt="Pizza" width={107} height={83} className="w-full md:rounded-bl-[200px] object-contain" /> */}
//       {/* <Image src="/pizza.png" alt="Pizza" fill className="object-contain" />
//           <button className="absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-full text-sm">
//             Get In Touch
//           </button>
//         </div>                      */}

//       <div className="order-1 md:order-2 hero__image-container">
//         <div className="hero__image">
//           <Image src="/pizza.png" alt="hero" fill className="object-contain" />
//         </div>
//         <div className="hero__image-overlay" />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col h-full md:flex-row justify-between items-center mb-16">
//       <div className="order-2 h-full md:order-1 w-full md:w-1/2 px-8 md:pl-24 md:pr-8 text-center md:text-left">
//         <div className="pb-64 hidden md:inline-block">
//           <Image
//             src="/Screenshot_669 1.png"
//             alt="Food Truck"
//             width={735}
//             height={804}
//             className="top-10 w-20 h-16 hidden md:inline-block"
//           />
//         </div>
//         <h1 className="text-3xl md:text-5xl font-bold text-[#0E2368] leading-tight mb-6 pt-10 md:pt-0">
//           Discover the <span className="text-[#E23744]">Best</span> Food and
//           Drinks
//         </h1>
//         <p className="text-base text-[#444957] mb-8">
//           Naturally made Healthcare Products for the better care & support of
//           your body.
//         </p>
//         <button className="bg-[#E23744] text-white px-8 py-3 rounded-full">
//           Explore Now!
//         </button>
//       </div>

//       <div className="order-1 md:order-2 hero__image-container relative">
//         <div className="hero__image relative">
//           <Image src="/pizza.png" alt="hero" fill className="object-cover rounded-bl-[200px]" />
//         </div>
//         <div className="hero__image-overlay">
//           <button className="absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-full text-sm">
//             Get In Touch
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';
import Image from 'next/image';
import Header from './Header';

const HeroSection = () => {
  return (
    <div>
      <Header />
    </div>
    // <section className=" flex flex-col relative h-[804px] w-full">
    //   <div></div>
    //   <div className="relative flex justify-end">
    //     <div
    //       // style={{
    //       //   left: "688px",
    //       //   gap: "0px",
    //       //   opacity: "0px",
    //       // }}
    //     >
    //       <Image src="/Vector.svg" width={752} height={839} alt="vector" />

    //       {/* <div className="absolute -z-10"> */}
    //         <Image
    //           src="/pizza.png"
    //           width={735}
    //           height={804}
    //           className="absolute -z-10 top-[5px]"
    //           // top: 5px;
    //           // left: 705px;
    //           // gap: 0px;
    //           // border-radius: 0px 0px 0px 198.9px;
    //           // opacity: 0px;
    //         />
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;