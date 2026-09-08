# PROJECT STATE

## Project
Source-driven reconstruction of a specific 2D animated scene. Separate from the 3D foot project.

## Source assets
- Original MOV animation in repository root.
- High-resolution lower-body PNG in repository root.

## Implemented
- `index.html`: static reference and frame-analysis lab.
- `trace.html`: component boundary tracing editor.
  - normalized coordinates
  - local persistence on the device
  - per-component paths
  - JSON export/import
- `data/character-trace.json`: canonical destination for committed trace data.
- `viewer.html`: renders imported source-derived traces over or without the reference.
- `src/reconstruction.js`: component data model.
- GitHub Pages enabled.

## Current rule
Do not invent canonical character geometry. Empty trace data is preferable to falsely precise approximations.

## Current task
Acquire actual source traces, commit them to `data/character-trace.json`, then build the runtime reconstruction and animation layer.

## Next milestone
The trace editor should produce the first real component data. Once committed, the viewer/runtime can render independent foot and toe shapes and establish pivots for observed motion.
