type Props = {
    columns?: string;
    rows?: string;
    gap?: string | number;
    columnGap?: string | number;
    rowGap?: string | number;
    areas?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function GridBox({ columns, rows, gap, columnGap, rowGap, areas, children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace GridBox {
    var displayName: string;
}
export {};
