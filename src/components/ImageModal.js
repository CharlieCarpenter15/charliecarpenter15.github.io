import React, { useState } from 'react';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [caption, setCaption] = useState('');

  const openImageModal = (src, captionText = '') => {
    setImageSrc(src);
    setCaption(captionText);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsOpen(false);
    setImageSrc('');
    setCaption('');
    document.body.style.overflow = 'auto';
  };

  // This would be used by other components via context or refs
  React.useEffect(() => {
    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;
  }, []);

  if (!isOpen) return null;

  return (
    <div className={`image-modal ${isOpen ? 'active' : ''}`} id="imageModal" onClick={closeImageModal}>
      <span className="image-modal-close" id="imageModalClose" onClick={closeImageModal}>&times;</span>
      <img className="image-modal-content" id="imageModalImg" src={imageSrc} alt={caption} />
      {caption && <div className="image-modal-caption" id="imageModalCaption">{caption}</div>}
    </div>
  );
};

export default ImageModal; 