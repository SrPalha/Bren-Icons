import React from 'react';
import type { IconProps } from '../types';

const Keyframeadd2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M6.71 7.782C7.765 6.594 8.294 6 9 6c.705 0 1.234.594 2.29 1.782l2.601 2.922C15.297 12.284 16 13.075 16 14c0 .925-.703 1.715-2.109 3.296l-2.6 2.922C10.234 21.406 9.705 22 9 22c-.705 0-1.234-.594-2.29-1.782l-2.601-2.922C2.703 15.716 2 14.925 2 14c0-.925.703-1.715 2.109-3.296l2.6-2.922Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.71 7.782C7.765 6.594 8.294 6 9 6c.705 0 1.234.594 2.29 1.782l2.601 2.922C15.297 12.284 16 13.075 16 14c0 .925-.703 1.715-2.109 3.296l-2.6 2.922C10.234 21.406 9.705 22 9 22c-.705 0-1.234-.594-2.29-1.782l-2.601-2.922C2.703 15.716 2 14.925 2 14c0-.925.703-1.715 2.109-3.296l2.6-2.922Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 9V2M15 5.5h7"/> </svg>
  );
};

export default Keyframeadd2;
