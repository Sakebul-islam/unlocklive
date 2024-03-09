'use client';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

import img1 from '/public/images/open-draw.png';
import img2 from '/public/images/youtube.png';
import { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

const openingInfo = [
  {
    id: 1,
    title: 'Our Opening Hours',
    shop: {
      openingTime: ['Mon - Sat: 07:00 - 18:00', 'Only Sun: 09:00 - 14:00'],
    },
  },
  {
    id: 2,
    title: 'Our Live Location',
    shop: {
      address: '848 A 28TH ST, Brooklyn New York, UK',
    },
  },
  {
    id: 3,
    title: 'Book A Table Now',
    shop: {
      phone: ['+1 318-254-6849', '+1 452-754-6579'],
    },
  },
];

const Opening = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(560);
  const [iframeHeight, setIframeHeight] = useState(315);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIframeWidth(width > 560 ? 560 : width - 40);
      setIframeHeight(((width > 560 ? 560 : width - 40) * 315) / 560);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='bg-purple pt-[70px] pb-[66px]'>
      <Wrapper className='relative'>
        <div className='flex flex-col'>
          <div className='w-full sm:w-[319px] h-[326px] bg-primary rounded-xl md:rounded-t-none md:absolute md:-top-[70px] md:left-0 md:ml-4 pl-9'>
            <Image
              src={img1}
              width={img1?.width}
              height={img1?.height}
              alt='icon'
              className='mx-auto pt-[24px] mb-[18.5px]'
            />
            <div className='flex flex-nowrap justify-start items-center gap-6'>
              <Image
                src={img2}
                width={img2?.width}
                height={img2?.height}
                alt='icon'
                onClick={() => setShowVideo(true)}
                className='cursor-pointer'
              />
              <h4 className='text-2xl text-white font-abrilDisplay font-semibold md:leading-[40.8px]'>
                Play Intro Video
              </h4>
            </div>
          </div>
          <div className='md:ml-[319px] grid lg:grid-cols-2 xl:grid-cols-3'>
            {openingInfo?.map((item) => (
              <div
                key={item?.id}
                className='border-b-[1px] last:border-b-0 md:border-b-0 lg:border-r-[1px] border-secondary border-opacity-[0.1] last:border-r-0
                py-[53px] sm:first:pt-0 md:[&:nth-child(2)]:pt-0 last:pb-0 sm:last:pt-0 xl:py-0 md:px-[53px] text-center
                '
              >
                {item?.shop?.openingTime && (
                  <div className='md:text-left'>
                    <h4 className='whitespace-nowrap text-2xl md:leading-[30px] text-secondary font-bold font-abrilDisplay tracking-4 mb-6 '>
                      {item?.title}
                    </h4>
                    <ul className='flex flex-col gap-2'>
                      {item.shop.openingTime.map((time, index) => (
                        <li
                          key={index}
                          className='text-base leading-6 text-secondary'
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item?.shop?.address && (
                  <div className='md:text-left text-center'>
                    <h4 className='whitespace-nowrap text-2xl md:leading-[30px] text-secondary font-bold font-abrilDisplay tracking-4 mb-6'>
                      {item?.title}
                    </h4>
                    <p className='text-base leading-6 text-secondary'>
                      {item.shop.address}
                    </p>
                  </div>
                )}

                {item?.shop?.phone && (
                  <div className='md:text-left xl:text-right'>
                    <h4 className='whitespace-nowrap text-2xl md:leading-[30px] text-secondary font-bold font-abrilDisplay tracking-4 mb-6'>
                      {item?.title}
                    </h4>
                    <ul className='flex flex-col gap-2'>
                      {item.shop.phone.map((phoneNumber, index) => (
                        <li
                          key={index}
                          className='text-base leading-6 text-secondary'
                        >
                          {phoneNumber}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      {showVideo && (
        <div
          className='fixed top-0 left-0 w-full h-screen bg-black/60 z-50 cursor-pointer flex place-content-center'
          onClick={() => setShowVideo(false)}
        >
          <div className='self-center relative'>
            <iframe
              width={iframeWidth}
              height={iframeHeight}
              src='https://www.youtube.com/embed/9zmwGT7DEsM?si=YFvxIcBSsFYTVvSu'
              allowfullscreen
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              frameborder='0'
              title='video player'
            ></iframe>
            <button
              className='hidden absolute top-0 -right-12 w-10 h-10 bg-white text-gray-600 rounded-sm md:grid place-content-center'
              onClick={() => setShowVideo(false)}
            >
              <IoClose size={30} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Opening;
