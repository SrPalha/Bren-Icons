import React from 'react';
import type { IconProps } from '../types';

const Shaka1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.329 5.952 10.5 8.147c1.39 0 2.085 0 2.613.213a3.061 3.061 0 0 1 1.828 2.182c.127.57.023 1.276-.183 2.69L14 17.401h5.25c.966 0 1.75.805 1.75 1.799 0 .993-.784 1.799-1.75 1.799h-8.2c-2.847 0-4.271 0-5.355-.58a5.074 5.074 0 0 1-2.132-2.192C3 17.113 3 15.648 3 12.72c0-1.556 0-2.335.257-3.036a4.06 4.06 0 0 1 .289-.624c.367-.647.954-1.137 2.13-2.12L9.911 3.4a1.702 1.702 0 0 1 2.183-.008c.768.632.874 1.792.234 2.56Z"/> </svg>
  );
};

export default Shaka1;
