"use client";
import { Achievement } from "@/lib/data";
import { useEffect } from "react";

export default function AchievementModal({
  achievement,
  onClose,
}: {
  achievement: Achievement | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!achievement) return null;

  return (
    <div
      id="modal-backdrop"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
      onClick={onClose}
    >
      <div className="doc" onClick={(e) => e.stopPropagation()}>
        <button className="doc-close" onClick={onClose}>
          Close ✕
        </button>
        <span className="eyebrow" style={{ marginBottom: 22 }}>
          {achievement.rank}
        </span>
        <div className="doc-title">{achievement.title}</div>
        <div className="doc-sub">{achievement.event.split(" — ")[0]}</div>
        <div className="doc-body">{achievement.body}</div>
        <div className="doc-tags">
          {achievement.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
