/* eslint-disable react/no-unescaped-entities */
'use client';
import img1 from '/public/images/recepi1.png';
import img2 from '/public/images/recepi2.png';
import img3 from '/public/images/recepi3.png';

import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { LuDot } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Wrapper from './Wrapper';

const sliderContent = [
  {
    id: 1,
    title: 'Taste Our New Recipe',
    paragraph1:
      'Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. ',
    paragraph2:
      "There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.",
  },
  {
    id: 2,
    title: 'Taste Our New Recipe',
    paragraph1:
      'Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. ',
    paragraph2:
      "There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.",
  },
  {
    id: 3,
    title: 'Taste Our New Recipe',
    paragraph1:
      'Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. ',
    paragraph2:
      "There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.",
  },
  {
    id: 4,
    title: 'Taste Our New Recipe',
    paragraph1:
      'Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. ',
    paragraph2:
      "There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.",
  },
  {
    id: 5,
    title: 'Taste Our New Recipe',
    paragraph1:
      'Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. ',
    paragraph2:
      "There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.",
  },
];

const imageSlider = [
  {
    id: 1,
    photoURL: img1,
    content: ['Pita bread or wraps', 'Toppings: tomatoes, tahini sauce, etc.'],
  },
  {
    id: 2,
    photoURL: img2,
    content: ['Pita bread or wraps', 'Toppings: tomatoes, tahini sauce, etc.'],
  },
  {
    id: 3,
    photoURL: img3,
    content: ['Pita bread or wraps', 'Toppings: tomatoes, tahini sauce, etc.'],
  },
  {
    id: 4,
    photoURL: img1,
    content: ['Pita bread or wraps', 'Toppings: tomatoes, tahini sauce, etc.'],
  },
  {
    id: 5,
    photoURL: img2,
    content: ['Pita bread or wraps', 'Toppings: tomatoes, tahini sauce, etc.'],
  },
];
const Recipes = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  //for slide
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className='bg-purple pl-[18px] py-[100px] '>
      <div className='max-w-[1423px] px-2 md:px-4 mx-auto'>
        <div className='flex flex-col items-center lg:flex-row gap-[50px] md:gap-[80px] lg:gap-[110px]'>
          <div className='w-full lg:max-w-[475px] overflow-hidden'>
            <div className='flex flex-nowrap items-center gap-[10px] mb-3'>
              <div className='bg-gradient-to-r from-white to-primary w-[50px]  h-[2px] top-2/4 -translate-y-2/4 inline-block'></div>
              <h5 className='font-lemonada text-primary font-[380] leading-4 tracking-2'>
                New Recipes
              </h5>
            </div>
            <div className='overflow-hidden'>
              <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                className='swiper-1'
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Autoplay]}
              >
                {sliderContent?.map((item) => (
                  <SwiperSlide key={item?.id}>
                    <div className='cursor-pointer'>
                      <h2 className='text-3xl lg:text-44 text-secondary font-bakildaHistori leading-normal lg:leading-[60px] mb-[19px] '>
                        {item?.title}
                      </h2>
                      <div className='leading-[24px] '>
                        <p className='text-paragraph'>{item?.paragraph1}</p>
                        <p className='text-paragraph pt-5'>
                          {item?.paragraph2}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* slider btn */}
              <div className='flex items-center gap-[30px] text-2xl justify-start mt-[40px]'>
                <button
                  onClick={handlePrevClick}
                  className='w-10 h-10 border border-secondary rounded-full p-1 grid place-content-center'
                >
                  <FaArrowLeftLong className='text-base' />
                </button>
                <button
                  onClick={handleNextClick}
                  className='w-10 h-10 border border-secondary rounded-full p-1 grid place-content-center'
                >
                  <FaArrowRightLong className='text-base' />
                </button>
              </div>
            </div>
          </div>

          <div className='overflow-hidden w-full'>
            <Swiper
              className='swiper-2'
              loop={true}
              autoplay={{
                delay: 2700,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              modules={[Autoplay]}
            >
              {imageSlider?.map((item) => (
                <SwiperSlide
                  key={item?.id}
                  className='relative w-full !flex justify-center items-center rounded-[28px] cursor-pointer group'
                >
                  <Image
                    src={item?.photoURL?.src}
                    width={item?.photoURL?.width}
                    height={item?.photoURL?.height}
                    alt='slider Image'
                    className='block'
                  />
                  <div className='rounded-[28px] absolute bottom-0 left-0 w-full h-full opacity-0 scale-0 bg-[#101113] group-hover:opacity-[0.4] group-hover:scale-100 duration-300 border-8 border-[#f5f5f5]'></div>

                  <ul className='rounded-[28px] absolute -bottom-[200px] left-0 w-full h-auto duration-300 leading-[26px] tracking-2 text-white px-6 list-inside list-dote group-hover:bottom-[60px]'>
                    <li className='flex flex-wrap items-center'>
                      <LuDot />
                      <p>{item?.content[0]}</p>
                    </li>
                    <li className='flex flex-wrap items-center'>
                      <LuDot />
                      <p>{item?.content[1]}</p>
                    </li>
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
