import React from 'react';
import type { IconProps } from '../types';

const Hijab: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 5a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0V8a3 3 0 0 0-3-3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 10c0 2.5-.32 4.4-3.733 6C7.853 17.6 7 19.833 7 21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 8h6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.802 7.519C17.802 4.47 15.204 2 12 2 8.796 2 6.198 4.47 6.198 7.519c0 2.098-.738 5.95-3.14 8.916-.747.923-1.12 1.384-1.05 1.809.072.425.472.685 1.272 1.205 5.236 3.401 12.204 3.401 17.44 0 .8-.52 1.2-.78 1.271-1.205.072-.425-.302-.886-1.05-1.81-2.4-2.965-3.139-6.817-3.139-8.915Z"/> </svg>
  );
};

export default Hijab;
