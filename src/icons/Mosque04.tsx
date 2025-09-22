import React from 'react';
import type { IconProps } from '../types';

const Mosque04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 22v-8c0-1.886 0-2.828-.586-3.414C15.828 10 14.886 10 13 10h-2c-1.886 0-2.828 0-3.414.586C7 11.172 7 12.114 7 14v8h10ZM7 22V12H3v10h4ZM5 12v-2m14 2v-2m-2 12V12h4v10h-4ZM2 12h5m2.025-2C5.94 6 10.678 4 12 2c1.322 2 6.06 4 2.975 8h-5.95ZM22 12h-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 22v-3c0-.978 0-1.467.142-1.913a3 3 0 0 1 .413-.826c.271-.38.662-.674 1.445-1.261.783.587 1.174.88 1.445 1.261a3 3 0 0 1 .413.826C14 17.533 14 18.022 14 19v3"/> </svg>
  );
};

export default Mosque04;
