"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import CounsellingModal from "@/components/ui/CounsellingModal";

const STORAGE_KEY = "counselling_modal_auto_triggered";
const AUTO_OPEN_DELAY_MS = 30000;

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

  // Global 5-scheduled popups from initial website entry
  // Popup 1 -> 30 sec (30,000 ms)
  // Popup 2 -> 1 min 30 sec (90,000 ms)
  // Popup 3 -> 3 min (180,000 ms)
  // Popup 4 -> 4 min 30 sec (270,000 ms)
  // Popup 5 -> 6 min (360,000 ms)
  useEffect(() => {
    const popupSchedule = [30_000, 90_000, 180_000, 270_000, 360_000];
    const timers: NodeJS.Timeout[] = [];

    popupSchedule.forEach((delay) => {
      const timer = setTimeout(() => {
        setIsOpen((prev) => {
          if (prev) {
            // If modal is already open, keep open without stacking/resetting
            return true;
          }
          return true;
        });
      }, delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
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
