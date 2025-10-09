import { ElementType } from 'react'

type Props<As extends ElementType = 'div'> = {
  as?: As
} & React.ComponentProps<As>

export function Box<As extends ElementType = 'div'>({ as, children, ...rest }: Props<As>) {
  const Comp = as || 'div'
  return <Comp {...rest}>{children}</Comp>
}

Box.displayName = 'Box'
