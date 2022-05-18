import React from 'react';
import classNames from 'classnames';
import type { ButtonGroupIProps } from './index.d';
const ButtonGroup = (props: ButtonGroupIProps) => {
    const {
        type = 'default',
        size = 'medium',
        circle = false,
        bordered = false,
        direction = 'horizental',
        children,
    } = props;
    return (
        <div
            className={classNames([
                'h-button-group',
                `h-button-group--${type}`,
                `is-${size}`,
                { 'is-circle': circle },
                { 'is-bordered': bordered },
                `is-${direction}`,
            ])}
        >
            {children}
        </div>
    );
};
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;
