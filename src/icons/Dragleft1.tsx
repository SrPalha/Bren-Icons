import React from 'react';
import type { IconProps } from '../types';

const Dragleft1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.682 8.488a3.495 3.495 0 1 1 3.602 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.553 21.935.025-.63a2.933 2.933 0 0 0-.48-1.745c-1.348-2.027-2.378-3.181-3.79-5.159a1.454 1.454 0 0 1-.261-.51c-.341-1.444 1.419-3.324 3.049-1.159l1.591 1.633V6.324c.211-1.648 2.804-1.975 3.241 0v3.742c1.617-.147 8.154.978 6.92 5.465-.058.21-.113.425-.17.635-.208.767-.716 1.886-1.205 2.84-.544 1.061-.401 2.56-.493 2.995M8.719 4.989h-5.72m-.001 0c.14.435.518.699.841.995L5.027 6.99M2.998 4.989c.113-.443.526-.73.841-1.029l1.188-1.019"/> </svg>
  );
};

export default Dragleft1;
