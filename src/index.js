import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Main.css'

import { AppContextProvider  } from './Context/GlobalContext'
import { BookContextProvider } from './Context/BooksContext'
import App from './App'



ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)