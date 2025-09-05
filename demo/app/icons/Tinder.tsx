import React from 'react';
import { IconProps } from '../types';

const Tinder: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2558 8.51453C22.3836 14.4194 19.433 21.5754 12.4376 22C3.44145 22 0.307051 11.3643 7.38031 6.45487C7.38031 14.5 14.1304 7.5 12 2C15 3 17.7939 5.56221 19.2558 8.51453Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Tinder;
