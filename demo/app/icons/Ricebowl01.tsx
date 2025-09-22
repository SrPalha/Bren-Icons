import React from 'react';
import type { IconProps } from '../types';

const Ricebowl01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M3.911 12H18.09c1.602 0 2.19.37 1.79 1.982-.706 2.843-2.703 3.549-4.549 5.404-.448.45.25 1.117.25 1.613 0 .934-.887 1.001-1.595 1.001h-5.97c-.708 0-1.596-.067-1.595-1 0-.486.677-1.184.25-1.614-1.846-1.855-3.843-2.561-4.549-5.404-.4-1.611.188-1.982 1.79-1.982Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 12c0-1.791-1.9-3.012-3.5-2.308M3.5 12c0-1.293.969-2.359 2.215-2.501-.814-1.84.911-3.905 2.824-3.482m0 0c.476-2.69 4.446-2.69 4.922 0 1.957-.433 3.612 1.665 2.831 3.466M8.539 6.017A2.5 2.5 0 0 1 10 6.965M17 9l5-6m-6 3 2-4"/> </svg>
  );
};

export default Ricebowl01;
