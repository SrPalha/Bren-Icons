import React from 'react';
import type { IconProps } from '../types';

const Tap3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.702 13.162 2.009 1.732V6.159c0-.916.737-1.658 1.647-1.658s1.647.742 1.647 1.658v4.473l2.812.453c1.815.274 2.723.41 3.362.796 1.056.637 1.821 1.593 1.821 2.99 0 .972-.239 1.624-.82 3.377-.367 1.112-.552 1.668-.852 2.108a3.766 3.766 0 0 1-2.063 1.497c-.51.148-1.092.148-2.257.148h-.987c-1.549 0-2.323 0-3.012-.286a3.757 3.757 0 0 1-.362-.174c-.655-.358-1.143-.962-2.12-2.172l-3.16-3.916a1.656 1.656 0 0 1-.008-2.069 1.63 1.63 0 0 1 2.343-.221Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.316 6a4 4 0 0 0-8 0"/> </svg>
  );
};

export default Tap3;
