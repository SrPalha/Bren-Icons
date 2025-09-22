import React from 'react';
import type { IconProps } from '../types';

const Mapsrefresh1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.28 18.571.618.167c.474.127.71.19.906.04m0 0s0 0 0 0Zm0 0c.196-.15.196-.36.196-.778a4 4 0 0 0-6.347-3.24m.061 2.669-.612-.166c-.473-.127-.71-.191-.905-.042l-.002.002C14 17.372 14 17.581 14 18a4 4 0 0 0 6.28 3.287"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12V9.217c0-1.94 0-2.909-.586-3.512-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.021c-1.391-.696-2.087-1.044-2.828-1.02-.74.024-1.413.417-2.759 1.203l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 5.746 2 6.33 2 7.499v8.217c0 1.535 0 2.303.342 2.73.228.285.547.476.9.54.53.095 1.18-.284 2.478-1.042.882-.515 1.73-1.05 2.785-.905.884.122 1.705.68 2.495 1.075"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 2v15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v6.5"/> </svg>
  );
};

export default Mapsrefresh1;
