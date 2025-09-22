import React from 'react';
import type { IconProps } from '../types';

const Courtlaw: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.351 13.213c-.353-2.297-.53-3.445-.095-4.464.434-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12 2s2.582.867 4.979 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.919-5.857l-.3-1.959Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.25 13.25c1.187 1.187 2.75 2.393 2.75 2.393l2.143-2.143s-1.206-1.563-2.393-2.75C12.563 9.563 11 8.357 11 8.357L8.857 10.5s1.206 1.563 2.393 2.75Zm0 0L7.5 17m9-3.857L13.643 16m-2.286-8L8.5 10.857"/> </svg>
  );
};

export default Courtlaw;
