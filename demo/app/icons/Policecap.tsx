import React from 'react';
import type { IconProps } from '../types';

const Policecap: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.08 9.734C1.53 12.578 4.006 14 4.006 14h15.989s2.476-1.422 1.925-4.266c-.347-1.791-4.191-4.146-6.99-5.644C13.573 3.363 12.894 3 12 3c-.894 0-1.573.363-2.93 1.09-2.799 1.498-6.643 3.853-6.99 5.644ZM4.142 14c-1.474 1.325-1.931 4.576 1.164 5.384 2.057.536 4.337 1.103 5.635 1.422.523.13.785.194 1.059.194.274 0 .536-.064 1.06-.194 1.297-.319 3.577-.886 5.634-1.422 3.095-.808 2.638-4.06 1.164-5.384"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.39 7.73 1.106-.602a1.06 1.06 0 0 1 1.008 0l1.106.602c.29.158.453.48.367.796-.218.8-.752 2.07-1.977 2.474-1.225-.404-1.76-1.675-1.977-2.474-.086-.316.077-.638.367-.796Z"/> </svg>
  );
};

export default Policecap;
