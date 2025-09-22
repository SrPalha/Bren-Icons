import React from 'react';
import type { IconProps } from '../types';

const Blur: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="blur"> <path id="Vector" d="M12.5926 2.21C12.2371 1.93 11.7433 1.93 11.3877 2.21C9.51122 3.66 3.97049 8.39 4.00012 13.9C4.00012 18.36 7.58531 22 12.0001 22C16.4149 22 20 18.37 20 13.91C20.0099 8.48 14.4593 3.67 12.5926 2.21Z" stroke="#1B1C1B" strokeWidth="1.5" strokeMiterlimit="10"/> <path id="Vector_2" d="M12 2V22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M12 19L20 15M12 14.1806L19 10.5M12 9.36145L16.5727 7" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Blur;
