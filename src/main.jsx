import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import UserCard from './components/home/UserCard/UserCard'
import Watermark from './components/Watermark/Watermark'
import ClassCard from './components/home/ClassCard/ClassCard'
import './index.css'


function updateTheme() {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const msThemeMeta = document.querySelector('meta[name="msapplication-navbutton-color"]');
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (darkQuery.matches) {
    themeColorMeta.setAttribute('content', '#121212');
    if (msThemeMeta) {
      msThemeMeta.setAttribute('content', '#121212');
    }
    document.documentElement.style.setProperty('--status-bar-bg', '#121212');
  } else {
    themeColorMeta.setAttribute('content', '#FEFEFE');
    if (msThemeMeta) {
      msThemeMeta.setAttribute('content', '#FEFEFE');
    }
    document.documentElement.style.setProperty('--status-bar-bg', '#FEFEFE');
  }
}

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
updateTheme();
darkQuery.addEventListener('change', updateTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <UserCard/>
    <ClassCard/>
    <Watermark/>
  </StrictMode>,
)