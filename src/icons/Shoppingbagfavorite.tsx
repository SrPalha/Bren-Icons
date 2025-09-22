import React from 'react';
import type { IconProps } from '../types';

const Shoppingbagfavorite: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 21.998c-3.368.04-6.828-.434-8.207-1.388a4.349 4.349 0 0 1-1.589-1.998c-.508-1.31-.022-2.998.95-6.375C4.235 8.488 5.746 7.5 9.65 7.5h3.78c3.557 0 5.073.87 6.07 3.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.142 14.442c1.207-.731 2.26-.437 2.893.033.259.192.389.288.465.288.076 0 .206-.096.465-.288.633-.47 1.686-.764 2.893-.033 1.584.96 1.942 4.125-1.71 6.795-.697.509-1.044.763-1.648.763-.604 0-.951-.254-1.647-.763-3.653-2.67-3.295-5.836-1.711-6.795ZM10.5 11h2"/> </svg>
  );
};

export default Shoppingbagfavorite;
