import React from 'react';
import type { IconProps } from '../types';

const Minikeyup: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="minikeyup">     <g class="minikeyup">       <path fill="#1B1C1B" d="M15.2965 13.9026c.2223-.1638.2698-.4768.106-.6991-.1272-.1727-.2544-.3369-.366-.4799-.2227-.2854-.5293-.6677-.8625-1.0514-.331-.3812-.6981-.7754-1.0407-1.0781-.1708-.1509-.3473-.2897-.5194-.3934-.1583-.0955-.3759-.2007-.614-.2007-.238 0-.4557.1052-.614.2007-.1721.1037-.3486.2425-.5193.3934-.3426.3027-.7097.6969-1.04069 1.0781-.33317.3837-.63983.766-.86259 1.0514-.11159.143-.23881.3072-.36601.4799-.16375.2223-.11626.5353.10609.6991.08938.0658.19341.0975.29651.0974H15c.1031.0001.2071-.0316.2965-.0974Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Minikeyup;
