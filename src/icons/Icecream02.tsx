import React from 'react';
import type { IconProps } from '../types';

const Icecream02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.5 12 .827 2.696C9.82 19.566 10.567 22 12 22c1.432 0 2.18-2.435 3.673-7.304L16.5 12M12 8.667a3.2 3.2 0 0 0 .453 1.641m0 0C11.717 11.33 10.483 12 9.083 12 6.828 12 5 10.259 5 8.111 5 6.228 6.406 4.657 8.272 4.3 8.911 2.944 10.34 2 12 2c2.072 0 3.783 1.47 4.048 3.374m-3.595 4.934C13.054 11.318 14.193 12 15.5 12c1.933 0 3.5-1.492 3.5-3.333 0-1.664-1.28-3.043-2.952-3.293m0 0a3.742 3.742 0 0 1-.358 2.182"/> </svg>
  );
};

export default Icecream02;
