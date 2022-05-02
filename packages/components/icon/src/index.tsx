import React, { useState, useEffect } from 'react';
import IconPark from '@icon-park/react/es/all';
import type { IconIProps } from './index.d';
import classNames from 'classnames';
const Icon = (props: IconIProps) => {
    const {
        type = '',
        theme = 'outline',
        spin = false,
        size = '1em',
        strokeLinecap = 'round',
        strokeLinejoin = 'round',
        strokeWidth = 4,
        fill = 'currentColor',
        loading = false,
    } = props;
    return (
        (loading || !!type) && (
            <span
                className={classNames(['h-icon', { 'is-loading': loading }])}
                style={{ width: size, height: size }}
            >
                <IconPark
                    type={loading ? 'loading-four' : type}
                    theme={theme}
                    spin={spin}
                    size={size}
                    strokeLinecap={strokeLinecap}
                    strokeLinejoin={strokeLinejoin}
                    strokeWidth={strokeWidth}
                    fill={fill}
                />
            </span>
        )
    );
};

export default Icon;
