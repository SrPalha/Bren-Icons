import React from 'react';
import type { IconProps } from '../types';

const Cupcake03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0c0-.5.4-1.6 2-2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10 6c-2.209 0-4.098 2.493-2.75 4.081C5.622 9.74 4 10.946 4 12.534c0 2.952 4.662 3.373 5.28.503.564 2.617 4.876 2.617 5.44 0 .618 2.87 5.28 2.449 5.28-.503 0-1.588-1.623-2.794-3.25-2.453C18.099 8.493 16.21 6 14 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 15 1.171 4.099c.4 1.396.599 2.094 1.133 2.498C8.84 22 9.565 22 11.017 22h1.966c1.452 0 2.178 0 2.713-.403.534-.404.734-1.102 1.133-2.498L18 15"/> </svg>
  );
};

export default Cupcake03;
