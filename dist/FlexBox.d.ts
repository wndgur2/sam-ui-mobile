type Props = {
    direction?: 'row' | 'column';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: number | string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function FlexBox({ direction, alignItems, justifyContent, flexWrap, gap, children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
