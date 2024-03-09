'use client';

import Image from 'next/image';
import Link from 'next/link';

import { IoIosSearch } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb';

import logo from '/public/images/header-logo.png';
import userIcon from '/public/images/people-icon.png';

import { routes } from '@/constant';
import SubMenu from './SubMenu';

const Navbar = () => {
  return (
    <div className='hidden lg:flex justify-between items-center py-9'>
      <nav>
        <ul className='flex flex-nowrap items-center gap-7 xl:gap-[50px] text-secondary font-medium capitalize'>
          {routes?.map((route) => {
            if (route.subRoutes) {
              return <SubMenu route={route} key={route.name} />;
            }
            return (
              <li
                key={route?.name}
                className={`flex flex-nowrap gap-3 cursor-pointer`}
              >
                <Link href={route?.link}>{route?.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className=''>
        <li>
          <Link href='/'>
            <Image
              src={logo}
              width={logo?.width}
              height={logo?.height}
              alt='Unlocklive'
            />
          </Link>
        </li>
      </ul>
      <div className='flex flex-col md:flex-row md:items-center gap-16 xl:gap-[117px]'>
        <ul className='flex flex-nowrap text-2xl gap-[30px]'>
          <li>
            <IoIosSearch />
          </li>
          <li className='relative'>
            <AiOutlineHeart />
            <span className='w-[18px] h-[18px] grid place-content-center rounded-full absolute -top-[9px] -right-[9px] bg-secondary text-white text-xs font-medium'>
              5
            </span>
          </li>
          <li>
            <TbShoppingCart />
          </li>
        </ul>
        <ul className='flex flex-nowrap items-center gap-4'>
          <li className=''>
            <Image
              src={userIcon}
              width={userIcon?.width}
              height={userIcon?.height}
              alt='userIcon'
            />
          </li>
          <li className='text-secondary font-medium leading-6'>
            <Link href='/signin'>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
