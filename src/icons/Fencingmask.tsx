import React from 'react';
import type { IconProps } from '../types';

const Fencingmask: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="fencing-mask"> <path id="Vector" d="M11.9996 20.0001C15.5002 20.0001 20 14.2945 20 9.84114C20 4.64409 16.5709 1.98295 11.9996 2.00008C7.42842 2.01721 4 4.64407 4 9.84112C4 14.2945 8.49907 20.0001 11.9996 20.0001Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_2" d="M12 2V20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M4.5 8C8 10 16 10 19.5 8" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_4" d="M4.5 13C8 15 16 15 19.5 13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_5" d="M6 16C6 18.4 5 20.8 3 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_6" d="M18 16C18 18.4 19 20.8 21 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Fencingmask;
