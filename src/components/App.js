import React, {Component} from 'react'
import {Heading} from 'grommet'
import Calculator from './Calculator'
import EquationsList from './EquationsList'

class App extends Component{
  render(){
    return(
      <>
        <Heading >Calculator</Heading>
        <Calculator/>
        <EquationsList/>
      </>
    )
  }
}

export default App;
