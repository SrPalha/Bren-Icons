import React from 'react';
import type { IconProps } from '../types';

const Editroad: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.252 3v18m13-18v7.5M9.752 3v4m0 3v4m0 3v4m9.86-7.56.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2.007 2.007 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0Z"/> </svg>
  );
};

export default Editroad;
