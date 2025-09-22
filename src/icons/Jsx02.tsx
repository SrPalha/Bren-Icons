import React from 'react';
import type { IconProps } from '../types';

const Jsx02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="jsx-02"> <path id="Vector" d="M3.5 13V12.1963C3.5 9.22889 3.5 7.7452 3.96894 6.56021C4.72281 4.65518 6.31714 3.15252 8.33836 2.44198C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.25256C18.8902 2.65858 19.8012 3.51725 20.232 4.60584C20.5 5.28297 20.5 6.13079 20.5 7.82643V12.0142V13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M7.5 16V20.25C7.5 21.2165 6.71651 22 5.75002 22C4.78365 22 4.00021 21.2167 4.00004 20.2503L4 20M13.0002 16H11.8343C11.3683 16 11.1353 16 10.9516 16.0761C10.3257 16.3353 10.3343 16.9447 10.3343 17.5C10.3343 18.0553 10.3257 18.6647 10.9516 18.9239C11.1353 19 11.3683 19 11.8343 19C12.3002 19 12.5332 19 12.7169 19.0761C13.3345 19.3319 13.3344 19.9287 13.3343 20.4779V20.5221C13.3344 21.0713 13.3345 21.6681 12.7169 21.9239C12.5332 22 12.3002 22 11.8343 22H10.5643M16 16L18 19M18 19L20 22M18 19L20 16M18 19L16 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Jsx02;
