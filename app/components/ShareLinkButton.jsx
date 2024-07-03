"use client";

import { setSourceMapsEnabled } from "process";
import { useState } from "react";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 hove:bg-orange-100 hover:text-slate-700 rounded text-slate-500 text-sm"
    >
      {clicked ? "Link copied" : "Share link"}
    </button>
  );
}
