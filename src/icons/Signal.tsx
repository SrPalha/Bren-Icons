import React from 'react';
import { IconProps } from '../types';

const Signal: React.FC<IconProps> = ({ 
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
      <path d="M12.0357 21.9286C17.5388 21.9286 22 17.4674 22 11.9643C22 6.46117 17.5388 2 12.0357 2C6.53254 2 2.07137 6.46117 2.07137 11.9643C2.07137 13.7792 1.72188 15.4808 2.5697 16.9464L2.07137 21.9286L7.05352 21.4304C8.51914 22.2782 10.2208 21.9286 12.0357 21.9286Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="3 3"/>
<path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.275 5.4044 14.4704 6 15.5L5 19L8.5 18C9.52961 18.5956 10.725 19 12 19Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Signal;
