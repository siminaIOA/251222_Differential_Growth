# 251222_Differential_Growth

A browser-based differential growth prototype inspired by coral-like forms, generating stacked ring growth with twist, scaling, a sphere attractor, and gradient ridge coloring using Three.js.

## Features
- Differential growth generator starting from a ring
- Parametric controls for iterations, step length, twist, scale, and ring size
- Sphere attractor to guide growth within a controllable radius
- Gradient coloring from base surface to ridge
- Mesh mode with adjustable thickness, smoothing, and line mode for previews
- Seam bridging between base ring and leaf growth
- Orbit controls with a Houdini-style grid and attractor gumball
- Local dev server for fast iteration

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run the development server:
   - `npm run dev`
3. Open the local URL shown in the terminal.

## Controls
- Base: `ringRadius`, `extrusionWidth`, `baseQuadDivisions`
- Growth: `mode`, `segments`, `iterations`, `stepLength`, `scale`, `twist`, `growthFalloff`
- Leaf: `ruffleAmplitude`, `ruffleFrequency`, `ruffleGrowth`, `leafGrowth`, `ridgeLift`, `ridgeSharpness`, `curl`, `bowl`, `taper`
- Attractor: `attractorRadius`, `attractorStrength`, `attractorFalloff`, `attractorBias` (move with gumball)
- Collision: `collisionStrength`, `collisionIterations`, `collisionRange`
- Material: `meshThickness`, `thicknessRadius`, `meshOpacity`, `lineOpacity`, `smoothnessStrength`
- Color: `baseColor`, `ridgeColor`
- View: `autoRotate`
