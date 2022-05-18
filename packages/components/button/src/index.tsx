import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon';
import type { ButtonIProps } from './index.d';
import ButtonGroup from '../../button-group/src';
const Button = (props: ButtonIProps) => {
    const {
        type = 'default',
        loading = false,
        size = 'medium',
        text = false,
        backgroundColor,
        block = false,
        borderColor,
        circle = false,
        dashed = false,
        disabled = false,
        onClick = () => {},
        plain = false,
        round = false,
        solid = false,
        textColor,
        children,
        icon,
    } = props;
    return (
        <button
            className={classNames([
                'h-button',
                `h-button--${type}`,
                `is-${size}`,
                { 'is-block': block },
                { 'is-round': round },
                { 'is-circle': circle },
                { 'is-text': text },
                { 'is-solid': solid },
                { 'is-dashed': dashed },
                { 'is-disabled': disabled },
            ])}
            onClick={onClick}
            style={{
                color: textColor,
                backgroundColor,
                borderColor,
                boxShadow: plain ? 'none' : '',
            }}
        >
            {loading ? (
                <Icon
                    loading
                    size={20}
                    fill={disabled ? '#aaa' : type && type !== 'default' ? '#fff' : '#000'}
                />
            ) : (
                <span className="h-button__inner">{icon}</span>
            )}
            <span className="h-button__inner">{children}</span>
        </button>
    );
};
Button.Group = ButtonGroup;
Button.displayName = 'Button';
export default Button;

