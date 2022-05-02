import type { IconType } from '@icon-park/react/es/all';
export interface IconIProps {
    size?: number | string;
    theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color';
    spin?: boolean;
    fill?: string | string[];
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'miter' | 'round' | 'bevel';
    strokeWidth?: number;
    type: IconType;
}
