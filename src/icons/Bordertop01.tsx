import React from 'react';
import type { IconProps } from '../types';

const Bordertop01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 6.5c-.198-1.094-.55-1.899-1.17-2.536C18.9 2.5 16.6 2.5 12 2.5s-6.9 0-8.33 1.464C3.05 4.601 2.7 5.406 2.5 6.5m18.749 11.19c-.194 1.042-.536 1.809-1.14 2.415-.605.606-1.37.95-2.409 1.143M21.495 10c.005.586.005 1.288.005 1.974 0 .686 0 1.45-.005 2.037M13.9 21.495c-.584.005-1.216.005-1.9.005-.684 0-1.316 0-1.9-.005m-3.8-.247c-1.04-.194-1.804-.537-2.409-1.143-.604-.606-.946-1.373-1.14-2.415M2.505 10c-.005.586-.005 1.288-.005 1.974 0 .686 0 1.45.005 2.037M21.5 12H20M4 12H2.5M12 9v6m0 4.531V21m3-9H9"/> </svg>
  );
};

export default Bordertop01;
