type Props = {
  column?: number | string
  row?: number | string
  area?: string
} & React.HTMLAttributes<HTMLDivElement>

export function GridCell({ column, row, area, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      style={{
        gridColumn: column,
        gridRow: row,
        gridArea: area,
        ...rest.style,
      }}
    >
      {children}
    </div>
  )
}

GridCell.displayName = 'GridCell'
