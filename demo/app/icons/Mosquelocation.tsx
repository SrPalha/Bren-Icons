import React from 'react';
import type { IconProps } from '../types';

const Mosquelocation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.007 7.499a2.5 2.5 0 1 0-2.501 3.948m.444 6.547c-.25 0-.497-.067-.716-.194-2.987-1.916-6.232-4.673-6.232-8.661C2.002 5.226 5.19 2 8.95 2c1.968 0 3.778.883 5.058 2.285"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.62 15.55c-1.36-1.656-1.593-3.318.354-5.337 2.044-1.824 3.222-2.687 3.535-3.206.314.52 1.51 1.382 3.555 3.206 1.853 1.654 1.737 3.681.376 5.337m-7.82 0h-.522m.522 0h7.82m0 0h.46m-8.802 0h-1.07m1.07 0v5.542c.04.668 0 .98 1.21.892h3.183m4.41-6.434h1.098m-1.098 0v5.644c.116.906-.605.747-1.067.79h-3.343m0 0 .035-2.134"/> </svg>
  );
};

export default Mosquelocation;
