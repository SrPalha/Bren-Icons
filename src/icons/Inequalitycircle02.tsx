import React from 'react';
import type { IconProps } from '../types';

const Inequalitycircle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.02 7.5 5.844 5.171c.336.409.007.829-.444.829H8.004m8.016 3H7.998"/> </svg>
  );
};

export default Inequalitycircle02;
