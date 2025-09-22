import React from 'react';
import type { IconProps } from '../types';

const Navigator1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 3v18M20 3v18"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.661 16.865C10.671 14.955 11.176 14 12 14c.824 0 1.33.955 2.339 2.865l.688 1.301c.775 1.467 1.163 2.2.881 2.553a.83.83 0 0 1-.292.229c-.432.206-1.225-.21-2.812-1.042-.352-.184-.528-.277-.72-.293a.982.982 0 0 0-.168 0c-.192.016-.368.109-.72.293-1.587.832-2.38 1.248-2.812 1.042a.83.83 0 0 1-.292-.229c-.282-.353.106-1.086.881-2.553l.688-1.3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2m0 4v2"/> </svg>
  );
};

export default Navigator1;
