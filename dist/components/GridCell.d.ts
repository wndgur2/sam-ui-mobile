type Props = {
    column?: number | string;
    row?: number | string;
    area?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function GridCell({ column, row, area, children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace GridCell {
    var displayName: string;
}
export {};
