import React from 'react';
import type { IconProps } from '../types';

const Dropper: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.287 8-6.605 6.605a3.321 3.321 0 0 0-.975 2.271c-.029 1.11-.043 1.665-.127 1.861-.084.196-.276.389-.66.773l-.595.594a1.11 1.11 0 0 0 1.571 1.57l.594-.593c.385-.385.577-.577.773-.66.196-.085.751-.1 1.861-.128a3.321 3.321 0 0 0 2.27-.975l1.929-1.928m0 0 3.106-3.106m-3.106 3.106-1.571-1.57m4.677-1.536L16 12.713m-1.57 1.57-1.572-1.57m8.21-5.281L19.5 9a2.121 2.121 0 0 0 0 3L12 4.5a2.121 2.121 0 0 0 3 0l1.568-1.568a3.182 3.182 0 1 1 4.5 4.5Z"/> </svg>
  );
};

export default Dropper;
