import React from 'react';
import { IconProps } from '../types';

const Mic: React.FC<IconProps> = ({ 
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
      <path d="M17 7V11M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11M17 7H14M17 11H14M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Mic;
