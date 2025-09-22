import React from 'react';
import type { IconProps } from '../types';

const Pin2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 21 5-5m5.239 2.912c-3.753-.852-7.299-4.398-8.15-8.15-.238-1.045-.017-1.728.904-2.303 1.079-.674 2.247-.889 3.46-.781 1.701.15 2.552.225 2.977.004.97-.505 1.5-2.148 2.02-3.082.481-.863.722-1.294 1.288-1.498.566-.203.907-.08 1.588.166a5.643 5.643 0 0 1 3.406 3.406c.246.681.37 1.022.166 1.588-.204.566-.635.807-1.498 1.288-.94.524-2.605 1.06-3.11 2.04-.22.428-.14 1.26.02 2.925.118 1.224-.085 2.4-.768 3.493-.576.92-1.259 1.14-2.303.904Z"/> </svg>
  );
};

export default Pin2;
