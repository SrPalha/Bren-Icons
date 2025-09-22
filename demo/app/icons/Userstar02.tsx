import React from 'react';
import type { IconProps } from '../types';

const Userstar02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126a9.611 9.611 0 0 0-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.518 3.433.528 1.065c.072.148.264.29.426.317l.957.16c.612.104.756.551.315.993l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.019-.864.635l-.897-.535a.644.644 0 0 0-.594 0l-.897.535c-.641.384-1.031.097-.863-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.956-.16a.654.654 0 0 0 .424-.318l.527-1.065c.288-.577.756-.577 1.041 0Z"/> </svg>
  );
};

export default Userstar02;
