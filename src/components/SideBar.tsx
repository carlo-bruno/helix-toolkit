"use client";

import Logo from "./Logo";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: icons, animations

  return (
    <div className=" bg-gray-500 min-h-screen shrink-0 px-4 absolute top-0 left-0 border-r-4 border-orange-400">
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "◀" : "▶"} </button>
      <Logo isOpen={isOpen} />

      <div className={isOpen ? "w-50" : "w-0 hidden"}>
        <p> Footswitch View</p>
        <p> Preset Diff</p>
        <p>Block Pastebin</p>
        <p>Tuner</p>
      </div>
    </div>
  );
}
