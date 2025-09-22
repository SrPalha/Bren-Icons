import React from 'react';
import type { IconProps } from '../types';

const Albumnotfound02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6h.009"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 11.106c.688-.07 1.384-.105 2.081-.104 2.95-.044 5.827.601 8.118 1.82.664.354 1.267.749 1.801 1.178"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.82 20.82C19.643 22 17.745 22 13.95 22s-5.693 0-6.872-1.18c-.657-.656-.948-1.537-1.077-2.846M17.974 6c1.309.129 2.19.42 2.847 1.077C22 8.256 22 10.154 22 13.949c0 1.433 0 2.596-.064 3.551"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.828 16.828C15.657 18 13.771 18 10 18c-3.771 0-5.657 0-6.828-1.172C2 15.657 2 13.771 2 10c0-3.771 0-5.657 1.172-6.828M6.5 2.062C7.444 2 8.59 2 10 2c3.771 0 5.657 0 6.828 1.172C18 4.343 18 6.229 18 10c0 1.41 0 2.556-.061 3.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Albumnotfound02;
