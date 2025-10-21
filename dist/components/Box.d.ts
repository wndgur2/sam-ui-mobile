type Props<As extends React.ElementType = 'div'> = {
    as?: As;
} & React.ComponentProps<As>;
export declare function Box<As extends React.ElementType = 'div'>({ as, children, ...rest }: Props<As>): import("react/jsx-runtime").JSX.Element;
export declare namespace Box {
    var displayName: string;
}
export {};
