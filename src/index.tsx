import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <App task='buy food stuff' deadline={4} />
  </React.StrictMode>,
  document.getElementById('root')
)
