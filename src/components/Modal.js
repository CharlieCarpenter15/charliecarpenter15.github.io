import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = 'auto';
  };

  // This would be used by other components via context or refs
  React.useEffect(() => {
    window.openModal = openModal;
    window.closeModal = closeModal;
  }, []);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} id="modalOverlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" id="modalClose" onClick={closeModal}>&times;</button>
        <div className="modal-content" id="modalContent">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal; 