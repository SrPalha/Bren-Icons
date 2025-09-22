import React from 'react';
import type { IconProps } from '../types';

const Medicinebottle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.068 2h5.864c.92 0 1.382 0 1.668.293.533.546.533 2.868 0 3.414C16.313 6 15.853 6 14.932 6H9.068c-.92 0-1.381 0-1.668-.293-.533-.546-.533-2.868 0-3.414C7.686 2 8.147 2 9.068 2Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8 6a6.8 6.8 0 0 1 .306.656 3 3 0 0 1-.23 2.542 6.736 6.736 0 0 1-.418.59l-.403.539c-.45.6-.675.9-.838 1.229a4 4 0 0 0-.35 1.05C6 12.965 6 13.34 6 14.091V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22c2.828 0 4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-1.909c0-.75 0-1.125-.067-1.486a4 4 0 0 0-.35-1.05c-.163-.328-.388-.628-.838-1.228l-.403-.538a6.862 6.862 0 0 1-.419-.59 3 3 0 0 1-.23-2.543c.06-.161.142-.326.307-.656"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 13v5m-2.5-2.5h5"/> </svg>
  );
};

export default Medicinebottle01;
