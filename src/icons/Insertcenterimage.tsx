import React from 'react';
import type { IconProps } from '../types';

const Insertcenterimage: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="insert-center-image"> <path id="Vector" d="M3 3H19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M3 21H12" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M3 12C3 9.64298 3 8.46447 3.73223 7.73223C4.46447 7 5.64298 7 8 7H16C18.357 7 19.5355 7 20.2678 7.73223C21 8.46447 21 9.64298 21 12C21 14.357 21 15.5355 20.2678 16.2678C19.5355 17 18.357 17 16 17H8C5.64298 17 4.46447 17 3.73223 16.2678C3 15.5355 3 14.357 3 12Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Insertcenterimage;
