import React from 'react';
import type { IconProps } from '../types';

const Deliveredsent: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 9v4.947c0 2.382 0 3.573.732 4.313.487.492 1.171.657 2.268.712M12.427 5c.913.3 1.63 1.024 1.926 1.947.147.456.147 1.02.147 2.15 0 .752 0 1.128.098 1.432a2.01 2.01 0 0 0 1.284 1.298c.301.099.673.099 1.418.099H22v2.021c0 2.382 0 3.573-.732 4.313-.487.492-1.171.657-2.268.712M9 19h6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 7h1.821c1.456 0 2.183 0 2.775.354.593.353.938.994 1.628 2.276L22 12M7.327 8l1.486-1.174C9.604 6.2 10 5.888 10 5.5m0 0c0-.388-.396-.7-1.187-1.326L7.327 3M10 5.5H2"/> </svg>
  );
};

export default Deliveredsent;
