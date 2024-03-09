import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const DrawerSubMenu = ({ route, isActive, toggleSubMenu }) => {
  return (
    <li>
      <div>
        <div
          className='flex flex-nowrap justify-between p-4'
          onClick={toggleSubMenu}
        >
          <button className='capitalize'>{route.name}</button>
          {route.subRoutes &&
            (isActive ? <IoIosArrowDown /> : <IoIosArrowForward />)}
        </div>
        <ul className='px-6 bg-gray-50'>
          {route.subRoutes &&
            isActive &&
            route.subRoutes.map((item, index) => (
              <li key={index} className='cursor-pointer'>
                <Link
                  href={item?.link}
                  className='block p-2 whitespace-nowrap duration-200 hover:bg-neutral-200/45'
                >
                  {item?.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default DrawerSubMenu;
