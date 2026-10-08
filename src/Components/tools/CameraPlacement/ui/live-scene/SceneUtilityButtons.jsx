import React from "react";
import { CircleHelp, Keyboard, Redo2, Undo2 } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

/** Undo / redo and help shortcuts, kept in the scene so the title bar stays on one line */
const SceneUtilityButtons = () => {
  const { undo, redo, canUndo, canRedo, startTour, setShortcutsOpen } = usePlacement();
  return (
    <div className="cp-vu">
      <button type="button" onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)" aria-label="Undo"><Undo2 size={17} /></button>
      <button type="button" onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Y)" aria-label="Redo"><Redo2 size={17} /></button>
      <span className="cp-vu-sep" />
      <button type="button" onClick={startTour} title="Guided tour (T)" aria-label="Guided tour"><CircleHelp size={17} /></button>
      <button type="button" onClick={() => setShortcutsOpen(true)} title="Keyboard shortcuts (?)" aria-label="Keyboard shortcuts"><Keyboard size={17} /></button>
    </div>
  );
};

export default SceneUtilityButtons;
