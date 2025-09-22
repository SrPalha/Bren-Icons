import React from 'react';
import type { IconProps } from '../types';

const Bodyweight: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.002 14.003v-1.64m0 1.64c-1.667 0-3.333-.182-4.999-.546m4.999.546c1.666 0 3.333-.182 5-.546m-9.999 0a26.091 26.091 0 0 1-3.824-1.158c-.51-.196-.765-.295-.94-.52-.29-.374-.237-.895-.237-1.34 0-1.233 0-2.851.3-3.173.57-.61 1.657-.048 2.29.157 4.94 1.602 9.88 1.602 14.82 0 .632-.205 1.72-.766 2.289-.157.3.322.3 1.94.3 3.173 0 .618 0 .927-.135 1.183-.21.392-.65.527-1.041.678a26.098 26.098 0 0 1-3.823 1.156m-9.999 0-.001-1.641m10 1.642v-1.642m2 7.195c-4.667 1.336-9.333 1.336-14 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.19 2.998c-.576 1.311-1.107 3.56-1.107 4.59M4.815 2.998c.577 1.311 1.107 3.56 1.107 4.59m-.523 7.923c-.44 1.38-1.599 4.11-1.395 5.492m14.61-5.492c.439 1.38 1.598 4.11 1.395 5.492"/> </svg>
  );
};

export default Bodyweight;
