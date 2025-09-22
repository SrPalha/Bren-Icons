import React from 'react';
import type { IconProps } from '../types';

const Wheelchair: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.008 16h-.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m6 11-.628-5.023c-.145-1.159-.217-1.738-.522-2.155a2 2 0 0 0-.647-.572C3.751 3 3.167 3 2 3m4 4h5.5c2.357 0 3.536 0 4.268.732.732.732.732 1.911.732 4.268v6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 14h4.024c.885 0 1.328 0 1.713.189.093.045.182.098.267.158.356.25.601.659 1.092 1.474.393.653.59.98.884 1.107.07.03.141.05.215.063.312.052.629-.124 1.263-.475l.542-.3"/> </svg>
  );
};

export default Wheelchair;
