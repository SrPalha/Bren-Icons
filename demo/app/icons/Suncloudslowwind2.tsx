import React from 'react';
import type { IconProps } from '../types';

const Suncloudslowwind2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 17.658.327-.258c.675-.533 1.47-.533 2.146 0l.254.2c.675.533 1.47.533 2.146 0l.254-.2c.675-.533 1.47-.533 2.146 0l.254.2c.152.12.31.214.473.28m-2 3.72.27-.2c.718-.533 1.563-.533 2.28 0l.27.2c.718.533 1.564.533 2.282 0l.27-.2c.717-.533 1.563-.533 2.28 0l.348.258M10 21.6l-.27-.2c-.717-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L2 21.658"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2.96 9.194c-.741-2.722.9-5.52 3.664-6.25m-3.665 6.25L2 9.447m.96-.253c.184.677.498 1.285.908 1.806m2.756-8.055L6.367 2m.257.945A5.23 5.23 0 0 1 12 4.67m-8.524.653-1.012-.577m8.677-2.289-.584.998"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 10.9h.022c2.485 0 4.5 1.982 4.5 4.426 0 1.168-.46 2.383-1.21 3.174m-3.312-7.6a5.67 5.67 0 0 0 .022-.491C17.5 7.422 15.038 5 12 5 9.123 5 6.762 7.172 6.52 9.94m10.958.96a5.338 5.338 0 0 1-1.235 2.951M6.52 9.94C3.984 10.177 2 12.278 2 14.835c0 1.375.574 2.773 1.5 3.665m3.02-8.56a5.033 5.033 0 0 1 3.48.96"/> </svg>
  );
};

export default Suncloudslowwind2;
