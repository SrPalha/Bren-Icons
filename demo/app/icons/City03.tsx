import React from 'react';
import type { IconProps } from '../types';

const City03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M13 16.703c0-.918 0-1.377.203-1.774.204-.397.583-.679 1.341-1.242l.5-.372C16.224 12.438 16.814 12 17.5 12c.686 0 1.276.438 2.456 1.315l.5.372c.758.563 1.137.845 1.34 1.242.204.397.204.856.204 1.774v1.475c0 1.802 0 2.703-.586 3.262-.586.56-1.528.56-3.414.56h-5v-5.297Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12V5c0-2.482-.518-3-3-3h-4c-2.482 0-3 .518-3 3v17"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 16c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.5 16v6M2 22h18M12 6h2m-2 3h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 22v-2"/> </svg>
  );
};

export default City03;
