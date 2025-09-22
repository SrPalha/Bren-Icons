import React from 'react';
import type { IconProps } from '../types';

const Kidneys: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.986 6c.157-1.406-.981-3-3.415-3C4.047 3 2 5.462 2 8.5S3.539 14 6.064 14c1.616 0 2.472-1.254 2.292-2.341"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 8c1.5 0 3.5.496 3.5 3.64 0 4.16-2 5.72-.5 9.36m7-13c-1.5 0-3.5.496-3.5 3.64 0 4.16 2 5.72.5 9.36"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.61 6c.204.571.55 1.943.306 2.857C6.814 9.238 6.488 10 6 10m8.014-4c-.157-1.406.981-3 3.415-3 2.524 0 4.57 2.462 4.57 5.5S20.462 14 17.937 14c-1.695 0-2.554-1.38-2.258-2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.39 6c-.204.571-.55 1.943-.306 2.857.102.381.428 1.143.916 1.143"/> </svg>
  );
};

export default Kidneys;
