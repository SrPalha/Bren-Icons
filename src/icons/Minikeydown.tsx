import React from 'react';
import type { IconProps } from '../types';

const Minikeydown: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="minikeydown">     <g class="minikeydown">       <path fill="#1B1C1B" d="M15.2965 10.0974c.2223.1638.2698.4768.106.6991-.1272.1727-.2544.3369-.366.4799-.2227.2854-.5293.6677-.8625 1.0514-.331.3812-.6981.7754-1.0407 1.0782-.1708.1508-.3473.2896-.5194.3933-.1583.0955-.3759.2007-.614.2007-.238 0-.4557-.1052-.614-.2007-.1721-.1037-.3486-.2425-.5193-.3933-.3426-.3028-.7097-.697-1.04069-1.0782-.33317-.3837-.63983-.766-.86259-1.0514-.11159-.143-.23881-.3072-.36601-.4799-.16375-.2223-.11626-.5353.10609-.6991.08938-.0658.19341-.09748.29651-.0974H15c.1031-.00008.2071.0316.2965.0974Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Minikeydown;
