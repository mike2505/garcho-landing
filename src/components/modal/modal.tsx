"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModal } from "./contexts/modal-context";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, hideModal } = useModal();

  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocusedElement.current = document.activeElement as HTMLElement;

    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hideModal();
      } else if (event.key === "Tab") {
        if (focusableElements && focusableElements.length > 0) {
          if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (firstElement) {
      firstElement.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    };
  }, [hideModal]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-neutral-700/80 z-50 grid items-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) hideModal();
      }}
      ref={modalRef}
    >
      {children}
    </motion.div>,
    document.body,
  );
};
