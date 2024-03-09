'use client';
import Image from 'next/image';
import menu1 from '/public/images/menu1.png';
import menu2 from '/public/images/menu2.png';
import menu3 from '/public/images/menu3.png';
import menu4 from '/public/images/menu4.png';
import Wrapper from './Wrapper';

const menuItems = [
  {
    id: 1,
    title: 'Double Espresso x2',
    description: 'There are many variations of passages Lorem Ipsum form',
    amount: 10,
    img: menu1,
  },
  {
    id: 2,
    title: 'Hazelnut Heaven Latte',
    description: 'There are many variations of passages Lorem Ipsum form',
    amount: 10,
    img: menu2,
  },
  {
    id: 3,
    title: 'Salted Caramel Cold Brew',
    description: 'There are many variations of passages Lorem Ipsum form',
    amount: 10,
    img: menu3,
  },
  {
    id: 4,
    title: 'Coconut Cream Delight (Summer)',
    description: 'There are many variations of passages Lorem Ipsum form',
    amount: 10,
    img: menu4,
  },
];

const CoffeeMenu = () => {
  return (
    <section className='py-12 lg:py-[100px] bg-menu-bg bg-origin-border bg-no-repeat bg-bottom-10-right-20'>
      <Wrapper>
        <div className='relative flex justify-center item-center'>
          <div className='flex justify-center items-center mb-[14px]'>
            <div className='bg-gradient-to-r from-white to-primary w-[50px]  h-[2px] top-2/4 -translate-y-2/4 inline-block'></div>
            <h5 className='text-primary font-lemonada font-[380] tracking-2 leading-[16px] min-w-[173px] text-center'>
              Why Choose Us
            </h5>
            <div className='bg-gradient-to-r from-primary to-white w-[50px]  h-[2px] top-2/4 -translate-y-2/4 inline-block'></div>
          </div>
        </div>
        <p className='text-secondary font-bakildaHistori text-3xl md:text-[44px] md:leading-[60px] text-center'>
          Unlocklive Coffee Menu
        </p>

        <div className='grid lg:grid-cols-2 gap-[30px] pt-[80px] pb-[60px]'>
          {menuItems?.map((item) => (
            <div
              key={item?.id}
              className='border rounded-[18px] border-gray-300 px-[35px] py-[30px] group cursor-pointer'
            >
              <div className='flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-[9px]'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                  <div>
                    <Image
                      src={item?.img?.src}
                      width={70}
                      height={10}
                      alt='FooterLogo'
                      className='min-w-[84px] min-h-[84px]'
                    />
                  </div>
                  <div className=''>
                    <h2 className='text-2xl font-semibold text-secondary leading-[36px]'>
                      {item?.title}
                    </h2>
                    <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start  flex-nowrap'>
                      <p className='text-sm leading-[24px] tracking-3 text-secondary opacity-[0.7]'>
                        {item?.description}
                      </p>
                      <div className='max-w-[127px] overflow-hidden opacity-40'>
                        ........................................................................
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] block leading-[60px] rounded-full border-2 border-dashed border-secondary bg-[#e9e7e6] group-hover:bg-primary bg-clip-padding text-center duration-300'>
                  <span className='text-secondary group-hover:text-white text-[20px] font-medium block duration-300'>
                    ${item?.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <button className='text-primary font-medium leading-[16px] border-[1.5px] border-primary px-[30px] py-[18px] rounded-xl outline-none hover:bg-primary ease-in-out hover:text-white cursor-pointer transition-all duration-200'>
            View All Menu
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default CoffeeMenu;
