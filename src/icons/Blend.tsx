import React from 'react';
import type { IconProps } from '../types';

const Blend: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="blend"> <path id="Vector" d="M17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M7.5 13H6.4C4.32582 13 3.28873 13 2.64437 12.3556C2 11.7113 2 10.6742 2 8.6V6.4C2 4.32582 2 3.28873 2.64437 2.64437C3.28873 2 4.32582 2 6.4 2H8.6C10.6742 2 11.7113 2 12.3556 2.64437C13 3.28873 13 4.32582 13 6.4V7.5" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M12.0348 19C9.17734 18.5206 7 16.0355 7 13.0418C7 9.70499 9.70499 7 13.0418 7C16.0355 7 18.5206 9.17734 19 12.0348" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Blend;
