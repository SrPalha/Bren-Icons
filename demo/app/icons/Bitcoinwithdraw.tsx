import React from 'react';
import type { IconProps } from '../types';

const Bitcoinwithdraw: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18.935 13.945-.67-3.648c-.29-1.576-.435-2.364-1.008-2.83C16.684 7 15.86 7 14.213 7H9.787c-1.647 0-2.47 0-3.044.467-.573.466-.718 1.254-1.008 2.83l-.67 3.648c-.6 3.271-.901 4.907.024 5.98C6.014 21 7.724 21 11.142 21h1.716c3.418 0 5.128 0 6.053-1.074.925-1.074.625-2.71.024-5.98Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 16.667v-5.334m1.562 0V10m0 8v-1.333M10.437 14h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 14c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 11a1.52 1.52 0 0 0 .414-.305C22 10.088 22 9.11 22 7.152s0-2.936-.586-3.544C20.828 3 19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608C2 4.216 2 5.195 2 7.152s0 2.936.586 3.543c.12.126.257.226.414.305"/> </svg>
  );
};

export default Bitcoinwithdraw;
