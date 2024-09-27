'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButton = () => {
    const newTop = Math.random() * 80 + 10 + "%";
    const newLeft = Math.random() * 80 + 10 + "%";
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-8xl animate-spin">sto<span className="text-4xl">X</span>.</h1>
      <button
        className="btn btn-danger"
        style={{ position: "absolute", top: position.top, left: position.left }}
        onMouseEnter={moveButton}
      >
        login
      </button>
    </div>
  );
}