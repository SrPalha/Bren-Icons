import React from 'react';
import type { IconProps } from '../types';

const Bookmark: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="bookmark">     <g class="bookmark">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 17.9808V9.70753c0-3.63337 0-5.45005 1.17157-6.57879C6.34315 2 8.22876 2 12 2c3.7712 0 5.6569 0 6.8284 1.12874C20 4.25748 20 6.07416 20 9.70753v8.27327c0 2.3059 0 3.4588-.7728 3.8715-1.4967.7991-4.304-1.8671-5.6372-2.6699-.7732-.4656-1.1598-.6984-1.59-.6984-.4302 0-.8168.2328-1.59.6984-1.3332.8028-4.14053 3.469-5.63715 2.6699C4 21.4396 4 20.2867 4 17.9808Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Bookmark;
