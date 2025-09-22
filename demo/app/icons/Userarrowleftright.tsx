import React from 'react';
import type { IconProps } from '../types';

const Userarrowleftright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.18 15.296c-1.258.738-4.555 2.243-2.547 4.126.981.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126a9.611 9.611 0 0 0-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21.655 8.5.748-.705C22.801 7.42 23 7.233 23 7c0-.233-.199-.42-.597-.795l-.747-.705M22.979 7H19M2.345 8.5l-.748-.705C1.199 7.42 1 7.233 1 7c0-.233.199-.42.597-.795l.748-.705M1.02 7H5"/> </svg>
  );
};

export default Userarrowleftright;
