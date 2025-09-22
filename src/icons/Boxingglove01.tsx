import React from 'react';
import type { IconProps } from '../types';

const Boxingglove01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.982 11.246c-.087 2.723 3.12 6.078 6.129 7.133m-6.13-7.133c-.304.523-3.415 3.017-3.47 4.073-.263 2.098 3.301 6.039 6.05 6.173 1.026.146 2.449-1.58 3.892-2.864.795-.706 1.94-.87 6.524-2.008 1.664-.289 3.663-3.158.7-5.59m-13.695.216c.928-2.2 2.532-6.456 5.68-8.137 1.277-.726 4.597-1.394 7.85 1.698 1.119.941 3.058 3.002 1.253 5.378-1.204 1.402-3.024.996-3.2 3.422"/> </svg>
  );
};

export default Boxingglove01;
