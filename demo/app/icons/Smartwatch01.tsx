import React from 'react';
import type { IconProps } from '../types';

const Smartwatch01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7.5s.897-1.572 1.062-3.48c.077-.888.115-1.332.364-1.588.25-.256.551-.29 1.153-.357C10.977 2.031 11.451 2 12 2s1.023.03 1.42.075c.603.068.904.101 1.154.357.25.256.287.7.364 1.588C15.103 5.928 16 7.5 16 7.5m0 9s-.897 1.572-1.062 3.48c-.077.888-.115 1.332-.364 1.588-.25.256-.551.29-1.153.357-.398.044-.872.075-1.421.075s-1.023-.03-1.42-.075c-.603-.068-.904-.101-1.154-.357-.25-.256-.287-.7-.364-1.588C8.897 18.072 8 16.5 8 16.5"/> </svg>
  );
};

export default Smartwatch01;
