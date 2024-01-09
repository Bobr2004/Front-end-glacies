// Aboba.js
import ContextMenu from './ContextMenu.jsx';
import React, { useState } from 'react';
import "./page.css";

const Aboba = () => {
//   const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [isContextMenuOpen, setContextMenuOpen] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuOpen(true);
  };

  const closeContextMenu = () => {
    setContextMenuOpen(false);
  };

  return (
    <div className='aboba' onContextMenu={handleContextMenu}>
      <button>something</button>

      {isContextMenuOpen && (
        <ContextMenu onClose={closeContextMenu} />
      )}
    </div>
  );
};

export default Aboba;
