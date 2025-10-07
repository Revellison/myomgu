import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import UserCard from './components/UserCard/UserCard'
import './index.css'

const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateThemeColor(e) {
  if (e.matches) {
    themeColorMeta.setAttribute('content', '#191919'); 
  } else {
    themeColorMeta.setAttribute('content', '#FEFEFE'); 
  }
}

updateThemeColor(darkQuery);
darkQuery.addEventListener('change', updateThemeColor);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <UserCard/>
  </StrictMode>,
)
