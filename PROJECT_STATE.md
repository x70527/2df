# PROJECT STATE

## Project
Reverse-engineered 2D procedural scene reconstruction.

## Goal
Reconstruct the specific supplied animated scene as closely as the available reference evidence allows. Observed character shapes and motion are to be matched from source material rather than replaced with generic approximations.

## Scope
This is a separate side project. It must not replace or alter the main 3D foot-rig/WebGL project.

## Reference sources
- Original MOV animation in the repository.
- High-resolution lower-body PNG in the repository.

## Implemented
- Runnable `index.html` reference lab.
- Static PNG viewer with opacity control and normalized landmarks.
- Frame-by-frame MOV analysis controls and per-toe landmark categories.
- Source-driven reconstruction component model in `src/reconstruction.js`.
- GitHub Pages enabled for future browser testing.

## Reconstruction rule
No generic replacement character geometry is canonical. Geometry must be derived from source tracing or measurement.

## Current task
Populate measured component traces from the reference image, beginning with foot and toe silhouettes, then render those traces as the first reconstruction layer.

## Next milestone
Render editable source-derived paths over the reference image and begin component-by-component tracing.
