"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

const EMPHASIS_IDLE_MS = 500;

interface GalleryNavState {
  ready: boolean;
  percent: number;
  emphasized: boolean;
  setProgress: (loaded: number, total: number) => void;
  setReady: () => void;
  emphasize: () => void;
  reset: () => void;
}

const GalleryNavContext = createContext<GalleryNavState | null>(null);

export function GalleryNavProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(1);
  const [ready, setReadyState] = useState(false);
  const [emphasized, setEmphasized] = useState(false);
  const emphasisTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const percent = Math.round((loaded / total) * 100);

  const setProgress = useCallback((l: number, t: number) => {
    setLoaded(l);
    setTotal(t);
  }, []);

  const setReady = useCallback(() => {
    setReadyState(true);
    if (emphasisTimerRef.current) clearTimeout(emphasisTimerRef.current);
    setEmphasized(false);
  }, []);

  const emphasize = useCallback(() => {
    setEmphasized(true);
    if (emphasisTimerRef.current) clearTimeout(emphasisTimerRef.current);
    emphasisTimerRef.current = setTimeout(() => {
      setEmphasized(false);
    }, EMPHASIS_IDLE_MS);
  }, []);

  const reset = useCallback(() => {
    if (emphasisTimerRef.current) clearTimeout(emphasisTimerRef.current);
    setLoaded(0);
    setTotal(1);
    setReadyState(false);
    setEmphasized(false);
  }, []);

  return (
    <GalleryNavContext.Provider value={{ ready, percent, emphasized, setProgress, setReady, emphasize, reset }}>
      {children}
    </GalleryNavContext.Provider>
  );
}

export function useGalleryNav(): GalleryNavState {
  const ctx = useContext(GalleryNavContext);
  if (!ctx) throw new Error("useGalleryNav must be used inside GalleryNavProvider");
  return ctx;
}
