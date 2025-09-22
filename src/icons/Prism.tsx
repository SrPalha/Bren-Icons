import React from 'react';
import type { IconProps } from '../types';

const Prism: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15c.323 0 .607.2 1.175.601l3.744 2.642c2.185 1.542 3.278 2.313 3.052 3.035M12 15c-.323 0-.607.2-1.175.601l-3.744 2.642c-2.185 1.542-3.278 2.313-3.052 3.035M12 15v-3.5m7.97 9.778c-.225.722-1.559.722-4.226.722H8.256c-2.667 0-4.001 0-4.227-.722m15.942 0V8M4.029 21.278V8M12 2c.323 0 .607.2 1.175.601l3.744 2.642c2.185 1.542 3.278 2.313 3.052 3.035C19.745 9 18.41 9 15.744 9H8.256c-2.667 0-4.001 0-4.227-.722-.226-.722.867-1.493 3.052-3.035l3.744-2.642C11.393 2.201 11.677 2 12 2Zm0 0v4.5"/> </svg>
  );
};

export default Prism;
