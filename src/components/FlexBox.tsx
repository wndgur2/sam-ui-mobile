type Props = {
  direction?: 'row' | 'column'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: number | string
} & React.HTMLAttributes<HTMLDivElement>

export function FlexBox({
  direction,
  alignItems,
  justifyContent,
  flexWrap,
  gap,
  children,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems,
        justifyContent,
        flexWrap,
        gap,
        ...rest.style,
      }}
    >
      {children}
    </div>
  )
}
