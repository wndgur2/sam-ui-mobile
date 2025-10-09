type Props<As extends React.ElementType = 'div'> = {
  as?: As
} & React.ComponentProps<As>

export function Box<As extends React.ElementType = 'div'>({ as, children, ...rest }: Props<As>) {
  const Comp = as || 'div'
  return <Comp {...rest}>{children}</Comp>
}

Box.displayName = 'Box'
