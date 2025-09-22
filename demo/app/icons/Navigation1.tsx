import React from 'react';
import type { IconProps } from '../types';

const Navigation1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.922 4.79c4.774-1.628 7.161-2.441 8.445-1.157 1.284 1.284.47 3.67-1.157 8.445l-1.108 3.251c-1.25 3.667-1.875 5.5-2.906 5.652-.277.04-.563.016-.837-.072-1.02-.327-1.558-2.26-2.636-6.126-.239-.857-.358-1.286-.63-1.614a2.02 2.02 0 0 0-.262-.261c-.328-.273-.756-.392-1.614-.631-3.866-1.078-5.799-1.616-6.126-2.636a1.857 1.857 0 0 1-.072-.837c.152-1.03 1.985-1.656 5.652-2.906l3.251-1.108Z"/> </svg>
  );
};

export default Navigation1;
