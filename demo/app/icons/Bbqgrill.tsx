import React from 'react';
import type { IconProps } from '../types';

const Bbqgrill: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 15-3 7m9-7 3 7m-6-7v7m3.556-16a1.347 1.347 0 0 0 0-2 1.347 1.347 0 0 1 0-2M12 6a1.347 1.347 0 0 0 0-2 1.347 1.347 0 0 1 0-2M8.444 6a1.347 1.347 0 0 0 0-2 1.347 1.347 0 0 1 0-2M7.5 19h9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15a7.015 7.015 0 0 0 6.948-6.003c.063-.435.094-.652-.056-.825C18.742 8 18.5 8 18.016 8H5.984c-.484 0-.726 0-.876.172-.15.173-.119.39-.056.825A7.014 7.014 0 0 0 12 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 10h1M5 10H4"/> </svg>
  );
};

export default Bbqgrill;
