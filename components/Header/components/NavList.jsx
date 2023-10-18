'use client';

import { navigation } from '@/data';
import { Link } from 'react-scroll';

const NavList = ({ onClick }) => {
  return (
    <>
      {navigation.map(({ href, name }) => (
        <Link
          onClick={onClick}
          key={href}
          className="custom-underline relative
    
                  text-[18px] tracking-[1.8px]
    
                  tablet:text-[14px] tablet:tracking-[1.4px]"
          to={href}
          spy={true}
          smooth={true}
          duration={500}
        >
          {name}
        </Link>
      ))}
    </>
  );
};
export default NavList;
