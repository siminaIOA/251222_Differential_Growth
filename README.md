# 251222_Differential_Growth

A browser-based differential growth prototype inspired by coral-like forms, generating stacked ring growth with twist, scaling, a sphere attractor, and gradient ridge coloring using Three.js.

## Features
- Differential growth generator starting from a ring
- Parametric controls for iterations, step length, twist, scale, and ring size
- Sphere attractor to guide growth within a controllable radius
- Gradient coloring from base surface to ridge
- Mesh mode with adjustable thickness and line mode for lightweight previews
- Export to OBJ or GLTF
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
- Growth: `mode`, `segments`, `iterations`, `stepLength`, `scale`, `twist`
- Noise: `noiseAmplitude`, `noiseFrequency`, `noiseVertical`
- Attractor: `attractorRadius`, `attractorStrength`, `attractorFalloff`, `attractorBias` (move with gumball)
- Material: `meshThickness`, `meshOpacity`, `lineOpacity`
- Color: `baseColor`, `ridgeColor`
- View: `autoRotate`
