import React from 'react'
import { StyledButton } from './components/Button.style'
import { AppContainer } from './components/Container.style'
import { GlobalStyles } from './GlobalStyles.style'

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton backgroundColor="red" buttonLabel="Red" />
      <StyledButton backgroundColor="blue" buttonLabel="Blue" />
      <StyledButton backgroundColor="yellow" buttonLabel="Yellow" />


    </AppContainer>
  )
}

export default App
