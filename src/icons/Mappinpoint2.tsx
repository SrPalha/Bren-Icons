import React from 'react';
import type { IconProps } from '../types';

const Mappinpoint2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 9c-.857-4.019-5.009-7-8.999-7C7.458 2 4.09 4.1 2.686 7.38.091 13.447 5.413 17.626 9.384 21.367a2.366 2.366 0 0 0 1.617.633c.55 0 1.08-.189 1.499-.53"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 9.196a3.5 3.5 0 1 0-4.5 4.967"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.898 21.652c-.24.223-.563.348-.898.348-.335 0-.657-.125-.898-.348-2.206-2.058-5.163-4.356-3.72-7.693C13.16 12.155 15.031 11 17 11c1.968 0 3.84 1.155 4.619 2.959 1.44 3.333-1.51 5.642-3.72 7.693Z"/> </svg>
  );
};

export default Mappinpoint2;
