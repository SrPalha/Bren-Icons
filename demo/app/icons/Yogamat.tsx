import React from 'react';
import type { IconProps } from '../types';

const Yogamat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.506 15.01 6.634-4.512c.188-.14.355-.303.497-.488.485-.63.476-1.505.168-2.237A4.553 4.553 0 0 0 13.6 4.999c-.936 0-1.806.28-2.529.758l-7.08 4.999"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.995 13.507c0 .696.369 2.079 2.04 2.459 1.007.228 3.938-.736 2.504-3.527-1.434-2.792-4.887-2.807-6.292-1.871-.859.52-2.526 2.148-2.21 4.312.113 1.31 1.145 3.97 4.375 4.122h9.892c.922-.073 1.112-.207 1.814-.746.945-.848 2.522-2.408 3.439-3.434.198-.222.411-.45.439-.746.145-1.577-2.247-.894-3.98-1.082"/> </svg>
  );
};

export default Yogamat;
