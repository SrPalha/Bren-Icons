import React from 'react';
import type { IconProps } from '../types';

const Chartbreakoutsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 3.385V2m3.63 2.364.978-.98M20.618 8H22m0 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.852 8.007h3.222c.379 0 .686.315.686.703v3.325m-13 1.923c2.273.266 7.977-.444 12.131-5.068"/> </svg>
  );
};

export default Chartbreakoutsquare;
