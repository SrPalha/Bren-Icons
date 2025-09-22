import React from 'react';
import type { IconProps } from '../types';

const Minikeyright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="minikeyright">     <g class="minikeyright">       <path fill="#1B1C1B" d="M10.0974 8.70353c.1638-.22235.4768-.26985.6991-.10609.1727.1272.3369.25442.4799.36601.2854.22275.6677.52942 1.0514.86259.3812.33106.7754.69806 1.0782 1.04066.1508.1708.2896.3473.3933.5194.0955.1583.2007.3759.2007.614 0 .238-.1052.4557-.2007.614-.1037.1721-.2425.3486-.3933.5193-.3028.3427-.697.7097-1.0782 1.0407-.3837.3332-.766.6398-1.0514.8626-.143.1116-.3072.2388-.4799.366-.2223.1638-.5353.1163-.6991-.1061-.0658-.0894-.09749-.1934-.0974-.2965V9.00004c-.00008-.1031.0316-.20713.0974-.29651Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Minikeyright;
