# PROJECT STATE

## Project
Reverse-engineered 2D procedural scene reconstruction.

## Goal
Reconstruct the specific supplied animated scene as closely as the available reference evidence allows. Observed character shapes and motion are to be matched from source material rather than replaced with generic approximations.

## Scope
This is a separate side project. It must not replace or alter the main 3D foot-rig/WebGL project.

## Reference sources
- `AQNw4SATRLRJG97Fc7nhIg-V1D4MjAF0WeSYWSdlDcF8S0wJUL1oqUEqrG63xwuhVQA537MuMeOmoiCwbi7yO6MLXN-FPbBMRABhFsE.mov` — original animation reference.
- `SI_86343F68-B918-496A-8BA4-D5D6AD2F492C.png` — high-resolution lower-body character reference.

## Current stage
Initial runnable reference-analysis prototype created.

## Implemented
- `index.html` loads both original repository assets.
- Static PNG reference viewer with opacity control.
- Canvas analysis-guide overlay.
- Original animation video player.
- No character geometry has yet been approximated or substituted.

## Critical requirements
- Preserve original reference assets unchanged.
- Separate static shape reconstruction from motion reconstruction.
- Validate against references before adding complex procedural animation.
- Do not silently invent unobserved geometry or motion.
- Optimize the eventual application for iPhone 15 Pro Max and Safari.

## Current task
Analyze the supplied references and replace the placeholder analysis overlay with source-driven reconstruction geometry.

## Next milestone
Establish trace/component boundaries for the lower body and feet, then build the first reconstructed geometry layer.
