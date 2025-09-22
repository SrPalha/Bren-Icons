import React from 'react';
import type { IconProps } from '../types';

const Webprotection: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 20.5c.889-.2 1.564-.528 2.109-1.067 1.391-1.378 1.391-3.594 1.391-8.028 0-4.434 0-6.65-1.391-8.028C18.717 2 16.479 2 12 2 7.522 2 5.282 2 3.891 3.377 2.5 4.755 2.5 6.971 2.5 11.405c0 4.434 0 6.65 1.391 8.028.545.54 1.22.867 2.109 1.067"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 8.5h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 5.5h.009M11 5.5h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13c-1.426 0-2.35.909-3.442 1.24-.444.134-.666.202-.756.297-.09.095-.116.233-.169.51-.563 2.969.668 5.713 3.605 6.78.315.116.473.173.763.173.29 0 .447-.057.763-.172 2.936-1.068 4.166-3.812 3.603-6.78-.053-.278-.08-.417-.169-.511-.09-.095-.312-.163-.756-.297-1.093-.331-2.018-1.24-3.443-1.24Z"/> </svg>
  );
};

export default Webprotection;
