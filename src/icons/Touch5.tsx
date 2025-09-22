import React from 'react';
import type { IconProps } from '../types';

const Touch5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.99 22-.047-.772-.175-.745c-.552-2.185-1.324-2.427-2.552-3.993-.555-.707-1.556-1.668-2.503-3.021-.632-.902.154-3.058 2.075-2.433.32.104.588.313.826.542l1.863 1.89c-.015-2.532.02-8.515-.02-10.097-.042-1.582 2.827-2.09 2.997.072v5.594m0 0v.938m0-.938c.938-1.19 2.713-1.231 2.972.76m0 0c.042.324.045.703 0 1.14m0-1.14c.474-1.391 2.633-.847 3.047.772m0 0c.099.384-.04.885 0 1.398m0-1.398c.27-.78 3.293-.74 3.01 2.274l-.036 2.705c0 1.605-.214 2.35-.827 3.139-.226.291-.54.583-.759.902a2.1 2.1 0 0 0-.329.838c-.066.415-.075.99-.055 1.542"/> </svg>
  );
};

export default Touch5;
