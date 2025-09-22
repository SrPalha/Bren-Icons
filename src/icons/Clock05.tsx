import React from 'react';
import type { IconProps } from '../types';

const Clock05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c4.478 0 8.226 2.943 9.5 7H19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l2 2m7.955-1c.03-.33.045-.663.045-1m-7 10a9.654 9.654 0 0 0 1-.392M20.79 17c.194-.372.366-.757.515-1.154m-3.113 4.383c.345-.285.671-.593.977-.922"/> </svg>
  );
};

export default Clock05;
