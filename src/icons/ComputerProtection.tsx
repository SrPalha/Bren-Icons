import React from 'react';
import type { IconProps } from '../types';

const Computerprotection: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.014 2c-3.778 0-5.667 0-6.84 1.172C2 4.343 2 6.229 2 10c0 3.771 0 5.657 1.174 6.828C4.347 18 6.236 18 10.014 18h4.007c3.778 0 5.667 0 6.84-1.172.81-.808 1.061-1.956 1.139-3.828"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 22h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 15h2m4.5-13c-1.426 0-2.35.909-3.442 1.24-.444.134-.666.202-.756.297-.09.095-.116.233-.169.51-.563 2.969.668 5.713 3.605 6.78.315.116.473.173.763.173.29 0 .447-.057.763-.172 2.936-1.068 4.166-3.812 3.603-6.78-.053-.278-.08-.417-.169-.511-.09-.095-.312-.163-.756-.297C19.849 2.909 18.924 2 17.499 2Z"/> </svg>
  );
};

export default Computerprotection;
