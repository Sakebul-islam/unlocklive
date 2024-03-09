'use client';
import { Tabs } from 'flowbite-react';

import img1 from '/public/images/showcase1.png';
import img2 from '/public/images/showcase2.png';
import img3 from '/public/images/showcase3.png';
import img4 from '/public/images/showcase4.png';
import img5 from '/public/images/showcase5.png';

const tabList = [
  { id: 1, title: 'All', photoURLs: [img1, img2, img3, img4, img5] },
  { id: 2, title: 'Burger', photoURLs: [img2, img4, img1, img3, img5] },
  { id: 3, title: 'Drinks', photoURLs: [img3, img5, img1, img4, img2] },
  { id: 4, title: 'Pizza', photoURLs: [img4, img1, img3, img5, img2] },
  { id: 5, title: 'Dinner', photoURLs: [img5, img1, img3, img2, img4] },
  { id: 6, title: 'Lunch', photoURLs: [img1, img3, img5, img2, img4] },
  { id: 7, title: 'Cookies', photoURLs: [img2, img4, img1, img3, img5] },
  { id: 8, title: 'Bakery', photoURLs: [img3, img5, img1, img3, img2] },
];

import Image from 'next/image';
import TabsItem from './TabsItem';

const Showcase = () => {
  return (
    <section className='my-[45px] md:my-[90px]'>
      <div className='md:max-w-[1352px] px-2 md:px-4 mx-auto'>
        <div className='flex justify-center items-center text-center mb-15'>
          <div className='max-w-[674px]'>
            <div className='mb-3'>
              <span className='inline-block uppercase leading-6 font-[380] tracking-1 italic text-primary pb-2 relative after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#f5f5f5] after:via-[#86371c] after:to-[#f5f5f5] after:bottom-0 after:left-2/4 after:-translate-x-2/4'>
                Showcase
              </span>
            </div>
            <h2 className='text-44 capitalize font-bakildaHistori leading-[60px] text-secondary mb-6'>
              Our Chefs New Creations
            </h2>
            <p className='text-dark-gray leading-[32px] text-[18px]'>
              Behold the extraordinary creations born from the synergy of our
              users&#39; ingenuity and the transformative power of AI, a
              testament to boundless innovation.
            </p>
          </div>
        </div>
        <Tabs aria-label='Pills' style='pills' className='gap-6 md:gap-12'>
          {tabList?.map((item) => (
            <TabsItem key={item?.id} active title={item?.title} item={item}>
              <div className='flex flex-wrap justify-center xl:justify-start gap-4'>
                {item?.photoURLs?.map((url, index) => (
                  <figure
                    key={index}
                    className='overflow-hidden rounded-[24px]'
                  >
                    <Image
                      src={url?.src}
                      blurDataURL={url?.blurDataURL}
                      placeholder='blur'
                      alt={`${item?.title} ${index + 1}`}
                      width={url?.width}
                      height={url?.height}
                      className={`rounded-[24px] duration-200 hover:scale-110`}
                    />
                  </figure>
                ))}
              </div>
            </TabsItem>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Showcase;
