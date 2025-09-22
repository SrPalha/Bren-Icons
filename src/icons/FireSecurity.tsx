import React from 'react';
import { IconProps } from '../types';

const FireSecurity: React.FC<IconProps> = ({ 
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
      <path d="M10.945 22C6.55711 22 3 18.4183 3 14C3 11.9162 3.95829 9.83244 5.20924 8C5.46596 9.5 6.57526 12.4 8.95878 12C6.33498 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5354 16.203C15.5354 15.5085 15.4277 14.5466 15.8359 13.9214C16.7377 12.5405 18.6013 12.7807 19.2625 14.1016C19.5631 14.762 19.4516 15.5387 19.4669 16.1938M15.5354 16.203C14.6863 16.2909 14.3202 16.8429 14.1768 17.2837C14.0325 17.8241 13.9123 19.145 14.1046 20.5859C14.2729 21.4865 14.9066 21.9046 15.4724 21.9549C16.0134 22.0029 18.2978 21.9909 18.9591 21.9909C19.9839 21.9909 20.5851 21.7267 20.8857 20.646C21.0299 19.8054 21.066 18.2443 20.8255 17.2837C20.5597 16.482 19.9245 16.249 19.4669 16.1938M15.5354 16.203C16.8165 16.0703 18.1849 16.0393 19.4669 16.1938" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default FireSecurity;
