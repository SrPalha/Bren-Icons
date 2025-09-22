import React from 'react';
import type { IconProps } from '../types';

const Baseballbat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="baseball-bat"> <path id="Vector" d="M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_2" d="M5.57835 21.8426C7.08033 19.7713 4.24567 16.9109 2.15723 18.4251C1.96763 18.5625 1.94595 18.8368 2.11159 19.0023L5.00015 21.8884C5.16597 22.0541 5.44077 22.0323 5.57835 21.8426Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_3" d="M10 17L7 14" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_4" d="M18.5 21C17.1193 21 16 19.8807 16 18.5C16 17.1193 17.1193 16 18.5 16C19.8807 16 21 17.1193 21 18.5C21 19.8807 19.8807 21 18.5 21Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Baseballbat;
