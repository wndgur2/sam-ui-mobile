type Props = {
  height?: number | string
} & React.HTMLAttributes<HTMLDivElement>

export function Spacing({ height = '12px', style, ...rest }: Props) {
  return <div style={{ height, ...style }} {...rest} />
}

Spacing.displayName = 'Spacing'
