import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // What is strict mode? https://reactjs.org/docs/strict-mode.html We're disabling it for now as the double logs are distracting during lecture
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
