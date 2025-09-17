import { Fragment, type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <Fragment>
      <div className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.3)]" onClick={onClose} />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div
          className="relative bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-3xl shadow-lg pointer-events-auto"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {children}
        </div>
      </div>
    </Fragment>,
    document.body,
  );
}
