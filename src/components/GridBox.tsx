type Props = {
  columns?: string
  rows?: string
  gap?: string | number
  columnGap?: string | number
  rowGap?: string | number
  areas?: string
} & React.HTMLAttributes<HTMLDivElement>

export function GridBox({
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  areas,
  children,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      style={{
        display: 'grid',
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas,
        gap,
        columnGap,
        rowGap,
        ...rest.style,
      }}
    >
      {children}
    </div>
  )
}

GridBox.displayName = 'GridBox'
