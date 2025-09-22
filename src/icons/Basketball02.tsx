import React from 'react';
import type { IconProps } from '../types';

const Basketball02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="basketball-02"> <path id="Vector" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M2 12C4.28031 14.4289 7.91083 16 12 16C16.0892 16 19.7197 14.4289 22 12" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M12 2V22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M5.1556 5C4.77388 6.5 5.04007 9 6.56621 11C8.1708 13.1028 9.18243 16 5.36932 19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M18.8444 5C19.2261 6.5 18.9599 9 17.4338 11C15.8292 13.1028 14.8176 16 18.6307 19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Basketball02;
