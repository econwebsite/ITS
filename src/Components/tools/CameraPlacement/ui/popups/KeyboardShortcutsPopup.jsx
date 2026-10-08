import React from "react";
import { X } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

const GROUPS = [
  {
    title: "Tool",
    rows: [
      ["S", "Open Autocompute"],
      ["R", "Re-center on road"],
      ["M", "Open the manual"],
      ["T", "Start the guided tour"],
      ["?", "Show / hide this list"],
    ],
  },
  {
    title: "View",
    rows: [
      ["2", "2D plan view"],
      ["3", "3D orbit view"],
      ["F", "Full view"],
      ["B", "Show / hide the controls panel"],
      ["Esc", "Close pop-up / exit full view"],
    ],
  },
  {
    title: "Edit",
    rows: [
      ["Ctrl + Z", "Undo"],
      ["Ctrl + Y", "Redo (or Ctrl + Shift + Z)"],
      ["← → ↑ ↓", "Nudge the focused slider by one step"],
      ["Shift + arrows", "Nudge the focused slider by ten steps"],
    ],
  },
];

const KeyboardShortcutsPopup = () => {
  const { shortcutsOpen, setShortcutsOpen } = usePlacement();
  return (
    <div
      className={`cp-solver-modal cp-keys-modal${shortcutsOpen ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) setShortcutsOpen(false); }}
    >
      <div className="cp-keys-box">
        <button type="button" className="cp-close" aria-label="Close" onClick={() => setShortcutsOpen(false)}>
          <X size={18} />
        </button>
        <h2>Keyboard shortcuts</h2>
        <div className="cp-keys-grid">
          {GROUPS.map((g) => (
            <div key={g.title} className="cp-keys-group">
              <div className="cp-sh">{g.title}</div>
              {g.rows.map(([k, d]) => (
                <div className="cp-keys-row" key={k}>
                  <kbd>{k}</kbd><span>{d}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsPopup;
