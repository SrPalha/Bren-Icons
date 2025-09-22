import React from 'react';
import type { IconProps } from '../types';

const Tea: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.25 10.5h1.39c1.852 0 2.402.265 2.357 1.584-.073 2.183-1.058 4.72-4.997 5.416"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.946 20.614C2.572 18.02 2.075 14.34 2.001 10.5c-.031-1.659.45-2 2.658-2h10.682c2.208 0 2.69.341 2.658 2-.074 3.84-.57 7.52-3.945 10.114-.96.739-1.77.886-3.135.886H9.081c-1.364 0-2.174-.147-3.135-.886Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8.5v5m-1.496 2.797.292-1.852c.086-.542.598-.945 1.203-.945.604 0 1.117.403 1.202.945l.292 1.852c.158.997-3.127.876-2.989 0ZM11.309 2.5C10.762 2.839 10 4 10 5.5M7.54 4S7 4.5 7 5.5M14.001 4c-.273.17-.501 1-.501 1.5"/> </svg>
  );
};

export default Tea;
