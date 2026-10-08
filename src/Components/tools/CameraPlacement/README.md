# 3D Camera Placement tool — file guide

Route: `/tools/camera-placement` (registered in `src/App.jsx`).
User manual (separate static page): `public/tools/camera-placement-manual.html`.

## Where to change what

| I want to change… | Open this file |
|---|---|
| Default slider values, plate presets, solver defaults, slider ranges | `config/toolSettings.js` |
| Colours, sizes, spacing, responsive rules (every `cp-…` class) | `camera-placement.css` |
| Page layout (which blocks appear and in what order) | `CameraPlacementPage.jsx` |
| Title bar buttons (Autocompute, Save, Export, Import, Manual) | `ui/header/TopBar.jsx` |
| Left controls panel: the 4 accordion groups | `ui/controls-panel/ControlsPanel.jsx` |
| Road sliders (lanes, lane width) | `ui/controls-panel/RoadSettings.jsx` |
| Camera sliders (height, X, tilt, pan, distance) + Re-center | `ui/controls-panel/CameraSettings.jsx` |
| Lens / FOV, padlocks, zoom lens | `ui/controls-panel/LensSettings.jsx` (one slider = `FovSliderField.jsx`) |
| Sensor resolution, plate type/size, plate image | `ui/controls-panel/SensorPlateSettings.jsx` |
| Live 3D scene block (puts the parts below together) | `ui/live-scene/LiveScene.jsx` |
| 2D / 3D switch, full-view button, panel show/hide button | `ui/live-scene/ViewSwitch.jsx` |
| Rotate control at the bottom-left of the scene | `ui/live-scene/RotateControl.jsx` |
| Undo / redo / tour / shortcuts icons at the top-right of the scene | `ui/live-scene/SceneUtilityButtons.jsx` |
| Right column: Coverage numbers + per-lane Lane 1/2/3 list | `ui/side-cards/CoverageCard.jsx` |
| Right column: Camera sensor view card | `ui/side-cards/SensorViewCard.jsx` |
| Autocompute pop-up (form on the left, results on the right) | `ui/popups/AutocomputePopup.jsx` |
| Autocompute result tables | `ui/popups/AutocomputeResults.jsx` |
| Full-screen sensor image pop-up | `ui/popups/SensorFullscreenPopup.jsx` |
| Keyboard shortcuts pop-up (the list) | `ui/popups/KeyboardShortcutsPopup.jsx` |
| Guided tour steps and wording | `ui/tour/GuidedTour.jsx` |
| Reusable bits: accordion, slider, number box, tooltip, click-to-type value | `ui/shared/` |

## Behind the screen (logic — change only if you know what you need)

| Folder / file | Purpose |
|---|---|
| `state/PlacementContext.jsx` | All settings + actions in one place: slider changes, undo/redo, keyboard shortcuts, tour state, import/export triggers, full-view and panel show/hide state |
| `engine3d/SceneEngine.js` | The three.js scene: road, cars, camera frustum, 2D/3D cameras, rotate/orbit, sensor image rendering |
| `engine3d/useSceneEngine.js` | Starts the 3D engine and keeps it sized |
| `engine3d/plateTextures.js` | Drawn licence-plate and "LANE n" road-marking textures |
| `calculations/geometry.js` | FOV maths, lane numbering, re-center angles, zoom range |
| `calculations/solver.js` | The Autocompute solver (pixel/zone/speed maths) |
| `files/saveAndExport.js` | Setup-image legend, config export/import, PNG saving |

## Keyboard shortcuts (defined in `state/PlacementContext.jsx`, listed in `KeyboardShortcutsPopup.jsx`)

`S` solver · `R` re-center · `M` manual · `T` tour · `?` shortcuts · `2` / `3` view · `F` full view · `B` show/hide controls · `Esc` close · `Ctrl+Z` / `Ctrl+Y` undo/redo

## Images

Plate photos used on the cars: `src/assets/tools/plates/` (`us.jpg`, `eu.jpg`, `in.jpg`).
