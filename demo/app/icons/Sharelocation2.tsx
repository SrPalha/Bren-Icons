import React from 'react';
import type { IconProps } from '../types';

const Sharelocation2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11.064 11.064 0 0 1-3.277-1.754m0-15.492A11.329 11.329 0 0 1 9 2.5m-7 7.746a9.624 9.624 0 0 1 1.296-3.305M2 13.754a9.624 9.624 0 0 0 1.296 3.305"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.996 11.5h.006"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 7c2.435 0 4.5 2.016 4.5 4.463 0 2.485-2.098 4.23-4.037 5.415a.942.942 0 0 1-.926 0C9.601 15.681 7.5 13.957 7.5 11.463 7.5 9.016 9.565 7 12 7Z"/> </svg>
  );
};

export default Sharelocation2;
