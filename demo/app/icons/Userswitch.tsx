import React from 'react';
import type { IconProps } from '../types';

const Userswitch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.789 9.037C3.08 9.42 1.227 10.2 2.356 11.18c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82 1.13-.979-.725-1.76-1.433-2.143-1.659-.898-3.763-.898-5.422 0ZM8.75 4.273A2.261 2.261 0 0 1 6.5 6.545a2.261 2.261 0 0 1-2.25-2.272A2.261 2.261 0 0 1 6.5 2a2.261 2.261 0 0 1 2.25 2.273Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15c0 3.317 2.683 6 6 6l-.857-1.714M20 9c0-3.317-2.683-6-6-6l.857 1.714"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.789 19.037c-.708.383-2.562 1.165-1.433 2.143.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82 1.13-.979-.725-1.76-1.433-2.143-1.659-.898-3.763-.898-5.422 0Zm4.961-4.764a2.262 2.262 0 0 1-2.25 2.273 2.262 2.262 0 0 1-2.25-2.273A2.261 2.261 0 0 1 17.5 12a2.261 2.261 0 0 1 2.25 2.273Z"/> </svg>
  );
};

export default Userswitch;
