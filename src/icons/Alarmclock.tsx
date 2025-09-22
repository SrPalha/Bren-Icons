import React from 'react';
import type { IconProps } from '../types';

const Alarmclock: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 19-2 2m16-2 2 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19 3.57.596-.298c.845-.423 1.162-.374 1.834.298.672.672.72.99.298 1.834L21.43 6M5 3.57l-.596-.298c-.845-.423-1.162-.374-1.834.298-.672.672-.72.99-.298 1.834L2.57 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9.5v4l2 2m-2-12V2m-2 0h4"/> </svg>
  );
};

export default Alarmclock;
