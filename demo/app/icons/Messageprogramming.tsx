import React from 'react';
import type { IconProps } from '../types';

const Messageprogramming: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M13.54 2h-3.08C6.314 2 4.243 2 3.013 3.29c-1.23 1.29-1.1 3.329-.842 7.405l.18 2.836c.059.937.088 1.405.194 1.796a4.128 4.128 0 0 0 3.2 2.964c.403.079.879.079 1.831.079.252 0 .378 0 .482.021.405.083.721.395.805.794.022.103.022.227.022.475v.89c0 .842 0 1.263.274 1.407.274.145.63-.088 1.34-.555l4.227-2.778a2.07 2.07 0 0 1 .252-.153 1.05 1.05 0 0 1 .304-.091c.072-.01.147-.01.295-.01 1.746 0 2.62 0 3.327-.263a4.128 4.128 0 0 0 2.323-2.151c.31-.68.364-1.538.473-3.256l.127-2.005c.259-4.076.388-6.114-.842-7.405C19.756 2 17.685 2 13.541 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 8 1.227 1.057c.515.445.773.667.773.943 0 .276-.258.498-.773.943L16 12M8 8 6.773 9.057C6.258 9.502 6 9.724 6 10c0 .276.258.498.773.943L8 12m5-5-2 6"/> </svg>
  );
};

export default Messageprogramming;
