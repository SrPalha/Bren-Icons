import React from 'react';
import type { IconProps } from '../types';

const Directions02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.196 3.2c-.475-.59-.712-.885-1.036-1.043C16.835 2 16.465 2 15.723 2H13.61c-.758 0-1.138 0-1.373.244C12 2.488 12 2.881 12 3.667V7h3.723c.742 0 1.112 0 1.437-.157.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067 0-.302-.205-.557-.616-1.067l-.188-.234Zm0 9c-.475-.59-.712-.885-1.036-1.043C16.835 11 16.465 11 15.723 11H12v5h3.723c.742 0 1.112 0 1.437-.157.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067 0-.302-.205-.557-.616-1.067l-.188-.234Zm-12.392-4c.475-.59.712-.885 1.036-1.043C7.165 7 7.535 7 8.277 7H12v5H8.277c-.742 0-1.112 0-1.437-.157-.324-.158-.561-.453-1.036-1.042l-.188-.234C5.206 10.057 5 9.802 5 9.5c0-.302.205-.557.616-1.067l.188-.234ZM12 22V3M9 22h6"/> </svg>
  );
};

export default Directions02;
