import React from 'react';
import type { IconProps } from '../types';

const Drag2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.492 16.77.248-.242c.561-.55.881-1.302.889-2.09l.05-5.143c.006-.698.231-1.434.864-1.724.957-.437 2.14-.19 2.352 1.856l.329 1.728 5.579-6.7c1.167-1.102 3.24.29 2.336 2.016l-3.281 3.95c1.28.86 6.004 5.75 2.178 8.24-.551.48-1.858 1.178-2.998 1.54-1.087.346-1.769 1.53-2.103 1.8M9.484 3.514c0 .836.651 1.514 1.455 1.514.803 0 1.455-.678 1.455-1.514S11.742 2 10.939 2c-.804 0-1.455.678-1.455 1.514Zm0 0H8.84l-.77.072M3.99 8.943c.837-.014 1.474.641 1.487 1.453.013.812-.61 1.51-1.446 1.524a1.518 1.518 0 0 1-1.533-1.483c-.013-.811.655-1.48 1.492-1.494Zm0 0 .09-1.333m1.695-2.96-.328.308-.29.313"/> </svg>
  );
};

export default Drag2;
