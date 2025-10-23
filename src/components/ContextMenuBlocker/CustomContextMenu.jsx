
import React from 'react';

const menuStylesBase = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  zIndex: 10000,
  background: 'var(--background-transparent)',
  backdropFilter: 'blur(5px)',
  color: 'white',
  borderRadius: '20px',
  padding: '10px 0',
  width: '300px',
  height: '350px',
  listStyle: 'none',
  margin: 0,
  transition: 'opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s',
};

const itemStyles = {
  padding: '10px 15px 10px 15px',
  cursor: 'pointer',
  transition: 'background 0.1s',
};



const CustomContextMenu = ({ isVisible, x, y, linkData, onClose }) => {
const fadeOutStyles = {
    opacity: 0,
    visibility: 'hidden',
    transform: 'translate(-50%, -45%) scale(0.95)',
    pointerEvents: 'none',
  };

  const fadeInStyles = {
    opacity: 1,
    visibility: 'visible',
    transform: 'translate(-50%, -50%) scale(1)',
    pointerEvents: 'auto',
    transition: 'all 0.45s ease',
  };

  const finalMenuStyles = {
    ...menuStylesBase,
    ...(isVisible ? fadeInStyles : fadeOutStyles),
  };
  

  
  const menuItems = [
    { label: 'Открыть в новой вкладке', action: 'open_new' },
    { label: 'Открыть в режиме инкогнито', action: 'open_incognito' },
    { label: 'Копировать адрес ссылки', action: 'copy_url' },
    { label: 'Поделиться ссылкой', action: 'share' },
  ];

  const handleAction = (action) => {
    console.log(`Выбрано действие: ${action}`);
    console.log(`Данные ссылки:`, linkData);
    onClose();
  };

  
  return (
    <ul 
      style={finalMenuStyles}
      onClick={(e) => e.stopPropagation()} 
    >
      <li style={{ ...itemStyles, cursor: 'default' }}>
        <div style={{ fontSize: '0.8em', color: 'var(--color)' }}>{linkData.href || 'Нет адреса'}</div>
      </li>

      {menuItems.map(item => (
        <li
          key={item.action}
          style={itemStyles}
          onClick={() => handleAction(item.action)}
          onMouseEnter={(e) => e.currentTarget.style.background = '#505050'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default CustomContextMenu;