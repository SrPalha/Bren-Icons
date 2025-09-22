import React from 'react';
import type { IconProps } from '../types';

const Licensethirdparty: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="license-third-party"> <path id="Vector" d="M10.4706 22C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2H11.5294C15.5225 2 17.519 2 18.7595 3.17157C20 4.34315 20 6.22876 20 10" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M7 7H15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M7 12H13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M14 22C15.8385 19.2518 20.1188 19.1018 22 22M20 14.9287C20 15.9939 19.1046 16.8574 18 16.8574C16.8954 16.8574 16 15.9939 16 14.9287C16 13.8635 16.8954 13 18 13C19.1046 13 20 13.8635 20 14.9287Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Licensethirdparty;
