import React from 'react';
import type { IconProps } from '../types';

const Tap4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.722 14.895v-3.316m0 0V6.158c0-.916.73-1.658 1.633-1.658.902 0 1.633.742 1.633 1.658v4.474l2.872.452c1.8.274 2.7.411 3.334.797C18.241 12.517 19 13.474 19 14.87c0 .972-.237 1.624-.812 3.377-.366 1.112-.548 1.668-.846 2.109a3.736 3.736 0 0 1-2.046 1.496c-.505.148-1.083.148-2.238.148h-1.311c-1.666 0-2.498 0-3.214-.317a3.726 3.726 0 0 1-.895-.562c-.6-.507-.972-1.263-1.717-2.775-.604-1.227-.906-1.84-.92-2.475-.007-.287.03-.573.107-.849.172-.611.617-1.127 1.506-2.159l1.108-1.284Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.316 6a4 4 0 0 0-8 0"/> </svg>
  );
};

export default Tap4;
