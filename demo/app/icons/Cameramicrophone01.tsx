import React from 'react';
import type { IconProps } from '../types';

const Cameramicrophone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 6.001c-1.22.004-1.896.033-2.451.266a3.465 3.465 0 0 0-1.78 1.695c-.303.625-.352 1.426-.451 3.029l-.155 2.51c-.246 3.985-.368 5.977.8 7.238C4.134 22 6.104 22 10.043 22h3.916c3.94 0 5.91 0 7.078-1.26 1.17-1.262 1.047-3.254.8-7.239l-.154-2.51c-.099-1.603-.148-2.404-.45-3.029a3.473 3.473 0 0 0-1.78-1.695C18.895 6.034 18.22 6.005 17 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 7-.886-2.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2c-1.262 0-1.892 0-2.417.26-.982.486-1.315 1.57-1.697 2.525L7 7"/>   <path fill="#1B1C1B" d="M16.208 14.748a.75.75 0 1 0-1.416-.496l1.416.496Zm-7-.496a.75.75 0 1 0-1.416.496l1.416-.496ZM11.25 18.5a.75.75 0 0 0 1.5 0h-1.5ZM13 11.25v2h1.5v-2H13Zm-2 2v-2H9.5v2H11Zm1 1a1 1 0 0 1-1-1H9.5a2.5 2.5 0 0 0 2.5 2.5v-1.5Zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5H13Zm-1-3a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5v1.5Zm0-1.5a2.5 2.5 0 0 0-2.5 2.5H11a1 1 0 0 1 1-1v-1.5Zm2.792 5.502A2.966 2.966 0 0 1 12 16.25v1.5c1.948 0 3.598-1.258 4.208-3.002l-1.416-.496ZM12 16.25a2.966 2.966 0 0 1-2.792-1.998l-1.416.496c.61 1.744 2.26 3.002 4.208 3.002v-1.5Zm-.75.75v1.5h1.5V17h-1.5Z"/> </svg>
  );
};

export default Cameramicrophone01;
