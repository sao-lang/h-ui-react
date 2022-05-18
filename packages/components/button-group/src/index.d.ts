import type {ReactNode} from 'react';
export interface ButtonGroupIProps {
    direction?: 'horizental' | 'vertical';
    size?: 'mini' | 'small' | 'medium' | 'large';
    circle?: boolean;
    bordered?: boolean;
    type?: 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger';
    children?: ReactNode;
}
