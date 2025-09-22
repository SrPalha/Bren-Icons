import React from 'react';
import type { IconProps } from '../types';

const Flimslate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 10.5h14.412c1.456 0 2.184 0 2.636.44.452.439.452 1.146.452 2.56V15c0 3.3 0 4.95-1.055 5.975C18.889 22 17.19 22 13.795 22h-3.09c-3.396 0-5.094 0-6.15-1.025C3.5 19.95 3.5 18.3 3.5 15v-4.5Zm-.002 0c-.357-1.358-.535-2.037-.491-2.634a3.537 3.537 0 0 1 1.5-2.648c.485-.337 1.152-.519 2.484-.883l7.741-2.113c.345-.094.517-.141.666-.168 1.652-.297 3.276.658 3.85 2.265.051.144.098.32.19.671.026.1.04.15.047.194a1.01 1.01 0 0 1-.635 1.12c-.04.016-.09.03-.188.056L3.498 10.5ZM7 10l2-6m5 4 2-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 18h3"/> </svg>
  );
};

export default Flimslate;
