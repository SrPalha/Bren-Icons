import React from 'react';
import type { IconProps } from '../types';

const Pentagon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.208 5.405C8.978 3.135 10.363 2 12 2c1.637 0 3.022 1.135 5.792 3.405l.256.21c2.286 1.874 3.429 2.81 3.815 4.126.386 1.316-.073 2.71-.992 5.495l-.183.554c-.98 2.975-1.471 4.463-2.662 5.315-1.65 1.182-4.126.853-6.026.853-3.175 0-4.836 0-6.026-.853-1.19-.852-1.681-2.34-2.662-5.315l-.183-.554c-.919-2.786-1.378-4.179-.992-5.495.386-1.316 1.529-2.252 3.815-4.125l.256-.21Z"/> </svg>
  );
};

export default Pentagon;
