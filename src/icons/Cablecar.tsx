import React from 'react';
import type { IconProps } from '../types';

const Cablecar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.413 11.624a17.805 17.805 0 0 0-.215 6.462c.246 1.64.37 2.461 1.213 3.188C6.255 22 7.277 22 9.322 22h5.356c2.045 0 3.067 0 3.91-.726.845-.727.968-1.547 1.215-3.188a17.801 17.801 0 0 0-.216-6.462c-.337-1.534-.506-2.3-1.329-2.962C17.435 8 16.468 8 14.533 8H9.468c-1.935 0-2.903 0-3.726.662s-.992 1.428-1.33 2.962Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 2h10m0 0h6m-6 0-2 3.5m-3 0h6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.5 16h15M12 9v7"/> </svg>
  );
};

export default Cablecar;
