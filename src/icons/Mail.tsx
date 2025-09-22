import React from 'react';
import type { IconProps } from '../types';

const Mail: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="mail">     <g class="mail">       <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m2 6 6.91302 3.91697c2.54858 1.44403 3.62538 1.44403 6.17398 0L22 6M2.01577 13.4756c.06537 3.0656.09806 4.5983 1.22919 5.7338 1.13112 1.1354 2.70537 1.1749 5.85387 1.254 1.94047.0488 3.86187.0488 5.80237 0 3.1485-.0791 4.7227-.1186 5.8539-1.254 1.1311-1.1355 1.1638-2.6682 1.2291-5.7338.0211-.9857.0211-1.9655 0-2.9512-.0653-3.06554-.098-4.59831-1.2291-5.73374-1.1312-1.13543-2.7054-1.17498-5.8539-1.25409-1.9405-.04876-3.8619-.04876-5.80238-.00001-3.14849.0791-4.72274.11865-5.85387 1.25409-1.13113 1.13543-1.16381 2.6682-1.22919 5.73375-.02102.9857-.02101 1.9655.00001 2.9512Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Mail;
