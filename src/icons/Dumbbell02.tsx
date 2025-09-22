import React from 'react';
import type { IconProps } from '../types';

const Dumbbell02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M16 8a2.624 2.624 0 0 1-1.455 1.608c-2.28 1.01-3.927 2.656-4.937 4.937A2.624 2.624 0 0 1 8 16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.2 20.8 2 22M20.8 3.2 22 2m-4.212.421-1.512 1.453 3.84 3.877 1.478-1.435c.444-.522.58-.916.027-1.64l-1.105-1.164-1.121-1.105c-.717-.643-1.282-.297-1.607.014Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.011 3.757c1.111-1.174 1.872-.339 2.262.126l3.808 3.823c.474.38 1.34 1.11.195 2.244-.185.184-.366.375-.567.54-.742.61-1.454.105-1.831-.36l-3.876-3.876c-.408-.366-1.113-1.03-.518-1.918.16-.205.349-.39.527-.58ZM4.587 21.62l-1.14-1.129-1.085-1.142c-.643-.643-.272-1.286.046-1.606L3.89 16.26l3.856 3.874-1.518 1.49c-.53.434-.895.567-1.608 0m1.603-7.7c-.39-.465-1.15-1.3-2.262-.126-.178.189-.366.374-.527.579-.595.888.11 1.552.518 1.918l3.876 3.876c.377.465 1.089.971 1.83.36.202-.165.383-.356.568-.54 1.146-1.135.279-1.864-.195-2.244l-3.808-3.822Z"/> </svg>
  );
};

export default Dumbbell02;
