import React from 'react';
import type { IconProps } from '../types';

const Golfbat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="golf-bat"> <path id="Vector" d="M7.47095 17.263L12 20.9742C11.6197 21.3637 11.255 21.7646 10.7178 21.9214C10.4486 22 10.1597 22 9.58202 22H6.64577C5.12431 22 3.69593 21.514 3.15891 19.9348C2.65447 18.4514 3.35188 15.9891 5.23816 16C5.93452 16.0041 6.44666 16.4237 7.47095 17.263Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M12 21L16.5 10" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M17.6206 3.42328L16.1333 9.00041C16.0557 9.29151 16.1934 9.59708 16.4628 9.73182C16.7642 9.8825 17.1308 9.77151 17.298 9.47896L20.1617 4.46745C20.5954 3.70849 20.2263 2.7425 19.397 2.46608C18.6397 2.21363 17.8263 2.65192 17.6206 3.42328Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Golfbat;
