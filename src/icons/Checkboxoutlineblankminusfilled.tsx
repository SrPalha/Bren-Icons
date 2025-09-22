import React from 'react';
import type { IconProps } from '../types';

const Checkboxoutlineblankminusfilled: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="checkboxoutlineblankminusfilled">     <g class="checkboxoutlineblankminusfilled">       <path fill="#1B1C1B" d="M17.312 1.93059c-1.3434-.18061-3.0641-.1806-5.2548-.18059h-.1144c-2.19068-.00001-3.91136-.00002-5.25478.18059-1.37665.18509-2.46891.57213-3.32711 1.43032-.85819.8582-1.24523 1.95046-1.43032 3.32711-.18061 1.34342-.1806 3.0641-.18059 5.25478v.1144c-.00001 2.1907-.00002 3.9114.18059 5.2548.18509 1.3766.57213 2.4689 1.43032 3.3271.8582.8582 1.95046 1.2452 3.32711 1.4303 1.34342.1806 3.06408.1806 5.25478.1806h.1144c2.1907 0 3.9114 0 5.2548-.1806 1.3766-.1851 2.4689-.5721 3.3271-1.4303.8582-.8582 1.2452-1.9505 1.4303-3.3271.1806-1.3434.1806-3.0641.1806-5.2548v-.1144c0-2.1907 0-3.91136-.1806-5.25478-.1851-1.37665-.5721-2.46891-1.4303-3.32711-.8582-.85819-1.9505-1.24523-3.3271-1.43032ZM8 11c-.55228 0-1 .4477-1 1s.44772 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Z" class="Vector" clipRule="evenodd"/>     </g>   </g> </svg>
  );
};

export default Checkboxoutlineblankminusfilled;
