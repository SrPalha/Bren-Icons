import React from 'react';
import type { IconProps } from '../types';

const Jupiter: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16.5c1.105 0 2-.672 2-1.5s-.895-1.5-2-1.5-2 .672-2 1.5.895 1.5 2 1.5Zm13.272-.748c-3.607-.005-6.563.608-9.772 2.748a20.113 20.113 0 0 1-4.392 2.224m14.164-4.972a9.973 9.973 0 0 0 .704-4.454m-.704 4.454A10.003 10.003 0 0 1 12 22a9.955 9.955 0 0 1-4.892-1.276m0 0A9.997 9.997 0 0 1 2 12a10 10 0 0 1 .427-2.9m19.549 2.198C16.903 14.248 14.335 13.112 9 10c-2.437-1.422-4.72-1.443-6.573-.9m19.549 2.198a9.953 9.953 0 0 0-.537-2.607m-19.012.408a10.006 10.006 0 0 1 2.961-4.601M21.44 8.69C20.073 4.794 16.363 2 12 2c-2.535 0-4.85.943-6.612 2.498M21.44 8.69C17.38 8.69 17.5 4.775 12 6c-3.6.802-5.741-.834-6.612-1.502"/> </svg>
  );
};

export default Jupiter;
