import React from 'react';
import type { IconProps } from '../types';

const Diningtable: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 4-.504.961C19.812 6.267 18.883 7 17.916 7H7.084c-.968 0-1.897-.733-2.581-2.039L4 4M2 4h20M5 20h.869c.297 0 .446 0 .589-.02a2 2 0 0 0 .91-.378c.116-.086.221-.191.432-.402.316-.316.474-.474.647-.603.4-.3.87-.495 1.366-.566.214-.031.437-.031.884-.031h2.606c.447 0 .67 0 .884.03a3 3 0 0 1 1.366.567c.173.13.331.287.647.603.21.21.316.316.431.402a2 2 0 0 0 .911.377c.143.021.291.021.59.021H19m-9-2 .206-1.03c.127-.635.19-.953.394-1.164a1.02 1.02 0 0 1 .18-.148c.247-.158.571-.158 1.22-.158s.973 0 1.22.158c.065.042.126.092.18.148.203.21.267.529.394 1.165L14 18M10 7l.206 1.03c.127.635.19.953.394 1.164.054.056.115.106.18.148.247.158.571.158 1.22.158s.973 0 1.22-.158a1.02 1.02 0 0 0 .18-.148c.203-.21.267-.529.394-1.165L14 7m-2 8.5v-6"/> </svg>
  );
};

export default Diningtable;
