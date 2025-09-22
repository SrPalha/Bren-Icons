import React from 'react';
import type { IconProps } from '../types';

const Bed: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 3.5v17m20-12v12M2 8.5l4 2h16m-20 5h4m16 0h-3m-13-5v6c0 1.655.345 2 2 2h9c1.655 0 2-.345 2-2v-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.814 10.5c.08-.424.206-.868.182-1.303a2.06 2.06 0 0 0-.87-1.583c-.201-.14-.646-.282-1.113-.403-.682-.177-1.023-.266-1.422-.175-.283.065-.528.216-.88.485-.039.03-.058.044-.088.07A2.088 2.088 0 0 0 2 8.5"/> </svg>
  );
};

export default Bed;
