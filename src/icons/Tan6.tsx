import React from 'react';
import type { IconProps } from '../types';

const Tan6: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" fillRule="evenodd" d="M9.745 6h2.51l3.207 11.45-1.923.55-.936-3.5H9.397L8.462 18l-1.923-.55L9.746 6Zm.223 6.5h2.063L11 8.89 9.968 12.5Zm6.802-6.473a1 1 0 0 1 1.124.526L21 12.764V6.5h2V17a1 1 0 0 1-1.894.447L18 11.237v6.736h-2V7a1 1 0 0 1 .77-.973ZM3.5 8H2V6h5v2H5.5v10h-2V8Z" clipRule="evenodd"/> </svg>
  );
};

export default Tan6;
