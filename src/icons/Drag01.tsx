import React from 'react';
import type { IconProps } from '../types';

const Drag01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="drag-01"> <path id="Vector" d="M20.9638 4H16.9717M20.9638 4C20.9638 4.56018 19.4725 5.60678 18.9678 6M20.9638 4C20.9638 3.43982 19.4725 2.39322 18.9678 2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M2.99902 4H6.99118M2.99902 4C2.99902 3.43982 4.49039 2.39322 4.9951 2M2.99902 4C2.99902 4.56018 4.49039 5.60678 4.9951 6" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M9.81487 22.0007V21.0596C9.81487 20.4117 9.60508 19.7811 9.21688 19.2623L5.39417 14.1535C5.07649 13.7289 4.8396 13.2142 4.98547 12.7044C5.34567 11.4455 6.76774 10.3262 8.35883 12.2975L9.95899 14.005V3.59393C10.0571 1.76471 13.1323 1.18697 13.4502 3.59393V9.5271C14.9328 9.3362 21.916 10.3781 20.9001 14.7918C20.8515 15.0027 20.803 15.2168 20.7555 15.428C20.5491 16.3461 19.9405 17.9801 19.2694 18.9356C18.5703 19.931 18.8968 21.5354 18.817 22.002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Drag01;
