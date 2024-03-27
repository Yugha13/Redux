import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserReducer from './features/User.tsx'
import ThemeReducer from './features/Color.tsx'

//to init all state in store
import { configureStore } from '@reduxjs/toolkit'

// like parent component, it will provide states to its child.
import { Provider } from 'react-redux'


const store = configureStore({
  reducer : {
    user : UserReducer,
    theme : ThemeReducer
  }  // to handle every state seperately
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)
