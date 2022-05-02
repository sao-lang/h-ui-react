import React from 'react';
import IconPark from '@icon-park/react/es/all';
import type { IconIProps } from './index.d';
const Icon = (props: IconIProps) => {
    const { type, theme, spin, size, strokeLinecap, strokeLinejoin, strokeWidth, fill } = props;
    return (
        <IconPark
            type={type}
            theme={theme ?? 'outline'}
            spin={spin ?? false}
            size={size || '1em'}
            strokeLinecap={strokeLinecap ?? 'round'}
            strokeLinejoin={strokeLinejoin ?? 'round'}
            strokeWidth={strokeWidth ?? 4}
            fill={fill ?? 'currentColor'}
        />
    );
};

export default Icon;
