'use client';
import Image from 'next/image';
import Wrapper from './Wrapper';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '/public/images/banner.png';
import img1 from '/public/images/coffee-1.png';
import img2 from '/public/images/coffee-2.png';
import img3 from '/public/images/coffee-3.png';

const sliderContent = [
  {
    id: '1',
    message: 'WELCOME TO OUR',
    title: 'Unlocklive',
    subTitle: 'Elevating Your Coffee Experience',
    description:
      'Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.',
    backgroundImg: banner,
    images: [img1, img2, img3],
    additionalInfo: { totalUser: '1200', description: 'Tasty Variant Coffee' },
  },
  {
    id: '2',
    message: 'WELCOME TO OUR',
    title: 'Unlocklive',
    subTitle: 'Elevating Your Coffee Experience',
    description:
      'Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.',
    backgroundImg: banner,
    images: [img1, img2, img3],
    additionalInfo: { totalUser: '1200', description: 'Tasty Variant Coffee' },
  },
  {
    id: '3',
    message: 'WELCOME TO OUR',
    title: 'Unlocklive',
    subTitle: 'Elevating Your Coffee Experience',
    description:
      'Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.',
    backgroundImg: banner,
    images: [img1, img2, img3],
    additionalInfo: { totalUser: '1200', description: 'Tasty Variant Coffee' },
  },
  {
    id: '4',
    message: 'WELCOME TO OUR',
    title: 'Unlocklive',
    subTitle: 'Elevating Your Coffee Experience',
    description:
      'Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.',
    backgroundImg: banner,
    images: [img1, img2, img3],
    additionalInfo: { totalUser: '1200', description: 'Tasty Variant Coffee' },
  },
  {
    id: '5',
    message: 'WELCOME TO OUR',
    title: 'Unlocklive',
    subTitle: 'Elevating Your Coffee Experience',
    description:
      'Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.',
    backgroundImg: banner,
    images: [img1, img2, img3],
    additionalInfo: { totalUser: '1200', description: 'Tasty Variant Coffee' },
  },
];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <section className='bg-banner-bg bg-no-repeat bg-cover bg-center pt-[40px] pb-[100px]'>
      <Wrapper className='relative before:absolute before:-left-[114px] before:-top-10 before:w-[1px] before:h-[calc(100%+140px)] before:bg-[#101113] before:bg-opacity-10'>
        <Swiper
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='swiper-3 !pb-[65px]'
        >
          {sliderContent?.map((slide) => (
            <SwiperSlide key={slide?.id}>
              <div className='flex gap-10 md:gap-0 flex-col md:flex-row md:items-center lg:items-end  cursor-pointer overflow-hidden'>
                <div className='flex-1 text-secondary text-left'>
                  <h6 className='font-lemonada font-[575] leading-[26px] tracking-2 mb-3 uppercase'>
                    {slide?.message}
                  </h6>
                  <h1 className='font-bakildaHistori text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] mb-[10px]'>
                    {slide?.title}
                  </h1>
                  <h2 className='font-bakildaHistori text-3xl md:text-4xl lg:text-44 md:leading-[60px] mb-6 xl:whitespace-nowrap'>
                    {slide?.subTitle}
                  </h2>
                  <p className='leading-[27.2px] text-secondary text-opacity-[0.6] mb-[50px] tracking-2'>
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>

                  <div className='flex flex-col xl:flex-row gap-[44px]'>
                    <button className='w-fit text-white font-medium leading-[16px] bg-primary hover:bg-transparent border-[1.5px] border-primary px-[30px] py-[18px] rounded-xl outline-none ease-in-out hover:text-primary cursor-pointer transition-all duration-200 uppercase'>
                      Explore Our Menus
                    </button>
                    <div className='flex'>
                      {slide?.images?.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          width={image?.width}
                          height={image?.height}
                          alt={`Coffee Image ${index}`}
                          className={`min-w-[${image?.width}px] min-h-[${image?.height}px] first:ml-0 -ml-[15px]`}
                        />
                      ))}
                      <div className='ml-6'>
                        <h5 className='text-secondary font-abrilDisplay text-xl md:text-2xl md:leading-[38px] tracking-4 font-semibold '>
                          {slide?.additionalInfo?.totalUser}+
                        </h5>
                        <p className='text-secondary text-sm md:leading-[24px] tracking-3 text-opacity-60'>
                          {slide?.additionalInfo?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className='flex-1'>
                  <Image
                    src={slide?.backgroundImg}
                    width={slide?.backgroundImg?.width}
                    height={slide?.backgroundImg?.height}
                    alt='Banner Image'
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Banner;
