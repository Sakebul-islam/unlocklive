'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Drawer from './Drawer';
import Wrapper from './Wrapper';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='border-b-[1px] border-b-[#101113] border-opacity-10 relative'>
        <Wrapper>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          <Navbar />
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
