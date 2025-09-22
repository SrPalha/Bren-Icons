import React from 'react';
import type { IconProps } from '../types';

const Minimize3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.928 7.781.89.24a1.856 1.856 0 0 1 1.303 2.272m0 0-.239.895m.239-.895a.92.92 0 0 1 1.128-.656 1.856 1.856 0 0 1 1.303 2.271m0 0-.238.896m.238-.896a.78.78 0 0 1 1.077-.511l.291.133a1.858 1.858 0 0 1 1.017 2.168l-.352 1.319c-.518 1.946-.777 2.92-1.278 3.615-.29.403-.894.855-1.364 1.172-.408.274-.72.677-.847 1.153L17.82 22M14.45 9.573 16 3.751a1.392 1.392 0 0 0-.977-1.703 1.381 1.381 0 0 0-1.693.983l-2.375 8.923L9.9 10.109a1.545 1.545 0 0 0-2.267-.477 1.579 1.579 0 0 0-.522 1.848l2.106 4.982c.404.953.413 2.258.147 3.258M6.956 2.49s-.252 2.274 0 2.522m0 0c.326.321 2.602.05 2.602.05m-2.602-.05L10 2M5.044 9.51s.252-2.274 0-2.522m0 0c-.326-.321-2.602-.05-2.602-.05m2.602.05L2 10"/> </svg>
  );
};

export default Minimize3;
