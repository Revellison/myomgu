import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import UserCard from './components/UserCard/UserCard'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <UserCard/>
  </StrictMode>,
)
