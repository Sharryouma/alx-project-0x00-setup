import Image from "next/image";
import React from "react";
import Pill from "./Pill";

// Import images from the public directory
import HOUSE_IMAGE from "@/public/assets/images/house.png";
import STAR_IMAGE from "@/public/assets/images/star.png";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image
        className="rounded-lg"
        src={HOUSE_IMAGE}
        width={378.56}
        height={299.37}
        alt="house image"
      />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h3 className="font-semibold text-[22px]">
            Villa Arrecife Beach House
          </h3>
          <p className="font-medium text-[17px] text-[#929292]">
            Sideman, Bali, Indonesia
          </p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2456 9.22324C16.8562 9.05231 16.4356 8.96423..."
                fill="#131212"
              />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.9053 14.1692C16.9053 14.3575 16.8305 14.538..." />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.21454 6.52567H5.1875V7.8992H7.21454V9.27322H..." />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">8</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-[19.3px] text-[#0D806F]">
            $2,480/
            <span className="font-medium text-[#929292] text-[15px]">
              night
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
