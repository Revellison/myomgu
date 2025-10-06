import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import UserCard from './components/Header/UserCard/UserCard'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <UserCard/>
  </StrictMode>,
)
