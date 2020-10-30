import React, {Component} from 'react'
import {Grommet, Heading} from 'grommet'
import Calculator from './Calculator'

class App extends Component{
  render(){
    return(
      <>
        <Heading >Calculator</Heading>
        <Calculator/>
      </>
    )
  }
}

export default App;
