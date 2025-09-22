import React from 'react';
import type { IconProps } from '../types';

const Pickup01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 17.5c1.424 0 2.062 0 2.514-.487.02-.021.038-.043.057-.065.429-.513.429-1.32.429-2.936 0-1.225 0-1.837-.24-2.354-.25-.54-.702-.877-1.652-1.565-.944-.684-1.614-1.452-2.253-2.51-.912-1.51-1.368-2.265-2.051-2.674-.684-.409-1.49-.409-3.102-.409h-.7m0 0 1.119 3.48c.548 1.705.822 2.557 1.393 3.039.571.481 1.309.481 2.784.481H21m-8.997-7v13m-3 0h5.999m6.998-3h-1m-8.997-3H3.005s-.321.004-.6 0c-.461-.007-.4-.02-.4.04v.96s-.02 3.3.017 3.693c0 .259.203.47.563.687.236.157.606.406.9.524.36.136 1.52.096 1.52.096"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.001 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9.997 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Pickup01;
