import React from 'react';
import type { IconProps } from '../types';

const Bedbunk1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M2 11V8h15v3H2Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 17v-1.182c0-.494 0-.74-.16-.988s-.326-.322-.658-.473A4.083 4.083 0 0 0 6.5 14c-.604 0-1.176.129-1.682.357-.332.15-.498.225-.658.473-.16.248-.16.494-.16.988V17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 4v4m0 0h-5m5 0v12m0 2v-2m0 0h-5m0-16v4m0 0v12m0 2v-2"/>   <path fill="#1B1C1B" d="M2 17v3h15v-3H2Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 8h-5m0 0H2v3h15V8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 8V6.818c0-.494 0-.74-.16-.988s-.326-.323-.658-.472A4.083 4.083 0 0 0 6.5 5c-.604 0-1.176.129-1.682.358-.332.15-.498.224-.658.472-.16.248-.16.494-.16.988V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 20h-5m0 0H2v-3h15v3Zm0-8h5m-5 3h5M2 4v18"/> </svg>
  );
};

export default Bedbunk1;
