import React from 'react';
import type { IconProps } from '../types';

const Searchfocus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5 22 22"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.492 7.5c-.716.043-1.172.163-1.5.491-.33.329-.449.785-.492 1.501M12.508 7.5c.716.043 1.172.163 1.5.491.33.329.449.785.492 1.501m-.008 3.13c-.049.651-.173 1.076-.483 1.387-.329.328-.785.448-1.501.491m-3.016 0c-.716-.043-1.172-.163-1.5-.491-.311-.311-.435-.736-.484-1.388"/> </svg>
  );
};

export default Searchfocus;
