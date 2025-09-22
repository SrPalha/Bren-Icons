import React from 'react';
import type { IconProps } from '../types';

const Mailreply01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 5 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.92 11.033c0-.493-.006-.986-.017-1.481-.064-3.078-.097-4.616-1.224-5.756-1.126-1.14-2.694-1.18-5.83-1.26a113.741 113.741 0 0 0-5.779 0c-3.136.08-4.704.12-5.83 1.26-1.127 1.14-1.16 2.678-1.225 5.756-.02.99-.02 1.973 0 2.963.066 3.077.098 4.616 1.225 5.756 1.126 1.14 2.694 1.18 5.83 1.259.966.024 1.928.037 2.89.037"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 21.5c-.116-2.524-.013-3.443-1.656-4.62-.808-.58-2.432-.961-4.626-.755m1.734-2.532-2.297 2.153a.502.502 0 0 0-.003.706l2.3 2.188"/> </svg>
  );
};

export default Mailreply01;
