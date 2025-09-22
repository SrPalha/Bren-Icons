import React from 'react';
import type { IconProps } from '../types';

const Pdf01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="pdf-01"> <path id="Vector" d="M3.5 13V12.1963C3.5 9.22889 3.5 7.7452 3.96894 6.56021C4.72281 4.65518 6.31714 3.15252 8.33836 2.44198C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.25256C18.8902 2.65858 19.8012 3.51725 20.232 4.60584C20.5 5.28297 20.5 6.13079 20.5 7.82643V12.0142V13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M3.5 22V19M3.5 19V17.2C3.5 16.6343 3.5 16.3515 3.67574 16.1757C3.85147 16 4.13431 16 4.7 16H5.5C6.32843 16 7 16.6716 7 17.5C7 18.3284 6.32843 19 5.5 19H3.5ZM20.5 16H19C18.0572 16 17.5858 16 17.2929 16.2929C17 16.5858 17 17.0572 17 18V19M17 19V22M17 19H19.5M14 19C14 20.6569 12.6569 22 11 22C10.6262 22 10.4392 22 10.3 21.9196C9.96665 21.7272 10 21.3376 10 21V17C10 16.6624 9.96665 16.2728 10.3 16.0804C10.4392 16 10.6262 16 11 16C12.6569 16 14 17.3431 14 19Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Pdf01;
