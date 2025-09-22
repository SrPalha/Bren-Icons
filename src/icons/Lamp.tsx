import React from 'react';
import type { IconProps } from '../types';

const Lamp: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 2c1.635 0 2.452 0 3.165.29.383.155.74.37 1.058.638.59.496.977 1.223 1.75 2.676l.8 1.503c1.401 2.63 2.101 3.946 1.524 4.92-.577.973-2.056.973-5.016.973H8.72c-2.96 0-4.44 0-5.016-.974-.577-.973.123-2.288 1.523-4.919l.8-1.503C6.8 4.15 7.188 3.424 7.778 2.928a3.958 3.958 0 0 1 1.058-.638C9.548 2 10.365 2 12 2Zm0 11v6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.456 20.3c.27-.456.404-.683.6-.852.2-.172.447-.3.718-.375.267-.073.568-.073 1.17-.073h.112c.602 0 .903 0 1.17.073.272.075.518.203.718.375.197.169.331.396.6.851.322.543.482.815.452 1.036a.746.746 0 0 1-.398.544c-.22.121-.58.121-1.298.121h-2.6c-.719 0-1.078 0-1.299-.121a.746.746 0 0 1-.398-.544c-.03-.222.131-.493.453-1.036Z"/> </svg>
  );
};

export default Lamp;
