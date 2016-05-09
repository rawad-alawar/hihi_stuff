import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import FrontPage from './components/frontPage.jsx'

//render(<App name='eMazon-Me' />, document.querySelector('main'))
render(<FrontPage name='eMazon-Me' />, document.querySelector('main'))
console.log('welcome to eMazon-Me')
