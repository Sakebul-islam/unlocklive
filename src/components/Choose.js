'use client';

import Image from 'next/image';
import img1 from '/public/images/choose-pic.png';
import CountUp from 'react-countup';
import Wrapper from './Wrapper';

const Choose = () => {
  return (
    <section className='py-20 lg:pt-[200px] lg:pb-[100px] bg-coffee-cup bg-origin-border bg-no-repeat bg-top-10-right-113'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row justify-between items-end gap-12'>
          <div className='flex-1'>
            <div className='mb-[30px]'>
              <div className='flex flex-nowrap items-center gap-[10px] mb-[14px]'>
                <div className='bg-gradient-to-r from-white to-primary w-[50px]  h-[2px] top-2/4 -translate-y-2/4 inline-block'></div>
                <h5 className='font-lemonada text-primary font-[380] leading-4 tracking-2'>
                  Why Choose Us
                </h5>
              </div>
              <h2 className='text-3xl lg:text-44 md:leading-[60px] text-secondary font-bakildaHistori mb-[14px]'>
                Choosing Unlocklive, A Taste of Perfection
              </h2>
              <p className='text-secondary opacity-[0.6] leading-[27.2px] tracking-2'>
                Unlocklive takes pride in the art of roasting, transforming raw
                coffee beans into a symphony of aromatic notes and rich flavors.
              </p>
            </div>
            <div className='flex gap-[30px] flex-col md:flex-row items-center mb-[30px]'>
              <div className='min-w-[202px] max-w-[202px] h-[134px] border-[1.5px] border-secondary border-opacity-[0.1] rounded-[10px] px-2 py-5 flex flex-col justify-center items-center text-secondary capitalize hover:border-primary duration-200'>
                <h2 className='font-bakildaHistori text-44 md:leading-[56px] mb-2'>
                  <CountUp end={20} suffix='+' />
                </h2>
                <p className='text-xl md:leading-[30px] whitespace-nowrap font-abrilDisplay'>
                  Years Experience
                </p>
              </div>
              <div
                className='min-w-[202px] max-w-[202px] h-[134px] border-[1.5px] border-secondary border-opacity-[0.1] rounded-[10px] px-2 py-5 flex flex-col justify-center items-center text-secondary capitalize relative hover:border-primary duration-200
                
                before:absolute before:top-0 before:right-0 before:h-full before:w-full before:border-[1.5px] before:border-secondary before:border-opacity-[0.1] before:rounded-[10px] before:rotate-[3.686deg]
                before:hover:border-primary before:duration-200 before:delay-150
                '
              >
                <h2 className='font-bakildaHistori text-44 md:leading-[56px] mb-2'>
                  <CountUp end={100} suffix='+' />
                </h2>
                <p className='text-xl md:leading-[30px] whitespace-nowrap font-abrilDisplay'>
                  Master Chefs
                </p>
              </div>
              <div className='min-w-[202px] max-w-[202px] h-[134px] border-[1.5px] border-secondary border-opacity-[0.1] rounded-[10px] px-2 py-5 flex flex-col justify-center items-center text-secondary capitalize hover:border-primary duration-200'>
                <h2 className='font-bakildaHistori text-44 md:leading-[56px] mb-2'>
                  <CountUp end={30} suffix='+' />
                </h2>
                <p className='text-xl md:leading-[30px] whitespace-nowrap font-abrilDisplay'>
                  Achievements
                </p>
              </div>
            </div>
            <p className='text-secondary md:leading-[27.2px] text-opacity-60 tracking-2'>
              Your choice to savor our coffee is an invitation to experience the
              epitome of craftsmanship, flavor, and dedication.
            </p>
            <div className='mt-[50px]'>
              <button className='text-primary font-medium leading-[16px] border-[1.5px] border-primary px-[30px] py-[18px] rounded-xl outline-none hover:bg-primary ease-in-out hover:text-white cursor-pointer transition-all duration-200'>
                Explore Our Menus
              </button>
            </div>
          </div>
          <figure className='flex-1 w-full lg:w-auto flex md:justify-center lg:justify-end relative'>
            <Image
              src={img1}
              width={img1?.width}
              height={img1?.height}
              alt='Chocolate'
              className=''
            />
          </figure>
        </div>
      </Wrapper>
    </section>
  );
};

export default Choose;
