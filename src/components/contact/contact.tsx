"use client";

import { XIcon } from "@/assets/x-icon";
import { Modal, useModal } from "@/components/modal";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "../button";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  const { isModalOpen } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal>
          <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onError={() => {}}
          >
            <ContactForm />
          </ErrorBoundary>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export const FallbackComponent = () => {
  const { hideModal } = useModal();

  return (
    <div className="fixed inset-0 bg-neutral-700/80 z-50 grid items-center p-4">
      <div className="p-4 pb-8 rounded-xl bg-neutral-700 w-full max-w-[700px] mx-auto drop-shadow-lg shadow-neutral-100 border border-neutral-400/80 max-h-screen overflow-auto text-center">
        <div className="flex justify-end">
          <Button
            onClick={hideModal}
            className="bg-neutral-400 p-3 rounded-md hover:bg-neutral-300"
            aria-label="Close modal"
            title="Close modal"
          >
            <XIcon width={14} height={14} />
          </Button>
        </div>
        <h2 className="text-3xl font-black font-suwannaphum mb-3">
          Oops! Something went wrong
        </h2>
        <span className="text-secondary-300 font-medium">
          It looks like something went wrong while trying to submit your
          message. Please try again later, or reach out to us directly at
          <strong className="font-bold ml-2 text-primary-100">
            sales@Helpnode.ai
          </strong>
        </span>
      </div>
    </div>
  );
};
