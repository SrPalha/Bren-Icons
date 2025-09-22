import React from 'react';
import type { IconProps } from '../types';

const Saletag01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.986 3.7c2.797 3.095 7.41-3.584 10.14-1.16 1.57 1.394 1.073 4.474-.965 6.48"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.79 13.984c.018-.335.111-.947-.397-1.412m0 0a1.909 1.909 0 0 0-.666-.377c-1.048-.37-2.336.867-1.425 2 .49.608.867.795.832 1.486-.025.486-.503.994-1.132 1.188-.547.168-1.15-.055-1.531-.481-.466-.52-.42-1.011-.423-1.225m4.345-2.59.574-.575m-4.455 4.455-.545.545"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.273 6.633c.925.178 1.133.762 1.409 2.384.249 1.46.319 3.213.319 3.96a1.32 1.32 0 0 1-.319.74c-1.935 2.028-5.776 5.858-7.714 7.76-.76.68-1.908.695-2.716.071-1.653-1.487-3.241-3.168-4.797-4.686-.625-.805-.61-1.95.07-2.708 2.051-2.127 5.762-5.768 7.856-7.78.21-.18.468-.292.743-.317.47 0 1.276.063 2.062.108"/> </svg>
  );
};

export default Saletag01;
