import { ElementType } from 'react';

type Props<As extends ElementType = 'div'> = {
    as?: As;
} & React.ComponentProps<As>;
export declare function Box<As extends ElementType = 'div'>({ as, children, ...rest }: Props<As>): import("react/jsx-runtime").JSX.Element;
export declare namespace Box {
    var displayName: string;
}
export {};
