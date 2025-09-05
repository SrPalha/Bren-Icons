import React from 'react';
import { IconProps } from '../types';

const Lightmode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clip-path="url(#clip0_93_565)">
<path d="M12 2V3M12 21V22M22 12H21M3 12H2M19.07 4.93L18.678 5.323M5.322 18.678L4.929 19.071M19.07 19.07L18.678 18.677M5.322 5.322L4.929 4.929M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_93_565">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Lightmode;
