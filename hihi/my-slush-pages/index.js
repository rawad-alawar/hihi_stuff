import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <h1>{this.props.name} sauce overflowing</h1>
    )
  }
}

render(<App name = 'Hihi'/>, document.querySelector('main'))
