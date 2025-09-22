import React from 'react';
import type { IconProps } from '../types';

const Linksquare02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.099 3c-3.65.007-5.56.096-6.781 1.318C3 5.636 3 7.757 3 12c0 4.242 0 6.364 1.318 7.682C5.636 21 7.757 21 11.998 21c4.243 0 6.364 0 7.682-1.318 1.22-1.222 1.31-3.133 1.317-6.782m-.441-9.403L11.05 13.06m9.507-9.563c-.494-.495-3.822-.449-4.525-.439m4.525.439c.494.495.448 3.827.438 4.531"/> </svg>
  );
};

export default Linksquare02;
