import Image from 'next/image';
import footerLogo from '/public/images/footer-logo.png';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className='bg-footer bg-no-repeat bg-cover bg-right-top pt-[30px] pb-10 text-white'>
      <Wrapper>
        <div className='grid md:grid-cols-3 gap-6 md:gap-4 justify-center items-center'>
          <div className='flex justify-center md:justify-start md:pl-[36px]'>
            <Image src={footerLogo} width={150} height={10} alt='FooterLogo' />
          </div>

          <ul className='flex justify-center items-center gap-[45px]'>
            <li className=''>
              <Link href='/'>Terms</Link>
            </li>
            <li>
              <Link href='/'>Privacy</Link>
            </li>
            <li>
              <Link href='/'>Cookies</Link>
            </li>
          </ul>
          <ul className='flex justify-center md:justify-end items-center gap-[15px] md:pr-3'>
            <li className='w-[35px] h-[35px] border rounded-full border-icon-border flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
              <Link href='https://www.facebook.com/unlocklive' target='_blank'>
                <FaFacebookF />
              </Link>
            </li>
            <li className='w-[35px] h-[35px] border rounded-full border-icon-border flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
              <Link
                href='https://www.linkedin.com/company/unlocklive-it-limited/'
                target='_blank'
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className='w-[35px] h-[35px] border rounded-full border-icon-border flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
              <Link href='https://twitter.com/UnlockliveIT' target='_blank'>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
