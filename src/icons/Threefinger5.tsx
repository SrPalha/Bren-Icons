import React from 'react';
import type { IconProps } from '../types';

const Threefinger5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.81 5.71a1.5 1.5 0 0 0-2.954-.522L9.074 9.62l-.927 5.078-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.095c.53.116 1.1.116 2.24.116H14.7a5 5 0 0 0 4.88-3.913l1.31-5.883.088-.493a1.5 1.5 0 1 0-2.955-.52M12.81 5.708l.347-1.97a1.5 1.5 0 1 1 2.955.522l-.347 1.97m-2.955-.522-.781 4.432m5.995.55.695-3.94a1.5 1.5 0 1 0-2.955-.52m2.26 4.46-.087.492M15.764 6.23l-.78 4.432"/> </svg>
  );
};

export default Threefinger5;
