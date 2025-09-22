import React from 'react';
import type { IconProps } from '../types';

const Usershield02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126a9.611 9.611 0 0 0-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 3c-.95 0-1.566.606-2.295.826-.296.09-.444.135-.504.198-.06.064-.077.156-.112.341-.376 1.979.445 3.808 2.403 4.52.21.077.315.115.508.115.194 0 .299-.038.51-.115 1.957-.712 2.777-2.541 2.401-4.52-.035-.185-.052-.277-.112-.34-.06-.064-.208-.109-.505-.199C20.566 3.606 19.95 3 19 3Z"/> </svg>
  );
};

export default Usershield02;
