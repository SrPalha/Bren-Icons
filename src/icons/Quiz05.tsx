import React from 'react';
import type { IconProps } from '../types';

const Quiz05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.5 7.5c0-1.013.896-2 2-2 1.105 0 2 .82 2 1.833 0 .365-.116.705-.316.991C11.586 9.176 10.5 9.987 10.5 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 13.5h.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 19.5c1.05.87 2.315 1.424 3.764 1.519 1.141.075 2.333.075 3.473 0a3.94 3.94 0 0 0 1.188-.268c.41-.167.614-.25.719-.237.104.012.255.122.557.342.533.388 1.204.666 2.2.643.503-.012.755-.019.867-.208.113-.19-.027-.452-.308-.977-.39-.728-.636-1.561-.262-2.229.643-.954 1.19-2.083 1.27-3.303.043-.655.043-1.334 0-1.99A6.679 6.679 0 0 0 20.9 10.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12.236 17.019a6.685 6.685 0 0 0 6.232-6.237c.043-.655.043-1.334 0-1.99a6.685 6.685 0 0 0-6.232-6.236 26.898 26.898 0 0 0-3.472 0 6.686 6.686 0 0 0-6.232 6.237 15.388 15.388 0 0 0 0 1.99c.08 1.22.627 2.349 1.27 3.302.374.668.127 1.501-.262 2.23-.28.524-.42.786-.308.976.113.19.364.195.868.208.995.024 1.666-.255 2.199-.643.302-.22.453-.33.557-.342.104-.013.31.07.72.237.368.15.795.242 1.188.268 1.139.075 2.33.075 3.473 0Z"/> </svg>
  );
};

export default Quiz05;
