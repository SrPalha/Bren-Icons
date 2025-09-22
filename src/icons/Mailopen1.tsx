import React from 'react';
import type { IconProps } from '../types';

const Mailopen1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="mail-open" clip-path="url(#a)">     <g class="mail-open">       <path stroke="currentColor" strokeWidth="1.5" d="M22.0099 5.88105c.0211.9857.0053 7.48985-.0158 8.47555-.0653 3.0656-.098 4.5983-1.2291 5.7338-1.1312 1.1354-2.7054 1.1749-5.8539 1.254-1.9405.0488-3.8619.0488-5.80234 0-3.1485-.0791-4.72275-.1186-5.85387-1.254-1.13113-1.1355-1.16382-2.6682-1.22919-5.7338-.02102-.9857-.0368-6.98985-.01578-7.97555m.00001.49999L8.92295 10.798c2.54855 1.444 3.62535 1.444 6.17395 0l6.913-3.91696V5.73578c0-.21247-.1343-.40174-.3348-.47193l-9.0045-3.15157c-.4277-.14971-.8936-.14971-1.3214 0L2.34475 5.26385c-.20054.07019-.33483.25946-.33483.47193l.00001 1.14526Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Mailopen1;
