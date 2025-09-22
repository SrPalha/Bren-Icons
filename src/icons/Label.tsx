import React from 'react';
import type { IconProps } from '../types';

const Label: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3c1.963 0 2.944 0 3.789.422.844.423 1.433 1.208 2.611 2.778C21.133 9.511 22 10.667 22 12c0 1.333-.867 2.489-2.6 4.8-1.178 1.57-1.767 2.355-2.611 2.778C15.944 20 14.963 20 13 20h-3c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"/> </svg>
  );
};

export default Label;
