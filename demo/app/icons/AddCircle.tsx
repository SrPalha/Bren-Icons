import React from 'react';
import { IconProps } from '../types';

const AddCircle: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_93_488)">
<path d="M12 8V16M16 12H8M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_93_488">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
};

export default AddCircle;
