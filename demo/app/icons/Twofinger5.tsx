import React from 'react';
import type { IconProps } from '../types';

const Twofinger5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.811 5.71a1.5 1.5 0 1 0-2.954-.522L9.075 9.62l-.928 5.078-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.095c.53.116 1.1.116 2.24.116H14.7a5 5 0 0 0 4.88-3.912l1.312-5.884.087-.493a1.5 1.5 0 1 0-2.955-.52M12.81 5.709l.347-1.97a1.5 1.5 0 0 1 2.955.522l-.868 4.924M12.81 5.709l-.781 4.432m5.995.55.174-.985a1.5 1.5 0 1 0-2.954-.521m2.78 1.505-.086.493m-2.694-1.998-.26 1.477"/> </svg>
  );
};

export default Twofinger5;
