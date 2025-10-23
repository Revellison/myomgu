import React, { useEffect, useState, useCallback } from 'react';
import CustomContextMenu from './CustomContextMenu';

const MOBILE_WIDTH = 768; 

const ContextMenuBlocker = ({ children }) => {
  const [menuState, setMenuState] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    linkData: { href: '', text: '' }
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

  const updateMedia = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [updateMedia]);

  const hideMenu = useCallback(() => {
    setMenuState(prev => ({ ...prev, isVisible: false }));
  }, []);

  const showMenu = useCallback((e) => {
    if (!isMobile) {
        return; 
    }
    
    e.preventDefault();

    const linkElement = e.target.closest('a');

    if (!linkElement) {
        hideMenu(); 
        return;
    }

    const linkData = {
        href: linkElement.href || '',
    };
    
    setMenuState({
      isVisible: true,
      x: e.clientX, 
      y: e.clientY,
      linkData: linkData,
    });
  }, [hideMenu, isMobile]);


  useEffect(() => {
    document.addEventListener('contextmenu', showMenu);

    document.addEventListener('click', hideMenu);

    return () => {
      document.removeEventListener('contextmenu', showMenu);
      document.removeEventListener('click', hideMenu);
    };
  }, [showMenu, hideMenu]);

  return (
    <>
      {children}
      <CustomContextMenu 
        isVisible={menuState.isVisible}
        x={menuState.x} 
        y={menuState.y} 
        linkData={menuState.linkData}
        onClose={hideMenu}
      />
    </>
  );
};

export default ContextMenuBlocker;