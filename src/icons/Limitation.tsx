import React from 'react';
import type { IconProps } from '../types';

const Limitation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 20c-.514.697-.723.94-1.145.993-.423.053-.715-.19-1.3-.673C3.381 18.52 2 15.825 2 12.815 2 7.395 6.477 3 12 3s10 4.394 10 9.815c0 3.01-1.381 5.704-3.555 7.505-.585.484-.877.726-1.3.673-.422-.053-.631-.296-1.145-.993m-2.5-9.5L18 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/> </svg>
  );
};

export default Limitation;
