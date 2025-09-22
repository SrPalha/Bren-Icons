import React from 'react';
import type { IconProps } from '../types';

const Windpower01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 14v8m6 0H6m6-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-6c1.105 0 2-1.343 2-3s-.895-3-2-3-2 1.343-2 3 .895 3 2 3Zm5.262 9.95c-1.417-.813-2.123-2.234-1.578-3.173.546-.94 2.136-1.041 3.554-.228 1.417.814 2.123 2.235 1.578 3.174-.546.94-2.136 1.041-3.554.228Zm-10.524 0c1.417-.813 2.123-2.234 1.578-3.173-.546-.94-2.137-1.041-3.554-.228-1.417.814-2.123 2.235-1.578 3.174.546.94 2.137 1.041 3.554.228Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 8v3m1 2 3 2m-5-2-3 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.5 3C4.81 4.507 3 7.323 3 10.548c0 .495.043.98.124 1.452M16.5 3c2.69 1.507 4.5 4.323 4.5 7.548 0 .495-.043.98-.124 1.452"/> </svg>
  );
};

export default Windpower01;
