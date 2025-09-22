import React from 'react';
import type { IconProps } from '../types';

const Babybottle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 10.5s1 2.5 1 5.75c0 1.171-.13 2.245-.296 3.14-.209 1.124-.313 1.686-.869 2.148-.556.462-1.218.462-2.543.462H9.708c-1.325 0-1.987 0-2.543-.462s-.66-1.024-.869-2.149A17.29 17.29 0 0 1 6 16.25C6 13 7 10.5 7 10.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 10.51h10c.148-.815-.079-2.388-2.04-3.01-.465-.148-1.01-.424-1.256-.888a1.636 1.636 0 0 1 .007-1.587 2.067 2.067 0 0 0-1.229-2.938A1.675 1.675 0 0 0 12 2a1.675 1.675 0 0 0-.515.087 2.067 2.067 0 0 0-1.23 2.938c.327.619.225 1.175.008 1.587-.238.45-.756.85-1.24 1.003C7.672 8.045 6.74 9.068 7 10.511ZM15 14h2.5M15 18h2.5"/> </svg>
  );
};

export default Babybottle;
