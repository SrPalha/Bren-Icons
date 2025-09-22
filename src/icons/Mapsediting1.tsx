import React from 'react';
import type { IconProps } from '../types';

const Mapsediting1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M18.83 14.254c.298-.323.447-.484.605-.578a1.242 1.242 0 0 1 1.241-.02c.161.09.315.247.622.561.307.314.46.47.548.635.212.397.205.878-.018 1.268-.092.162-.25.314-.566.619L17.5 20.362c-.599.577-.898.865-1.273 1.012-.374.146-.786.135-1.609.113l-.112-.002c-.25-.007-.376-.01-.449-.093-.072-.083-.063-.21-.043-.465l.011-.14c.056-.718.084-1.077.224-1.4.14-.323.383-.585.867-1.11l3.713-4.023Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10.5v-.783c0-1.94 0-2.909-.586-3.512-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.521c-1.391-.696-2.087-1.044-2.828-1.02-.74.024-1.413.417-2.759 1.203l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 6.246 2 6.83 2 7.999v8.217c0 1.535 0 2.303.342 2.73.228.285.547.476.9.54.53.095 1.18-.284 2.478-1.042.882-.515 1.73-1.05 2.785-.905.884.122 1.705.68 2.495 1.075"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 2.5v15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5.5v8"/> </svg>
  );
};

export default Mapsediting1;
