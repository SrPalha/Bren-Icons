import React from 'react';
import type { IconProps } from '../types';

const Earth: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.99-7.132M12 22c-.963-.714-.81-1.544-.326-2.375.743-1.278.743-1.278.743-2.98 0-1.704 1.012-2.502 4.583-1.788 1.605.321 2.774-1.896 4.857-1.164M12 22c4.946 0 9.053-3.59 9.857-8.307M4.99 4.868c.85.09 1.325.545 2.115 1.38 1.5 1.584 2.999 1.716 3.998 1.188 1.5-.793.24-2.076 2-2.773 1.079-.427 1.284-1.547.774-2.487M4.99 4.868A9.968 9.968 0 0 1 12 2c.641 0 1.269.06 1.877.176m7.98 11.517c.094-.55.143-1.116.143-1.693 0-4.881-3.498-8.946-8.123-9.824"/> </svg>
  );
};

export default Earth;
