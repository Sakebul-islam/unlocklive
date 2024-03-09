'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IoMenu } from 'react-icons/io5';

import { routes } from '@/constant';
import logo from '/public/images/header-logo.png';
import DrawerSubMenu from './DrawerSubMenu';

const Drawer = ({ isOpen, setIsOpen }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex flex-nowrap justify-between items-center lg:hidden py-9'>
      <Link href='/'>
        <Image
          src={logo}
          width={logo?.width}
          height={logo?.height}
          alt='Unlocklive'
        />
      </Link>
      <span onClick={toggleMenu} className='cursor-pointer'>
        <IoMenu size={35} />
      </span>
      <nav
        className={`absolute w-full min-h-screen top-0 z-30 duration-300 ease-in-out ${
          isOpen ? 'left-0 ' : '-left-full'
        }`}
      >
        <div
          className='absolute w-full h-full bg-black/50 -z-10 delay-700'
          onClick={toggleMenu}
        ></div>
        <div className='w-10/12 min-h-screen bg-white'>
          <Link
            href='/'
            className='py-4 grid place-content-center bg-black/5'
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={logo}
              width={logo?.width}
              height={logo?.height}
              alt='Unlocklive'
            />
          </Link>
          <ul className='flex flex-col text-secondary font-medium capitalize'>
            {routes?.map((route, index) => {
              if (route?.subRoutes) {
                return (
                  <DrawerSubMenu
                    route={route}
                    key={index}
                    isActive={activeSubMenu === route.name}
                    toggleSubMenu={() =>
                      setActiveSubMenu(
                        activeSubMenu === route.name ? null : route.name
                      )
                    }
                  />
                );
              }
              return (
                <li key={route?.name} className='cursor-pointer'>
                  {route.link === '/' ? (
                    <Link
                      href={route?.link}
                      className='p-4 block'
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {route?.name}
                    </Link>
                  ) : (
                    <Link href={route?.link} className='p-4 block'>
                      {route?.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
