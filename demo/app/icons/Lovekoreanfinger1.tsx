import React from 'react';
import type { IconProps } from '../types';

const Lovekoreanfinger1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.605 9.028 6.203 4.616a1.531 1.531 0 0 1 .012-2.162 1.523 1.523 0 0 1 2.157-.012l7.786 7.725c2.658 2.664 4.19 6.156 1.223 9.764l-.316.317a5.959 5.959 0 0 1-8.44 0l-3.188-3.15c-.593-.593-.58-1.568.027-2.177.575-.577 1.48-.618 2.077-.115m3.064-5.778 2.51 2.514m-2.51-2.514c-.593-.594-1.59-.58-2.2.031-.611.612-.625 1.589-.033 2.182l.728.73m-1.56 2.835-.624-.608c-.593-.594-.579-1.57.032-2.182.61-.611 1.56-.639 2.152-.045m-1.56 2.835 1.131 1.1m-1.13-1.1c.033.028.065.057.095.088M9.1 11.971l1.784 1.787m1.252-7.581c.168-1.537 1.988-3.13 4.26-2.039.216.104.387.3.39.54.002.386-.167.863-.711 1.18-.778.452-2.051 2.18-.351 3.885"/> </svg>
  );
};

export default Lovekoreanfinger1;
