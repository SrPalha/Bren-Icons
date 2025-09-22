import React from 'react';
import type { IconProps } from '../types';

const Legaldocument02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 18h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.05 6.977h9.907m-4.942 0v7.006m0 0h-.533m.533 0h.526M8.016 7.965c-.726.745-1.928 2.031-1.402 3.103.467.951 1.131.968 1.401.968s.973-.017 1.44-.968c.526-1.072-.714-2.358-1.44-3.103Zm7.966 0c-.725.745-1.927 2.031-1.402 3.103.467.951 1.132.968 1.402.968s.973-.017 1.44-.968c.526-1.072-.714-2.358-1.44-3.103Z"/> </svg>
  );
};

export default Legaldocument02;
