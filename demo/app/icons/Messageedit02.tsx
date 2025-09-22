import React from 'react';
import type { IconProps } from '../types';

const Messageedit02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.916 10.5c.02.156.034.313.044.47.053.83.053 1.69 0 2.52-.274 4.243-3.606 7.623-7.79 7.9a33.168 33.168 0 0 1-4.34 0 4.874 4.874 0 0 1-1.486-.339c-.512-.21-.768-.316-.899-.3-.13.016-.319.155-.696.434-.666.49-1.505.844-2.75.813-.629-.015-.943-.023-1.084-.263-.141-.24.034-.572.385-1.237.487-.922.795-1.978.328-2.823-.805-1.208-1.488-2.639-1.588-4.184a19.99 19.99 0 0 1 0-2.52c.274-4.243 3.606-7.622 7.79-7.9a33.244 33.244 0 0 1 3.67-.037"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12.5h.01M8 12.5h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.868 2.44.693.692a1.5 1.5 0 0 1 0 2.121l-3.628 3.696a2 2 0 0 1-1.047.551l-2.248.489a.5.5 0 0 1-.595-.594l.479-2.235a2 2 0 0 1 .551-1.047l3.674-3.674a1.5 1.5 0 0 1 2.121 0Z"/> </svg>
  );
};

export default Messageedit02;
