"use client";
import { useEffect, useState } from "react";

export default function Loader({ onDone }: { onDone?: () => void }) {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 900);
    const t2 = setTimeout(() => {
      setGone(true);
      onDone?.();
    }, 1420);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div id="loader" className={hide ? "hide" : ""}>
      <span className="mono name">YASH RAJAK</span>
      <span className="mono sub">SOFTWARE ENGINEER — MUMBAI / INDIA</span>
    </div>
  );
}
