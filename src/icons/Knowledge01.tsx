import React from 'react';
import type { IconProps } from '../types';

const Knowledge01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16H4.89c-.487 0-.849.172-1.133.451-.469.46-.637 1.14-.711 1.792-.086.755-.055 1.446.155 2.195.236.835.82 1.562 1.685 1.562H21m-1.594 0c-1.539-1.412-2.17-3.858 0-6m-7.588-9.5C11.818 4 9.109 3 9.109 3m2.709 3.921S5.859 3.856 5.859 8.908C5.86 13.961 8.57 16 9.651 16c.862 0 1.37-1.009 2.167-1.009.796 0 1.083 1.009 2.166 1.009 1.08 0 3.792-2.04 3.792-7.092s-5.958-1.987-5.958-1.987ZM12.359 6c0-3.99 1.951-3 2.927-4 .975 2.5-.33 3.003-2.927 4Z"/> </svg>
  );
};

export default Knowledge01;
