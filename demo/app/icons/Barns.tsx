import React from 'react';
import type { IconProps } from '../types';

const Barns: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.363 6.296-1.018 2.31c-.172.39-.258.585-.301.792C3 9.606 3 9.818 3 10.246v9.736c0 .951 0 1.427.293 1.723C3.586 22 4.057 22 5 22h14c.943 0 1.414 0 1.707-.296.293-.295.293-.77.293-1.722V9.837c0-.474 0-.711-.053-.94-.054-.228-.16-.44-.37-.864l-.922-1.862c-.324-.654-.486-.98-.744-1.226s-.591-.39-1.258-.678l-4.077-1.763C12.799 2.168 12.41 2 12 2c-.41 0-.799.168-1.576.504L6.442 4.226c-.712.308-1.069.462-1.338.73-.269.268-.426.625-.741 1.34ZM7 22v-9m10 0v9M7 13l10 9M7 22l10-9M3 13h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Barns;
