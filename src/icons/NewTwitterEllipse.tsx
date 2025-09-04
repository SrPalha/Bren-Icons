import React from 'react';
import { IconProps } from '../types';

const NewTwitterEllipse: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M7 17L11.1935 12.8065M11.1935 12.8065L7 7H9.77778L12.8065 11.1935M11.1935 12.8065L14.2222 17H17L12.8065 11.1935M17 7L12.8065 11.1935" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1B1C1B" strokeWidth="1.5"/>
    </svg>
  );
};

export default NewTwitterEllipse;
