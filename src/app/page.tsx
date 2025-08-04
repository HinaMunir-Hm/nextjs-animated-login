"use client";
import PullToLight from "@/components/animated/PullToLight";
import LoginToggle from "@/components/animated/SignIn";
import { useState } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  const [pull, setPull] = useState(0);
  const [dragging, setDragging] = useState(false);

  const threshold = 10; // how far to pull before light turns on

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    e.preventDefault();
    let y = 0;

    if ("touches" in e) {
      y = Math.min(e.touches[0].clientY -100 , threshold);
    } else {
      y = Math.min(e.movementY + pull, threshold);
    }
    if (y >= 0) setPull(y);
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (pull >= threshold) {
      setEnabled(!enabled);
    }
    setPull(0);
  };
  return (
    <div
      className={`min-h-screen flex flex-col gap-10 items-center transition-colors duration-700 ${
        enabled ? "bg-yellow-50" : "bg-black"
      }`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      style={{ touchAction: "none" }}
    >
      <PullToLight
        enabled={enabled}
        pull={pull}
        dragging={dragging}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
      />
      <LoginToggle enabled={enabled} />
    </div>
  );
}
