import React from 'react';
import { IconProps } from '../types';

const PlayStore: React.FC<IconProps> = ({ 
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
      <path d="M17.9405 12.4311C17.7073 13.3831 16.4665 14.0669 13.9848 15.4344C11.2857 16.9217 9.93612 17.6654 8.84297 17.3789C8.47274 17.2819 8.13174 17.1112 7.84541 16.8797C7 16.1963 7 14.7773 7 11.9394C7 9.10158 7 7.68265 7.84541 6.99916C8.13174 6.76767 8.47274 6.59705 8.84297 6.50001C9.93612 6.2135 11.2857 6.95716 13.9848 8.44449C16.4665 9.812 17.7073 10.4957 17.9405 11.4478C18.0198 11.7717 18.0198 12.1072 17.9405 12.4311Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M8 17L16 9.61432M8 7L16 14.3857" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
};

export default PlayStore;
