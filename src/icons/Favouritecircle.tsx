import React from 'react';
import type { IconProps } from '../types';

const Favouritecircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.269 8.497c1.34-.822 2.51-.49 3.214.037.288.216.432.325.517.325.085 0 .229-.109.517-.325.703-.528 1.873-.86 3.214-.037 1.76 1.08 2.158 4.64-1.9 7.645-.774.572-1.16.858-1.831.858-.67 0-1.057-.286-1.83-.858-4.06-3.005-3.661-6.566-1.901-7.645Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/> </svg>
  );
};

export default Favouritecircle;
