import "./style.css";
import * as THREE from "three";
import GUI from "lil-gui";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#050505");

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(4, 3, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

document.getElementById("app").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = true;
controls.minDistance = 1.5;
controls.maxDistance = 18;

const growthGroup = new THREE.Group();
scene.add(growthGroup);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(5, 6, 4);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.45);
fillLight.position.set(-4, 2, -6);
scene.add(fillLight);

const attractorMesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({
    color: "#1f6f8b",
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
);
scene.add(attractorMesh);

const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.setMode("translate");
transformControls.setSpace("world");
transformControls.setSize(1.15);
transformControls.attach(attractorMesh);
transformControls.addEventListener("dragging-changed", (event) => {
  controls.enabled = !event.value;
});
transformControls.addEventListener("objectChange", () => {
  params.attractorX = attractorMesh.position.x;
  params.attractorY = attractorMesh.position.y;
  params.attractorZ = attractorMesh.position.z;
  buildGrowth();
});
scene.add(transformControls);
scene.add(transformControls.getHelper());

const axesHelper = new THREE.AxesHelper(2.5);
axesHelper.material.transparent = true;
axesHelper.material.opacity = 0.35;
scene.add(axesHelper);

const gridSize = 20;
const minorDivisions = 40;
const majorDivisions = 10;

const minorGrid = new THREE.GridHelper(gridSize, minorDivisions, "#1a1f24", "#1a1f24");
minorGrid.position.y = -0.4;
minorGrid.material.opacity = 0.4;
minorGrid.material.transparent = true;
scene.add(minorGrid);

const majorGrid = new THREE.GridHelper(gridSize, majorDivisions, "#2a3238", "#2a3238");
majorGrid.position.y = -0.399;
majorGrid.material.opacity = 0.7;
majorGrid.material.transparent = true;
scene.add(majorGrid);

const params = {
  mode: "mesh",
  segments: 140,
  iterations: 32,
  stepLength: 0.11,
  ringRadius: 1.2,
  scale: 0.55,
  twist: 2.4,
  ruffleAmplitude: 0.35,
  ruffleFrequency: 2.6,
  ruffleGrowth: 1.1,
  leafGrowth: 1.35,
  ridgeLift: 0.18,
  ridgeSharpness: 1.4,
  curl: 0.65,
  bowl: 0.12,
  taper: 0.4,
  noiseAmplitude: 0.04,
  noiseFrequency: 2.1,
  noiseVertical: 0.04,
  attractorX: 0.6,
  attractorY: 1.0,
  attractorZ: -0.4,
  attractorRadius: 0.2,
  attractorStrength: 0.45,
  attractorFalloff: 1.5,
  attractorBias: 0.15,
  meshThickness: 0.06,
  meshOpacity: 0.92,
  lineOpacity: 0.75,
  ridgeColor: "#ff7a59",
  baseColor: "#1b3a4b",
  extrusionWidth: 0.06,
  baseQuadDivisions: 6,
  autoRotate: true,
};

let growthMesh = null;
let growthLines = null;
let baseRingMesh = null;

function generateRings() {
  const rings = [];
  const center = new THREE.Vector3(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  const total = Math.max(1, params.iterations);
  const segments = Math.max(3, params.segments);

  const firstRing = [];
  for (let j = 0; j < segments; j += 1) {
    const angle = (Math.PI * 2 * j) / segments;
    firstRing.push(
      new THREE.Vector3(
        0,
        Math.cos(angle) * params.ringRadius,
        Math.sin(angle) * params.ringRadius
      )
    );
  }

  rings.push({
    points: firstRing,
    center: new THREE.Vector3(0, 0, 0),
  });

  for (let i = 1; i <= total; i += 1) {
    const t = i / total;
    const twist = params.twist * t;
    const taper = 1 - params.taper * t;
    const growthBoost = 1 + params.leafGrowth * t;
    const stepOut = params.stepLength * growthBoost;
    const stepUp = params.stepLength * 0.25;
    const prev = rings[i - 1];
    const ring = [];
    let ringCenter = new THREE.Vector3();

    for (let j = 0; j < segments; j += 1) {
      const angle = (Math.PI * 2 * j) / segments + twist;
      const rufflePhase = angle * params.ruffleFrequency + t * params.ruffleFrequency * 0.9;
      const ridgeMask = Math.pow(Math.abs(Math.sin(rufflePhase)), params.ridgeSharpness);
      const ruffle =
        Math.sin(rufflePhase) *
        params.ruffleAmplitude *
        (0.25 + params.ruffleGrowth * t);

      const prevPoint = prev.points[j];
      const radial = prevPoint.clone().sub(prev.center);
      if (radial.lengthSq() < 1e-6) {
        radial.set(1, 0, 0);
      }
      radial.normalize();

      const toCenter = center.clone().sub(prevPoint);
      const dist = toCenter.length();
      let influence = 0;
      if (dist < params.attractorRadius) {
        const norm = 1 - dist / params.attractorRadius;
        influence = Math.pow(norm, params.attractorFalloff);
      }
      influence = Math.min(1, Math.max(0, influence + params.attractorBias));
      const growthScale = influence * params.attractorStrength;

      const isGrowing = influence > 0.02;
      const basePoint = prevPoint
        .clone()
        .addScaledVector(
          radial,
          stepOut * taper * (isGrowing ? 0.3 + growthScale : 0)
        )
        .addScaledVector(
          new THREE.Vector3(0, 1, 0),
          stepUp * (isGrowing ? 0.2 + growthScale : 0)
        );

      const radiusOffset = radial
        .clone()
        .multiplyScalar(ruffle * (isGrowing ? 0.4 + growthScale : 0));
      const point = basePoint.add(radiusOffset);
      point.y +=
        (Math.cos(rufflePhase * 0.7) * params.ruffleAmplitude * 0.08 +
          ridgeMask * params.ridgeLift * (0.2 + t) * (0.4 + growthScale)) *
        (isGrowing ? 1 : 0);

      const curlAngle = params.curl * (t - 0.15);
      point.applyAxisAngle(radial, curlAngle);
      point.y -= params.bowl * radial.length() * radial.length() * 0.35;

      if (params.noiseAmplitude > 0) {
        const noisePhase = t * params.noiseFrequency * 1.7 + angle;
        const noise =
          Math.sin(noisePhase * params.noiseFrequency) * params.noiseAmplitude;
        point.addScaledVector(radial, noise);
        point.y +=
          Math.sin(noisePhase * 0.7) * params.noiseVertical * params.noiseAmplitude;
      }

      if (params.attractorStrength > 0 && influence > 0.001) {
        point.addScaledVector(toCenter.normalize(), params.attractorStrength * influence * 0.25);
      }

      ring.push(point);
      ringCenter.add(point);
    }

    ringCenter.multiplyScalar(1 / ring.length);
    rings.push({ points: ring, center: ringCenter });
  }

  return rings;
}

function clearGrowth() {
  if (growthMesh) {
    growthGroup.remove(growthMesh);
    growthMesh.geometry.dispose();
    growthMesh.material.dispose();
    growthMesh = null;
  }
  if (growthLines) {
    growthGroup.remove(growthLines);
    growthLines.geometry.dispose();
    growthLines.material.dispose();
    growthLines = null;
  }
}

function updateBaseRing() {
  if (baseRingMesh) {
    growthGroup.remove(baseRingMesh);
    baseRingMesh.geometry.dispose();
    baseRingMesh.material.dispose();
    baseRingMesh = null;
  }

  const width = Math.max(0.01, params.extrusionWidth);
  const radialSegments = Math.max(48, Math.floor(params.segments / 2));
  const heightSegments = Math.max(1, Math.min(6, Math.floor(params.baseQuadDivisions)));
  const linePositions = [];

  for (let h = 0; h <= heightSegments; h += 1) {
    const y = -width / 2 + (width * h) / heightSegments;
    for (let s = 0; s < radialSegments; s += 1) {
      const next = (s + 1) % radialSegments;
      const angle = (Math.PI * 2 * s) / radialSegments;
      const nextAngle = (Math.PI * 2 * next) / radialSegments;

      const x1 = Math.cos(angle) * params.ringRadius;
      const z1 = Math.sin(angle) * params.ringRadius;
      const x2 = Math.cos(nextAngle) * params.ringRadius;
      const z2 = Math.sin(nextAngle) * params.ringRadius;

      linePositions.push(x1, y, z1, x2, y, z2);
    }
  }

  for (let s = 0; s < radialSegments; s += 1) {
    const angle = (Math.PI * 2 * s) / radialSegments;
    const x = Math.cos(angle) * params.ringRadius;
    const z = Math.sin(angle) * params.ringRadius;
    for (let h = 0; h < heightSegments; h += 1) {
      const y1 = -width / 2 + (width * h) / heightSegments;
      const y2 = -width / 2 + (width * (h + 1)) / heightSegments;
      linePositions.push(x, y1, z, x, y2, z);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(linePositions, 3)
  );

  const material = new THREE.LineBasicMaterial({
    color: "#29ff8a",
    transparent: true,
    opacity: 0.7,
  });
  baseRingMesh = new THREE.LineSegments(geometry, material);
  baseRingMesh.rotation.z = Math.PI / 2;
  growthGroup.add(baseRingMesh);
}

function buildLineGrowth(rings) {
  const positions = [];
  const colors = [];
  const segments = Math.max(3, params.segments);
  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);

  for (let i = 0; i < rings.length; i += 1) {
    const color = baseColor.clone().lerp(ridgeColor, i / (rings.length - 1));
    const ring = rings[i].points;

    for (let j = 0; j < segments; j += 1) {
      const current = ring[j];
      const next = ring[(j + 1) % segments];

      positions.push(current.x, current.y, current.z);
      positions.push(next.x, next.y, next.z);
      colors.push(color.r, color.g, color.b, color.r, color.g, color.b);

      if (i < rings.length - 1) {
        const upper = rings[i + 1].points[j];
        positions.push(current.x, current.y, current.z);
        positions.push(upper.x, upper.y, upper.z);
        colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
  );

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: params.lineOpacity,
  });

  growthLines = new THREE.LineSegments(geometry, material);
  growthGroup.add(growthLines);
}

function buildMeshGrowth(rings) {
  const segments = Math.max(3, params.segments);
  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);
  const thickness = Math.max(0, params.meshThickness);

  const positions = [];
  const colors = [];
  const indices = [];

  const totalRings = rings.length;
  const vertexPerRing = segments;

  function outerIndex(r, s) {
    return r * vertexPerRing + s;
  }

  function innerIndex(r, s) {
    return totalRings * vertexPerRing + r * vertexPerRing + s;
  }

  for (let i = 0; i < rings.length; i += 1) {
    const color = baseColor.clone().lerp(ridgeColor, i / (rings.length - 1));
    const ring = rings[i].points;
    const center = rings[i].center;

    for (let j = 0; j < segments; j += 1) {
      const point = ring[j];
      const radial = point.clone().sub(center);
      if (radial.lengthSq() < 1e-6) {
        radial.set(1, 0, 0);
      }
      radial.normalize();

      const outer = point.clone().addScaledVector(radial, thickness * 0.5);
      const inner = point.clone().addScaledVector(radial, -thickness * 0.5);

      positions.push(outer.x, outer.y, outer.z);
      colors.push(color.r, color.g, color.b);
    }

    for (let j = 0; j < segments; j += 1) {
      const point = ring[j];
      const radial = point.clone().sub(center);
      if (radial.lengthSq() < 1e-6) {
        radial.set(1, 0, 0);
      }
      radial.normalize();

      const inner = point.clone().addScaledVector(radial, -thickness * 0.5);
      positions.push(inner.x, inner.y, inner.z);
      colors.push(color.r, color.g, color.b);
    }
  }

  for (let r = 0; r < totalRings - 1; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const next = (s + 1) % segments;
      const a = outerIndex(r, s);
      const b = outerIndex(r, next);
      const c = outerIndex(r + 1, s);
      const d = outerIndex(r + 1, next);
      indices.push(a, c, b, b, c, d);

      const ia = innerIndex(r, s);
      const ib = innerIndex(r, next);
      const ic = innerIndex(r + 1, s);
      const id = innerIndex(r + 1, next);
      indices.push(ia, ib, ic, ib, id, ic);
    }
  }

  const capRings = [0, totalRings - 1];
  for (const r of capRings) {
    for (let s = 0; s < segments; s += 1) {
      const next = (s + 1) % segments;
      const a = outerIndex(r, s);
      const b = outerIndex(r, next);
      const c = innerIndex(r, s);
      const d = innerIndex(r, next);
      if (r === 0) {
        indices.push(a, b, c, b, d, c);
      } else {
        indices.push(a, c, b, b, c, d);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    transparent: true,
    opacity: params.meshOpacity,
    roughness: 0.55,
    metalness: 0.08,
    side: THREE.DoubleSide,
  });

  growthMesh = new THREE.Mesh(geometry, material);
  growthGroup.add(growthMesh);
}

function updateAttractor() {
  attractorMesh.position.set(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  attractorMesh.geometry.dispose();
  attractorMesh.geometry = new THREE.SphereGeometry(
    params.attractorRadius,
    32,
    32
  );
  transformControls.update();
}

function buildGrowth() {
  clearGrowth();
  const rings = generateRings();

  if (params.mode === "mesh") {
    buildMeshGrowth(rings);
  } else {
    buildLineGrowth(rings);
  }

  updateAttractor();
  updateBaseRing();
}

function saveBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function getExportObject() {
  return growthMesh || growthLines;
}

function exportGLTF() {
  const exporter = new GLTFExporter();
  exporter.parse(
    getExportObject(),
    (result) => {
      const output = JSON.stringify(result, null, 2);
      saveBlob(new Blob([output], { type: "application/json" }), "growth.gltf");
    },
    { binary: false }
  );
}

function exportOBJ() {
  const exporter = new OBJExporter();
  const output = exporter.parse(getExportObject());
  saveBlob(new Blob([output], { type: "text/plain" }), "growth.obj");
}

const gui = new GUI({ width: 320 });
const growthFolder = gui.addFolder("Growth");
growthFolder.add(params, "mode", ["mesh", "lines"]).onChange(buildGrowth);
growthFolder.add(params, "segments", 24, 220, 1).onChange(buildGrowth);
growthFolder.add(params, "iterations", 4, 90, 1).onChange(buildGrowth);
growthFolder.add(params, "stepLength", 0.02, 0.4, 0.01).onChange(buildGrowth);
growthFolder.add(params, "scale", -0.5, 1.4, 0.01).onChange(buildGrowth);
growthFolder.add(params, "twist", -6.28, 6.28, 0.01).onChange(buildGrowth);

const baseFolder = gui.addFolder("Base");
baseFolder.add(params, "ringRadius", 0.2, 3, 0.05).onChange(buildGrowth);
baseFolder.add(params, "extrusionWidth", 0.1, 1, 0.01).onChange(buildGrowth);
baseFolder.add(params, "baseQuadDivisions", 1, 6, 1).onChange(buildGrowth);

const leafFolder = gui.addFolder("Leaf");
leafFolder.add(params, "ruffleAmplitude", 0, 0.8, 0.01).onChange(buildGrowth);
leafFolder.add(params, "ruffleFrequency", 0.5, 12, 0.1).onChange(buildGrowth);
leafFolder.add(params, "ruffleGrowth", 0, 2, 0.05).onChange(buildGrowth);
leafFolder.add(params, "leafGrowth", 0, 3, 0.05).onChange(buildGrowth);
leafFolder.add(params, "ridgeLift", 0, 0.6, 0.01).onChange(buildGrowth);
leafFolder.add(params, "ridgeSharpness", 0.2, 3, 0.05).onChange(buildGrowth);
leafFolder.add(params, "curl", -2.5, 2.5, 0.01).onChange(buildGrowth);
leafFolder.add(params, "bowl", -0.5, 0.5, 0.01).onChange(buildGrowth);
leafFolder.add(params, "taper", 0, 1.2, 0.01).onChange(buildGrowth);

const noiseFolder = gui.addFolder("Noise");
noiseFolder.add(params, "noiseAmplitude", 0, 0.3, 0.01).onChange(buildGrowth);
noiseFolder.add(params, "noiseFrequency", 0.1, 6, 0.1).onChange(buildGrowth);
noiseFolder.add(params, "noiseVertical", 0, 0.2, 0.01).onChange(buildGrowth);

const attractorFolder = gui.addFolder("Attractor");
attractorFolder.add(params, "attractorRadius", 0.1, 0.2, 0.01).onChange(buildGrowth);
attractorFolder
  .add(params, "attractorStrength", 0, 1.2, 0.01)
  .onChange(buildGrowth);
attractorFolder.add(params, "attractorFalloff", 0.5, 3, 0.05).onChange(buildGrowth);
attractorFolder.add(params, "attractorBias", -0.2, 0.6, 0.01).onChange(buildGrowth);

const materialFolder = gui.addFolder("Material");
materialFolder.add(params, "meshThickness", 0, 0.4, 0.01).onChange(buildGrowth);
materialFolder.add(params, "meshOpacity", 0.2, 1, 0.01).onChange(buildGrowth);
materialFolder.add(params, "lineOpacity", 0.1, 1, 0.01).onChange(buildGrowth);

const colorFolder = gui.addFolder("Color");
colorFolder.addColor(params, "baseColor").onChange(buildGrowth);
colorFolder.addColor(params, "ridgeColor").onChange(buildGrowth);

const exportFolder = gui.addFolder("Export");
exportFolder.add({ exportGLTF }, "exportGLTF");
exportFolder.add({ exportOBJ }, "exportOBJ");

const viewFolder = gui.addFolder("View");
viewFolder.add(params, "autoRotate");

gui.close();

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onResize);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (params.autoRotate) {
    growthGroup.rotation.y += delta * 0.35;
  }

  renderer.render(scene, camera);
  controls.update();
}

buildGrowth();
animate();
