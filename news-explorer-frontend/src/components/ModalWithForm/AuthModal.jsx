import { useEffect } from "react";
import { createPortal } from "react-dom";

const AuthModal = ({ title, children, onClose, isOpen }) => {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} />
        <div className="modal-box">
          <h4 className="auth-form__title">{title}</h4>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default AuthModal;
