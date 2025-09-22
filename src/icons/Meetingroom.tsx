import React from 'react';
import type { IconProps } from '../types';

const Meetingroom: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 16V8c0-2.357 0-3.536-.732-4.268C15.536 3 14.357 3 12 3H8c-2.357 0-3.536 0-4.268.732C3 4.464 3 5.643 3 8v8c0 2.357 0 3.535.732 4.268C4.464 21 5.643 21 8 21h4c2.357 0 3.536 0 4.268-.732C17 19.535 17 18.357 17 16Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 21h6c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17v-7c0-1.886 0-2.828-.586-3.414C19.828 6 18.886 6 17 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 11v2"/> </svg>
  );
};

export default Meetingroom;
