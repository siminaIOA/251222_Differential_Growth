# 251222_Differential_Growth

A browser-based differential growth prototype inspired by coral-like forms, generating stacked ring growth with twist, scaling, a sphere attractor, and gradient ridge coloring using Three.js.

## Features
- Differential growth generator starting from a ring
- Parametric controls for iterations, step length, twist, growth falloff, ring size, and base subdivisions
- Sphere attractor with gumball control to guide growth
- Gradient coloring from base surface to ridge
- Mesh and line modes plus optional edge overlay in mesh mode
- Smoothing controls and adjustable mesh thickness
- Baked geometry instances with offset/spacing controls
- Random color generation for ridge/base color pairs
- PLY export for the combined mesh
- Orbit controls with a Houdini-style grid
- Local dev server for fast iteration

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run the development server:
   - `npm run dev`
3. Open the local URL shown in the terminal.

## Controls
- Base: `ringRadius`, `ringSegments`, `extrusionWidth`, `baseQuadDivisions`, `baseCullFalloff`, `deformableZone`
- Growth: `mode`, `segments`, `simSegmentsCap`, `iterations`, `stepLength`, `twist`, `growthFalloff`
- Leaf: `ruffleAmplitude`, `ruffleFrequency`, `ruffleGrowth`, `leafGrowth`, `ridgeLift`, `ridgeSharpness`, `curl`, `rimCurlWidth`, `bowl`, `taper`
- Attractor: `attractorRadius`, `attractorStrength`, `attractorBias` (move with gumball)
- Collision: `collisionStrength`, `collisionIterations`, `collisionRange`
- Material: `meshThickness`, `smoothnessStrength`, `showEdges`
- Color: `ridgeColor`, `baseColor`, `lineColor`, `randomColors`
- Export: `export .ply`
- View: `autoRotate`, `bakeGeometry`, `deleteLastBake`, `clearBakes`, `bakeBaseOffset`, `bakeSpacing`

## Deployment
- Build locally:
  - `npm install`
  - `npm run build`
- GitHub Pages:
  - The production build is published from the `gh-pages` branch.
  - Live demo: https://siminaIOA.github.io/251222_Differential_Growth/
