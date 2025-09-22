import React from 'react';
import type { IconProps } from '../types';

const Compass: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3.5V2m-2 0h4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.773 10.257c.733.727-.44 6.636-1.644 6.74-1.01.088-1.325-1.904-1.538-2.536-.21-.623-.443-.847-1.061-1.052-1.57-.519-2.355-.779-2.51-1.19-.412-1.089 5.816-2.89 6.753-1.962Z"/> </svg>
  );
};

export default Compass;
