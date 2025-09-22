import React from 'react';
import { IconProps } from '../types';

const MediumSquare: React.FC<IconProps> = ({ 
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
      <path d="M7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M13.5 15C14.3284 15 15 13.8807 15 12.5C15 11.1193 14.3284 10 13.5 10C12.6716 10 12 11.1193 12 12.5C12 13.8807 12.6716 15 13.5 15Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M18 15C18.5523 15 19 13.8807 19 12.5C19 11.1193 18.5523 10 18 10C17.4477 10 17 11.1193 17 12.5C17 13.8807 17.4477 15 18 15Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
};

export default MediumSquare;
