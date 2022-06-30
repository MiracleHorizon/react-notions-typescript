import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'App'
import { Global } from 'styles/Global.styles'
import { store } from 'redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <Fragment>
        <Global />
        <App />
      </Fragment>
    </Provider>
  </Router>
)

// <React.StrictMode>
// <App />
// </React.StrictMode>
