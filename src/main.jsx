import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router  } from 'react-router-dom'
import ShopContextProvider from './ShopContext.jsx'

createRoot(document.getElementById('root')).render(
<ShopContextProvider>
<Router>
<App />
</Router>
</ShopContextProvider>
  
)
