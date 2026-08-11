"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CounsellingModal from "@/components/ui/CounsellingModal";

interface CounsellingModalContextType {
  isOpen: boolean;
  defaultTopic: string;
  openModal: (topic?: string) => void;
  closeModal: () => void;
}

const CounsellingModalContext = createContext<CounsellingModalContextType>({
  isOpen: false,
  defaultTopic: "Course Information",
  openModal: () => {},
  closeModal: () => {},
});

export function CounsellingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTopic, setDefaultTopic] = useState("Course Information");

  const openModal = (topic?: string) => {
    if (topic) setDefaultTopic(topic);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <CounsellingModalContext.Provider
      value={{ isOpen, defaultTopic, openModal, closeModal }}
    >
      {children}
      <CounsellingModal
        isOpen={isOpen}
        defaultTopic={defaultTopic}
        onClose={closeModal}
      />
    </CounsellingModalContext.Provider>
  );
}

export function useCounsellingModal() {
  const context = useContext(CounsellingModalContext);
  if (!context) {
    throw new Error(
      "useCounsellingModal must be used within a CounsellingModalProvider"
    );
  }
  return context;
}
