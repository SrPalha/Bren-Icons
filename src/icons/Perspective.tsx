import React from 'react';
import type { IconProps } from '../types';

const Perspective: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="perspective"> <path id="Vector" d="M4.5 12C4.5 9.51235 4.5 8.26852 5.17206 7.38477C5.24545 7.28826 5.32409 7.19601 5.40762 7.10845C6.17248 6.30658 7.38276 6.13068 9.8033 5.77887L12.1623 5.43601C15.5764 4.9398 17.2834 4.69169 18.3917 5.66962C19.5 6.64755 19.5 8.40192 19.5 11.9107V12.0893C19.5 15.5981 19.5 17.3524 18.3917 18.3304C17.2834 19.3083 15.5764 19.0602 12.1623 18.564L9.80329 18.2211C7.38275 17.8693 6.17248 17.6934 5.40762 16.8915C5.32409 16.804 5.24545 16.7117 5.17206 16.6152C4.5 15.7315 4.5 14.4876 4.5 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M12 22V2M2 12H22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Perspective;
