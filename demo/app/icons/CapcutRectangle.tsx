import React from 'react';
import { IconProps } from '../types';

const CapcutRectangle: React.FC<IconProps> = ({ 
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
      <path d="M10.8 12L6 14.5C6 15.6785 6 15.7678 6.35155 16.1339C6.7031 16.5 7.2689 16.5 8.40052 16.5H13.2015C14.3332 16.5 14.899 16.5 15.2505 16.1339C15.6021 15.7678 15.6021 15.6785 15.6021 14.5M10.8 12L18 8.25M10.8 12L6 9.5C6 8.32149 6 8.23223 6.35155 7.86612C6.7031 7.5 7.2689 7.5 8.40052 7.5H13.2015C14.3332 7.5 14.899 7.5 15.2505 7.86612C15.6021 8.23223 15.6021 8.32149 15.6021 9.5M10.8 12L18 15.75" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M2.49756 12C2.49756 7.52166 2.49756 5.28249 3.8888 3.89124C5.28005 2.5 7.51922 2.5 11.9976 2.5C16.4759 2.5 18.7151 2.5 20.1063 3.89124C21.4976 5.28249 21.4976 7.52166 21.4976 12C21.4976 16.4783 21.4976 18.7175 20.1063 20.1088C18.7151 21.5 16.4759 21.5 11.9976 21.5C7.51922 21.5 5.28005 21.5 3.8888 20.1088C2.49756 18.7175 2.49756 16.4783 2.49756 12Z" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CapcutRectangle;
