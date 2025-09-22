import React from 'react';
import type { IconProps } from '../types';

const Rotateleft3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.624 10.46-.444.766a1.762 1.762 0 0 0 .65 2.413m0 0 .77.442m-.77-.442a.89.89 0 0 0-1.212.324 1.76 1.76 0 0 0 .65 2.413m0 0 .768.442m-.768-.442a.753.753 0 0 0-1.08.386l-.109.287a1.763 1.763 0 0 0 .775 2.15l1.132.65c1.671.96 2.507 1.44 3.32 1.57.47.074 1.187-.031 1.723-.137a1.96 1.96 0 0 1 1.357.204l.895.514M9.162 11.344 4.165 8.473a1.322 1.322 0 0 1-.488-1.81 1.335 1.335 0 0 1 1.82-.485l7.66 4.4-.531-1.957a1.487 1.487 0 0 1 1.221-1.86 1.507 1.507 0 0 1 1.608.891l1.937 4.786c.371.915 1.248 1.8 2.107 2.294M8.863 4.966c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769 1.946 1.363 2.22 2.222 2.529 2.798"/> </svg>
  );
};

export default Rotateleft3;
