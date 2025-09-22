import React from 'react';
import type { IconProps } from '../types';

const Cardexchange01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 16c0 2.21 0 3.316.702 4.054.112.119.236.228.37.327C3.908 21 5.16 21 7.667 21h.666c2.506 0 3.759 0 4.595-.62a2.68 2.68 0 0 0 .37-.326C14 19.316 14 18.211 14 16c0-2.21 0-3.316-.702-4.054a2.844 2.844 0 0 0-.37-.327C12.092 11 10.84 11 8.333 11h-.666c-2.506 0-3.759 0-4.595.62a2.843 2.843 0 0 0-.37.326C2 12.684 2 13.789 2 16Zm8-8c0-2.21 0-3.316.702-4.054.112-.118.236-.228.37-.327C11.908 3 13.16 3 15.667 3h.666c2.506 0 3.759 0 4.595.62.134.098.258.208.37.326C22 4.684 22 5.789 22 8c0 2.21 0 3.316-.702 4.054a2.844 2.844 0 0 1-.37.327c-.758.562-1.86.614-3.928.618"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 15h12m-4-8h12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 9c0-3.317 2.683-6 6-6l-.857 1.714M22 15c0 3.317-2.683 6-6 6l.857-1.714"/> </svg>
  );
};

export default Cardexchange01;
