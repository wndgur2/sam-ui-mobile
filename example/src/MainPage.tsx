import { GridBox, GridCell, useModal } from 'sam-ui-mobile'

function MainPage() {
  const { openModal } = useModal()
  const onClick = () => {
    console.log('onClick')
    openModal(
      <div style={{ backgroundColor: '#ffffff', padding: 320 }}>
        Hello!
        <button onClick={onClick}>Click me</button>
      </div>
    )
  }
  return (
    <GridBox columns="2fr 1fr" gap={10}>
      <GridCell column="1/3" style={{ backgroundColor: 'lightgrey' }}>
        Header
      </GridCell>
      <GridCell column="1/2" style={{ backgroundColor: 'lightgrey' }}>
        <div style={{ backgroundColor: 'skyblue' }}>hasdasello</div>
      </GridCell>
      <GridCell column="2/3" style={{ backgroundColor: 'lightgrey' }}>
        <button onClick={onClick}>Click me</button>
      </GridCell>
      <GridCell column="1/3" style={{ backgroundColor: 'lightgrey' }}>
        Footer
      </GridCell>
    </GridBox>
  )
}

export default MainPage
