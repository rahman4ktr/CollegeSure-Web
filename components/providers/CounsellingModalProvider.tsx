"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import CounsellingModal from "@/components/ui/CounsellingModal";

const STORAGE_KEY = "counselling_modal_auto_triggered";
const AUTO_OPEN_DELAY_MS = 5000;

interface OpenOptions {
  topic?: string;
  source?: string;
}

interface CounsellingModalContextType {
  isOpen: boolean;
  defaultTopic: string;
  openModal: (topicOrOptions?: string | OpenOptions) => void;
  openCounselling: (topicOrOptions?: string | OpenOptions) => void;
  closeModal: () => void;
}

const CounsellingModalContext = createContext<CounsellingModalContextType>({
  isOpen: false,
  defaultTopic: "Course Information",
  openModal: () => {},
  openCounselling: () => {},
  closeModal: () => {},
});

export function CounsellingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTopic, setDefaultTopic] = useState("Course Information");

  const openModal = (topicOrOptions?: string | OpenOptions) => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ignore storage errors
      }
    }

    if (typeof topicOrOptions === "string") {
      setDefaultTopic(topicOrOptions);
    } else if (topicOrOptions && typeof topicOrOptions === "object") {
      if (topicOrOptions.topic) setDefaultTopic(topicOrOptions.topic);
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Automatic 15-second session timer logic
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const alreadyTriggered = sessionStorage.getItem(STORAGE_KEY);
      if (alreadyTriggered === "true") {
        return;
      }
    } catch {
      // ignore storage errors
    }

    const timer = setTimeout(() => {
      try {
        const alreadyTriggered = sessionStorage.getItem(STORAGE_KEY);
        if (alreadyTriggered === "true") return;

        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ignore storage errors
      }
      setIsOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CounsellingModalContext.Provider
      value={{
        isOpen,
        defaultTopic,
        openModal,
        openCounselling: openModal,
        closeModal,
      }}
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

export const useCounselling = useCounsellingModal;
