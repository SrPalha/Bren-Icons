import React from 'react';
import type { IconProps } from '../types';

const Messagesearch02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.507 3c-.56.012-1.26.031-1.672.058-4.186.279-7.52 3.66-7.795 7.905a20.021 20.021 0 0 0 0 2.522c.1 1.546.784 2.978 1.59 4.187.467.846.158 1.902-.329 2.825-.35.665-.526.998-.385 1.238.14.24.455.248 1.085.263 1.245.03 2.085-.323 2.751-.814.378-.279.567-.418.697-.434.13-.016.387.09.9.3.46.19.995.308 1.486.34a33.2 33.2 0 0 0 4.345 0c4.186-.278 7.52-3.66 7.795-7.905.01-.163.019-.326.025-.491"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12.5h.01m3.986 0H16m-8 0h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.017 8.023 22 10m-.947-4.473a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"/> </svg>
  );
};

export default Messagesearch02;
