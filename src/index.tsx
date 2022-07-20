import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'App'
import { store } from 'redux/store'
import Global from 'styles/Global.styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <>
        <Global />
        <App />
      </>
    </Provider>
  </Router>
)
