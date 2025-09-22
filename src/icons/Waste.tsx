import React from 'react';
import type { IconProps } from '../types';

const Waste: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 25 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.75 5h5.43a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 13.32 2h4.488a2 2 0 0 1 1.898 1.368L20.25 5m1.5 0h-13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m20.25 5-.62 9.906c-.021.327-.041.633-.061.917M5.25 5l.605 9.897c.154 2.414.232 3.62.874 4.489.317.429.726.791 1.2 1.063.96.551 2.244.551 4.814.551h2.507"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.75 19a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/> </svg>
  );
};

export default Waste;
