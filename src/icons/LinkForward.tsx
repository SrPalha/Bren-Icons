import React from 'react';
import type { IconProps } from '../types';

const Linkforward: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="link-forward" clip-path="url(#a)">     <g class="link-forward">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.1918 9.44118-1.9653-1.97219c-1.4161-1.421-1.9711-2.18542-2.7379-1.91518-.9561.33696-.6414 2.46311-.6414 3.1809-1.4865 0-3.032-.13212-4.49735.14316C4.51259 9.78664 3 13.7153 3 18c1.3691-.9698 2.73683-2.003 4.38233-2.4524 2.05404-.5611 4.34807-.2934 6.46487-.2934 0 .7178-.3147 2.844.6414 3.1809.8689.3062 1.3218-.4942 2.7379-1.9152l1.9653-1.9722C20.3973 13.338 21 12.7332 21 11.9945c0-.7387-.6027-1.3436-1.8082-2.55332Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Linkforward;
