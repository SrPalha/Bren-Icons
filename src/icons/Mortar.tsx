import React from 'react';
import type { IconProps } from '../types';

const Mortar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4.963 12h14.074c.977 0 1.466 0 1.768.375.302.376.209.787.023 1.609a9.015 9.015 0 0 1-4.075 5.676c-.392.24-.559.738-.347 1.144A.82.82 0 0 1 15.674 22H8.326a.82.82 0 0 1-.732-1.196c.212-.406.045-.903-.347-1.144a9.015 9.015 0 0 1-4.075-5.676c-.186-.822-.279-1.233.023-1.609C3.497 12 3.985 12 4.963 12Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m17.459 12 1.55-3.719c.175-.419.606-.629 1.038-.701.374-.062.672-.239.831-.527.397-.718-.21-1.859-1.355-2.55-1.146-.69-2.397-.668-2.793.05-.16.288-.157.646-.022 1.015.156.427.197.92-.063 1.288L13 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.502 5.502 10 9M8.6 3.403c1.546 1.546 1.16 3.039 0 4.198-1.158 1.159-2.651 1.545-4.197 0-1.546-1.546-1.4-5.597-1.4-5.597s4.052-.147 5.598 1.399Z"/> </svg>
  );
};

export default Mortar;
