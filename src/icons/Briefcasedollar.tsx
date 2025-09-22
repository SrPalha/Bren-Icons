import React from 'react';
import type { IconProps } from '../types';

const Briefcasedollar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 14c0-3.507 0-5.26.908-6.44.166-.216.352-.414.554-.592C4.57 6 6.212 6 9.5 6h5c3.288 0 4.931 0 6.038.968.202.178.388.376.554.592C22 8.74 22 10.493 22 14c0 3.507 0 5.26-.908 6.44a4.147 4.147 0 0 1-.554.591C19.43 22 17.788 22 14.5 22h-5c-3.287 0-4.931 0-6.038-.968a4.146 4.146 0 0 1-.554-.592C2 19.26 2 17.507 2 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 11c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 11v-1m0 7c-.87 0-1.612-.417-1.886-1M12 17v1m-6-6H2m20 0h-4"/> </svg>
  );
};

export default Briefcasedollar;
