import React from 'react';
import type { IconProps } from '../types';

const Userlock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126a9.611 9.611 0 0 0-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.286" d="M20.906 4.613V3.518C20.906 2.68 20.276 2 19.5 2c-.777 0-1.406.68-1.406 1.518v1.095M19.03 9h.938c.73 0 1.094 0 1.37-.16.218-.125.397-.318.513-.553.148-.299.148-.693.148-1.48 0-.788 0-1.182-.148-1.48a1.304 1.304 0 0 0-.513-.554c-.276-.16-.64-.16-1.37-.16h-.938c-.73 0-1.094 0-1.37.16a1.304 1.304 0 0 0-.513.554C17 5.625 17 6.019 17 6.807c0 .787 0 1.181.148 1.48.116.235.295.428.513.554.276.159.64.159 1.37.159Z"/> </svg>
  );
};

export default Userlock02;
