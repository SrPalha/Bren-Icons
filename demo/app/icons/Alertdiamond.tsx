import React from 'react';
import type { IconProps } from '../types';

const Alertdiamond: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.153 4.284c-1.174-.436-1.695-2.18-3.033-2.28a1.6 1.6 0 0 0-.24 0c-1.337.1-1.858 1.844-3.032 2.28-1.243.461-2.943-.484-3.995.568-1.013 1.013-.117 2.778-.569 3.995-.461 1.245-2.393 1.76-2.28 3.273.101 1.337 1.845 1.859 2.28 3.033.452 1.217-.444 2.982.569 3.995 1.052 1.052 2.752.107 3.995.568 1.173.436 1.695 2.18 3.033 2.28.08.006.16.006.239 0 1.338-.1 1.86-1.844 3.033-2.28 1.217-.451 2.982.445 3.995-.568 1.087-1.087.04-2.85.614-4.106.53-1.156 2.344-1.698 2.234-3.162-.1-1.337-1.843-1.859-2.28-3.033-.46-1.243.484-2.942-.568-3.995-1.052-1.052-2.752-.107-3.995-.568Z"/> </svg>
  );
};

export default Alertdiamond;
