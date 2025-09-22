import React from 'react';
import type { IconProps } from '../types';

const Fork: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 5-3.5 3.5m-2-2 4 4M22 6.687l-4.203 4.203a4.42 4.42 0 0 1-3.056 1.294l-.343.005a2.222 2.222 0 0 0-1.589.704l-8.037 8.6a1.602 1.602 0 1 1-2.264-2.264l8.598-8.039c.44-.412.695-.985.704-1.589l.006-.342a4.419 4.419 0 0 1 1.294-3.057L17.312 2"/> </svg>
  );
};

export default Fork;
