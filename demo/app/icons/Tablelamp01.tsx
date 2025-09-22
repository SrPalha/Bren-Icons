import React from 'react';
import type { IconProps } from '../types';

const Tablelamp01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12v10m16-10v10M3 12h18M4 17h16m-9-2.5h2m1.386-11.145c-.103-.17-.197-.329-.28-.475-.25-.443-.376-.664-.576-.772C13.33 2 13.064 2 12.531 2H11.47c-.533 0-.8 0-1 .108-.199.108-.324.33-.575.772-.083.146-.177.306-.28.475-1.201 1.969-1.802 2.953-1.562 3.299C8.292 7 9.42 7 11.676 7h.648c2.256 0 3.384 0 3.624-.346.24-.346-.36-1.33-1.562-3.299ZM12 7v5"/> </svg>
  );
};

export default Tablelamp01;
