import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const SubMenu = ({ route }) => {
  return (
    <li
      key={route?.name}
      className='flex flex-nowrap gap-3 cursor-pointer relative'
    >
      <div className='relative inline-block group'>
        <div className='flex flex-nowrap gap-3'>
          <button>{route?.name}</button>
          {route?.subRoutes && <IoIosArrowDown />}
        </div>
        <ul className='absolute left-2/4 -translate-x-2/4 bg-white shadow-md p-2 rounded-sm invisible group-hover:visible'>
          {route?.subRoutes?.map((item) => (
            <li key={item?.name} className=''>
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

export default SubMenu;
