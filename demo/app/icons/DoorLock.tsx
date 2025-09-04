import React from 'react';
import { IconProps } from '../types';

const DoorLock: React.FC<IconProps> = ({ 
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
      <path d="M3 22H21" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M4 22V6C4 2.69067 4.78933 2 8.57143 2H15.4286C19.2107 2 20 2.69067 20 6V22" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M13.92 11.759V9.85411C13.92 8.83227 13.0604 8.00391 12 8.00391C10.9396 8.00391 10.08 8.83227 10.08 9.85411V11.759M15 14.0841C15 15.695 13.6462 17.0039 12 17.0039C10.3538 17.0039 9 15.695 9 14.0841C9 12.3739 10.3538 11.0738 12 11.0738C13.6462 11.0738 15 12.3739 15 14.0841Z" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round"/>
    </svg>
  );
};

export default DoorLock;
