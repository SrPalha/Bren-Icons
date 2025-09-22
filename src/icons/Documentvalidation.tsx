import React from 'react';
import type { IconProps } from '../types';

const Documentvalidation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.98 7.016s.5.5 1 1.5c0 0 1.589-2.5 3-3M9.995 2.021c-2.499-.105-4.429.182-4.429.182-1.219.088-3.555.77-3.555 4.762 0 3.956-.025 8.834 0 10.779 0 1.188.736 3.96 3.282 4.108 3.095.18 8.67.219 11.227 0 .685-.039 2.965-.576 3.253-3.056.299-2.57.24-4.355.24-4.78"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 7.016c0 2.761-2.24 5-5.005 5a5.002 5.002 0 0 1-5.005-5c0-2.762 2.241-5 5.005-5a5.002 5.002 0 0 1 5.005 5Zm-15.02 6h4m-4 4h8"/> </svg>
  );
};

export default Documentvalidation;
