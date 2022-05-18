import type {
    MouseEventHandler,
    ReactNode,
    Component,
    RefAttributes,
    ForwardRefExoticComponent,
} from 'react';
import ButtonGroup from '../../button-group/src';
export interface ButtonIProps {
    type?: 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger';
    size?: 'mini' | 'small' | 'medium' | 'large';
    text?: boolean;
    loading?: boolean;
    round?: boolean;
    circle?: boolean;
    dashed?: boolean;
    solid?: boolean;
    block?: boolean;
    disabled?: boolean;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    plain?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    icon?: Component;
}
