import React from 'react';
import type { IconProps } from '../types';

const Deliveryreturn02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.198 3.002H3.802c-.75 0-1.126 0-1.386.177a1.003 1.003 0 0 0-.31.338c-.153.273-.116.64-.041 1.376.125 1.228.187 1.842.513 2.28.163.22.369.403.606.54.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277.237-.137.443-.32.606-.54.326-.438.388-1.052.513-2.28.075-.736.112-1.103-.04-1.376a1.002 1.002 0 0 0-.311-.338c-.26-.177-.636-.177-1.386-.177Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 11.002h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.539 15.978 2.727-.053c1.086-.02 3.237.247 3.237 2.503 0 2.34-2.249 2.57-3.262 2.57H8.05c-2.128 0-5.048-.472-5.048-4.488V7.997m11.536 7.981a.767.767 0 0 1 .232-.538l1.714-1.454m-1.946 1.992a.77.77 0 0 0 .234.579l1.712 1.414m4.495-9.974v5.028"/> </svg>
  );
};

export default Deliveryreturn02;
