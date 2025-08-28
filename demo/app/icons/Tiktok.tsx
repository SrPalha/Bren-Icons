import React from 'react';
import { IconProps } from '../types';

const Tiktok: React.FC<IconProps> = ({ 
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
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1B1C1B" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M10.5359 11.0085C9.71585 10.8926 7.84666 11.0844 6.93011 12.7792C6.01355 14.4739 6.9373 16.2378 7.51374 16.9079C8.08298 17.5348 9.89226 18.722 11.8114 17.5629C12.2871 17.2756 12.8797 17.0613 13.552 14.8163L13.4738 5.98242C13.3441 6.95516 14.4186 9.23672 17.478 9.50667" stroke="#1B1C1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Tiktok;
