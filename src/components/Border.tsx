type Props = {
  width?: number | string
  height?: number | string
  color?: string
} & React.HTMLAttributes<HTMLDivElement>

export function Border({ width, height, color, ...rest }: Props) {
  return <div {...rest} style={{ width, height, backgroundColor: color, ...rest.style }} />
}
