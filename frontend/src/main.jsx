import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import SparklingText from './components/ui/sparklingText.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    
    </Router>
  </StrictMode>,
)