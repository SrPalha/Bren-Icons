import React from 'react';
import type { IconProps } from '../types';

const Link04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 13.229c.142.232.31.451.504.654a3.56 3.56 0 0 0 4.454.59c.26-.16.505-.357.73-.59l3.239-3.372c1.43-1.49 1.43-3.904 0-5.394a3.564 3.564 0 0 0-5.184 0l-.713.743"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m10.97 18.14-.713.743a3.564 3.564 0 0 1-5.184 0c-1.43-1.49-1.43-3.905 0-5.394l3.24-3.372a3.564 3.564 0 0 1 5.183 0c.194.202.362.422.504.654"/> </svg>
  );
};

export default Link04;
