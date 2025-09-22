import React from 'react';
import type { IconProps } from '../types';

const Renewableenergy1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" fillRule="evenodd" d="M12.08 22C6.513 22 2 17.523 2 12S6.513 2 12.08 2c4.23 0 7.852 2.585 9.347 6.25.891 2.388 1.403 8.134-3.677 12.02A10.09 10.09 0 0 1 12.08 22Zm.032-14.827-3.5 4.492c-.255.328-.048.843.338.843h1.702c.248 0 .45.227.45.507v3.476c0 .468.512.687.786.336l3.5-4.492c.255-.328.048-.843-.338-.843h-1.702c-.248 0-.45-.227-.45-.507V7.509c0-.468-.512-.687-.786-.336Z" clipRule="evenodd" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91.314-.087.47-.131.555-.038.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406.087.314.131.47.038.555-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91-.314.087-.47.131-.555.038-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406-.087-.314-.131-.47-.038-.555.094-.085.248-.022.558.102L4.5 15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.613 11.665 3.499-4.492c.274-.351.787-.132.787.336v3.476c0 .28.2.508.449.508h1.702c.386 0 .592.514.337.842l-3.499 4.492c-.274.351-.787.132-.787-.336v-3.476c0-.28-.2-.508-.449-.508H8.95c-.386 0-.593-.514-.337-.842Z"/> </svg>
  );
};

export default Renewableenergy1;
