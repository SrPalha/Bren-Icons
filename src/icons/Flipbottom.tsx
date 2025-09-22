import React from 'react';
import type { IconProps } from '../types';

const Flipbottom: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="flip-bottom"> <path id="Vector" d="M14.3332 2H9.6666M20.9849 7.5C21.0021 7.99962 21.0029 8.49991 21.0015 9M3.01509 7.5C2.99793 7.99962 2.99705 8.49991 2.99855 9M20.4629 4.74533C19.9788 3.78698 19.1975 3.00864 18.237 2.52818M5.8203 2.5C4.83354 2.9779 4.0308 3.76801 3.53709 4.74532" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M18.495 12C20.453 12 20.9931 12.6378 20.9931 14.5C20.9931 17.0317 21.243 19.9537 18.7448 21.3971C17.7014 22 16.3005 22 13.4988 22H10.5012C7.69947 22 6.29863 22 5.25521 21.3971C2.75702 19.9537 3.00695 17.0317 3.00695 14.5C3.00695 12.5404 3.64422 12 5.50502 12H18.495Z" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Flipbottom;
