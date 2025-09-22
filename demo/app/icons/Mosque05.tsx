import React from 'react';
import type { IconProps } from '../types';

const Mosque05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.512 6C15.97 4 18.34 3 19 2c.661 1 3.03 2 1.488 4h-2.976ZM13 11.5V14H7v-2.5m.025 0c-3.085-4 1.653-6 2.975-8 1.322 2 6.06 4 2.975 8h-5.95ZM17 22H3v-5c0-1.414 0-2.121.44-2.56C3.878 14 4.585 14 6 14h8c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22v-1c0-.978 0-1.467.142-1.913a3 3 0 0 1 .413-.826c.271-.38.662-.674 1.445-1.261.783.587 1.174.88 1.445 1.261a3 3 0 0 1 .413.826C12 19.533 12 20.022 12 21v1m5.5-16-.5 9m0 7h4l-.5-16"/> </svg>
  );
};

export default Mosque05;
