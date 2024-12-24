import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import FoodCategory from '../foodcatagery/page';
import foodpic1 from '../../../public/foodpic1.jpeg';
import foodpic2 from '../../../public/foodpic2.jpeg';
import foodpic3 from '../../../public/foodpic3.jpeg';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%]">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap">
            It{`'`}s Quick & Amusing!
          </h1>

          <h1 className="text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
          </h1>

          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-yellow-800 transition duration-300">
              See More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-[50px] md:mt-0 flex justify-center">
          <Image
            src="/food.png"
            alt="Hero Image"
            width={700}
            height={500}
            className="object-contain w-full max-w-[700px] h-auto"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%]">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
            About Us
          </h1>

          <h1 className="text-[20px] md:text-[50px] font-bold mt-2">
            <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
          </h1>

          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="text-[10px] md:text-[16px] font-normal flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-[10px] md:text-[16px] font-normal flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="text-[10px] md:text-[16px] font-normal flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-yellow-800 transition duration-300">
              See More
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="mt-[50px] md:mt-0 flex flex-col items-center">
          <Image src={foodpic1} alt="Food Image 1" className="w-full max-w-[336px] h-auto object-contain" width={336} height={536} />
          <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-x-0 md:space-x-4">
            <Image src={foodpic2} alt="Food Image 2" className="w-[150px] h-auto object-contain" />
            <Image src={foodpic3} alt="Food Image 3" className="w-[150px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Food Category */}
      <FoodCategory />
    </>
  );
};

export default HomePage;
   