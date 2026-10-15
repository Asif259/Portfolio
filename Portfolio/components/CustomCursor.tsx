"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Only activate for fine pointer (mouse/trackpad) and not reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    const onPointerMove = (e: PointerEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "1";
    };

    const onPointerLeave = () => {
      cursor.style.opacity = "0";
    };

    const onPointerEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerenter", onPointerEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerenter", onPointerEnter);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="custom-cursor"
      aria-hidden="true"
    />
  );
}
