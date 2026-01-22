"use client";

import { useEffect } from "react";

export default function PWAScript() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch((error) => {
          console.log("ServiceWorker registration failed: ", error);
        });
      });
    }
  }, []);

  return null;
}
