import "./style.css";
import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
controls.maxDistance = 80;

const growthGroup = new THREE.Group();
scene.add(growthGroup);

const bakedGroup = new THREE.Group();
scene.add(bakedGroup);

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
    color: "#ffff00",
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

const bakedControls = new TransformControls(camera, renderer.domElement);
bakedControls.setMode("translate");
bakedControls.setSpace("world");
bakedControls.setSize(1.1);
scene.add(bakedControls);
bakedControls.visible = false;

const bakeRaycaster = new THREE.Raycaster();
const bakePointer = new THREE.Vector2();
bakeRaycaster.params.Line.threshold = 0.2;

const bakedSelection = [];
let dragState = null;
const selectionPivot = new THREE.Object3D();
scene.add(selectionPivot);
const bakedHelpers = new Map();

function createBakedHelper(baked, geometry) {
  if (!geometry.boundingSphere) {
    geometry.computeBoundingSphere();
  }
}

function buildBakedLine(geometry) {
  const wireGeom = new THREE.WireframeGeometry(geometry);
  const material = new THREE.LineBasicMaterial({
    color: params.lineColor,
    transparent: true,
    opacity: params.lineOpacity,
  });
  return new THREE.LineSegments(wireGeom, material);
}

function buildBakedMesh(geometry, materialHint) {
  const hasColors = !!geometry.getAttribute("color");
  const material =
    materialHint ||
    new THREE.MeshStandardMaterial({
      vertexColors: hasColors,
      roughness: 0.5,
      metalness: 0.08,
      side: THREE.DoubleSide,
    });
  return new THREE.Mesh(geometry, material);
}

function replaceBakedObject(oldObj, newObj) {
  newObj.position.copy(oldObj.position);
  newObj.quaternion.copy(oldObj.quaternion);
  newObj.scale.copy(oldObj.scale);
  newObj.userData.isBaked = true;
  newObj.userData.sourceGeometry = oldObj.userData.sourceGeometry || oldObj.geometry;
  newObj.userData.sourceMaterial = oldObj.userData.sourceMaterial || oldObj.material;
  newObj.userData.sourceMode = oldObj.userData.sourceMode || "mesh";
  newObj.frustumCulled = false;

  bakedHelpers.delete(oldObj);
  bakedGroup.remove(oldObj);
  bakedGroup.add(newObj);
  createBakedHelper(newObj, newObj.userData.sourceGeometry || newObj.geometry);

  const selectionIndex = bakedSelection.indexOf(oldObj);
  if (selectionIndex >= 0) {
    bakedSelection[selectionIndex] = newObj;
  }
  updateSelectionPivot();
  return newObj;
}

function updateBakedDisplay() {
  if (bakedGroup.children.length === 0) {
    return;
  }
  const needsLines = params.mode === "lines";
  const replacements = [];

  for (const baked of bakedGroup.children) {
    if (!baked.userData || !baked.userData.isBaked) {
      continue;
    }
    if (needsLines && baked.isMesh) {
      const sourceGeom = baked.userData.sourceGeometry || baked.geometry;
      const line = buildBakedLine(sourceGeom);
      line.userData = { ...baked.userData, sourceMode: "mesh" };
      replacements.push({ oldObj: baked, newObj: line });
    } else if (!needsLines && baked.isLineSegments && baked.userData.sourceMode === "mesh") {
      const sourceGeom = baked.userData.sourceGeometry || baked.geometry;
      const matHint =
        baked.userData.sourceMaterial && baked.userData.sourceMaterial.clone
          ? baked.userData.sourceMaterial.clone()
          : null;
      const mesh = buildBakedMesh(sourceGeom, matHint);
      mesh.userData = { ...baked.userData };
      replacements.push({ oldObj: baked, newObj: mesh });
    }
  }

  for (const { oldObj, newObj } of replacements) {
    replaceBakedObject(oldObj, newObj);
  }
}

function updateSelectionPivot() {
  if (bakedSelection.length === 0) {
    bakedControls.detach();
    bakedControls.visible = false;
    transformControls.attach(attractorMesh);
    transformControls.visible = true;
    return;
  }
  const centroid = new THREE.Vector3();
  for (const obj of bakedSelection) {
    centroid.add(obj.position);
  }
  centroid.multiplyScalar(1 / bakedSelection.length);
  selectionPivot.position.copy(centroid);
  bakedControls.visible = true;
  bakedControls.attach(selectionPivot);
  bakedControls.updateMatrixWorld(true);
  transformControls.detach();
  transformControls.visible = false;
}

function setSelection(objects) {
  bakedSelection.length = 0;
  for (const obj of objects) {
    if (obj && !bakedSelection.includes(obj)) {
      bakedSelection.push(obj);
    }
  }
  updateSelectionPivot();
}

function toggleSelection(object) {
  const index = bakedSelection.indexOf(object);
  if (index >= 0) {
    bakedSelection.splice(index, 1);
  } else {
    bakedSelection.push(object);
  }
  updateSelectionPivot();
}

bakedControls.addEventListener("objectChange", () => {
  if (!dragState) {
    return;
  }
  const delta = selectionPivot.position.clone().sub(dragState.pivotStart);
  for (let i = 0; i < bakedSelection.length; i += 1) {
    const start = dragState.startPositions[i];
    const obj = bakedSelection[i];
    if (start && obj) {
      obj.position.copy(start).add(delta);
    }
  }
});

bakedControls.addEventListener("dragging-changed", (event) => {
  controls.enabled = !event.value;
  if (event.value) {
    dragState = {
      pivotStart: selectionPivot.position.clone(),
      startPositions: bakedSelection.map((obj) => obj.position.clone()),
    };
  } else {
    dragState = null;
  }
});

const axesHelper = new THREE.AxesHelper(2.5);
axesHelper.material.transparent = true;
axesHelper.material.opacity = 0.35;
scene.add(axesHelper);

const DEFAULT_SIM_SEGMENTS_CAP = 240;

const gridSize = 2000;
const minorDivisions = 400;
const majorDivisions = 100;

const minorGrid = new THREE.GridHelper(gridSize, minorDivisions, "#1a1f24", "#1a1f24");
minorGrid.position.y = 0;
minorGrid.material.opacity = 0.25;
minorGrid.material.transparent = true;
minorGrid.material.depthWrite = false;
minorGrid.renderOrder = -1;
scene.add(minorGrid);

const majorGrid = new THREE.GridHelper(gridSize, majorDivisions, "#2a3238", "#2a3238");
majorGrid.position.y = 0;
majorGrid.material.opacity = 0.45;
majorGrid.material.transparent = true;
majorGrid.material.depthWrite = false;
majorGrid.renderOrder = -1;
scene.add(majorGrid);

const params = {
  mode: "mesh",
  segments: 140,
  simSegmentsCap: DEFAULT_SIM_SEGMENTS_CAP,
  iterations: 30,
  stepLength: 0.11,
  ringRadius: 1.2,
  ringSegments: 240,
  twist: 2.4,
  ruffleAmplitude: 0.35,
  ruffleFrequency: 2.6,
  ruffleGrowth: 1.1,
  leafGrowth: 1.35,
  ridgeLift: 0.18,
  ridgeSharpness: 1.4,
  curl: 0.65,
  bowl: -0.2,
  taper: 0.4,
  attractorX: 0.6,
  attractorY: 1.0,
  attractorZ: -0.4,
  attractorRadius: 0.1,
  attractorStrength: 0.45,
  attractorBias: 0.15,
  meshOpacity: 1,
  lineOpacity: 1,
  lineColor: "#ffffff",
  smoothnessStrength: 3,
  collisionStrength: 0.6,
  collisionIterations: 2,
  collisionRange: 1.8,
  ridgeColor: "#ff0000",
  baseColor: "#00a6ff",
  extrusionWidth: 0.25,
  baseQuadDivisions: 6,
  baseCullFalloff: 0.3,
  deformableZone: 1,
  growthFalloff: 1.2,
  autoRotate: false,
  bakeBaseOffset: 1.35,
  bakeSpacing: 1.872,
};

let growthMesh = null;
let growthLines = null;
let baseRingMesh = null;
let baseSeedPoints = [];
let mergedMesh = null;
let baseSeedRing = null;
let firstGrowthRing = null;

function getSelectionInfluence(point, center) {
  const inner = Math.max(0.001, params.attractorRadius);
  const outer = inner + Math.max(0.001, params.baseCullFalloff);
  const dist = point.distanceTo(center);
  if (dist <= inner) {
    return 1;
  }
  if (dist >= outer) {
    return 0;
  }
  return 1 - (dist - inner) / (outer - inner);
}

function resampleRing(points, targetCount) {
  if (!points || points.length < 2) {
    return null;
  }
  const ordered = points
    .map((point) => ({
      point,
      angle: Math.atan2(point.z, point.y),
    }))
    .sort((a, b) => a.angle - b.angle)
    .map((entry) => entry.point);

  const distances = [0];
  let total = 0;
  for (let i = 1; i < ordered.length + 1; i += 1) {
    const a = ordered[i - 1];
    const b = ordered[i % ordered.length];
    total += a.distanceTo(b);
    distances.push(total);
  }

  if (total <= 0) {
    return null;
  }

  const result = [];
  for (let i = 0; i < targetCount; i += 1) {
    const t = (total * i) / targetCount;
    let index = 0;
    while (index < distances.length - 1 && distances[index + 1] < t) {
      index += 1;
    }
    const a = ordered[index % ordered.length];
    const b = ordered[(index + 1) % ordered.length];
    const segmentLength = distances[index + 1] - distances[index];
    const localT = segmentLength > 0 ? (t - distances[index]) / segmentLength : 0;
    result.push(a.clone().lerp(b, localT));
  }
  return result;
}

function resampleRingByIndex(points, targetCount) {
  if (!points || points.length < 2) {
    return null;
  }
  const count = points.length;
  const result = [];
  for (let i = 0; i < targetCount; i += 1) {
    const t = (i / targetCount) * count;
    const index = Math.floor(t);
    const localT = t - index;
    const a = points[index % count];
    const b = points[(index + 1) % count];
    result.push(a.clone().lerp(b, localT));
  }
  return result;
}

function resampleMaskByIndex(mask, targetCount) {
  if (!mask || mask.length < 2) {
    return null;
  }
  const count = mask.length;
  const result = new Array(targetCount);
  for (let i = 0; i < targetCount; i += 1) {
    const t = (i / targetCount) * count;
    const index = Math.floor(t);
    const localT = t - index;
    const a = mask[index % count];
    const b = mask[(index + 1) % count];
    result[i] = a + (b - a) * localT;
  }
  return result;
}

function resampleRings(rings, targetCount) {
  if (!rings || rings.length === 0) {
    return rings;
  }
  const currentCount = rings[0].points.length;
  if (currentCount === targetCount) {
    return rings;
  }
  return rings.map((ring) => {
    const points = resampleRingByIndex(ring.points, targetCount);
    if (!points) {
      return ring;
    }
    const center = new THREE.Vector3();
    for (const point of points) {
      center.add(point);
    }
    center.multiplyScalar(1 / points.length);
    const mask = ring.mask ? resampleMaskByIndex(ring.mask, targetCount) : null;
    return { points, center, mask };
  });
}

function generateRings() {
  const rings = [];
  const center = new THREE.Vector3(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  const total = Math.max(1, params.iterations);
  const simCap = Math.max(3, Math.floor(params.simSegmentsCap || params.segments));
  const segments = Math.max(3, Math.min(params.segments, simCap));

  const basePoints = resampleRing(baseSeedPoints, segments);
  baseSeedRing = basePoints ? basePoints.map((p) => p.clone()) : null;
  const firstRing = [];
  const firstMask = [];
  for (let j = 0; j < segments; j += 1) {
    const point = basePoints
      ? basePoints[j].clone()
      : new THREE.Vector3(
          0,
          Math.cos((Math.PI * 2 * j) / segments) * params.ringRadius,
          Math.sin((Math.PI * 2 * j) / segments) * params.ringRadius
        );
    const selectionInfluence = getSelectionInfluence(point, center);
    firstRing.push(point);
    firstMask.push(selectionInfluence);
  }
  firstGrowthRing = firstRing.map((p) => p.clone());

  rings.push({
    points: firstRing,
    center: new THREE.Vector3(0, 0, 0),
    mask: firstMask,
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
    const ringMask = [];
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

      const selectionInfluence = getSelectionInfluence(prevPoint, center);
      const seed = prev.mask ? prev.mask[j] : selectionInfluence;
      const falloffMask = Math.pow(selectionInfluence, params.growthFalloff);
      const influence = Math.min(
        1,
        Math.max(0, seed * (falloffMask + params.attractorBias))
      );
      const growthScale = influence * params.attractorStrength;
      const toCenter = center.clone().sub(prevPoint);

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

      if (params.attractorStrength > 0 && influence > 0.001) {
        point.addScaledVector(toCenter.normalize(), params.attractorStrength * influence * 0.25);
      }

      ring.push(point);
      ringCenter.add(point);
      ringMask.push(influence);
    }

    ringCenter.multiplyScalar(1 / ring.length);
    gentleRelax(
      ring,
      ringCenter,
      prev,
      params.stepLength * 0.6,
      params.collisionStrength,
      params.collisionIterations,
      params.collisionRange
    );
    rings.push({ points: ring, center: ringCenter, mask: ringMask });
  }

  return rings;
}

function buildSpatialGrid(entries, cellSize) {
  const map = new Map();
  for (const entry of entries) {
    const point = entry.point;
    const cx = Math.floor(point.x / cellSize);
    const cy = Math.floor(point.y / cellSize);
    const cz = Math.floor(point.z / cellSize);
    const key = `${cx}_${cy}_${cz}`;
    const bucket = map.get(key) || [];
    bucket.push(entry);
    map.set(key, bucket);
  }
  return { map, cellSize };
}

function collectNeighbors(point, grid) {
  const results = [];
  const cellSize = grid.cellSize;
  const cx = Math.floor(point.x / cellSize);
  const cy = Math.floor(point.y / cellSize);
  const cz = Math.floor(point.z / cellSize);
  for (let dx = -1; dx <= 1; dx += 1) {
    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dz = -1; dz <= 1; dz += 1) {
        const key = `${cx + dx}_${cy + dy}_${cz + dz}`;
        const bucket = grid.map.get(key);
        if (bucket) {
          results.push(...bucket);
        }
      }
    }
  }
  return results;
}

function gentleRelax(
  ring,
  ringCenter,
  prevRing,
  targetSpacing,
  strength,
  iterations,
  rangeMultiplier
) {
  if (!ring || ring.length < 3) {
    return;
  }
  const baseSpacing = Math.max(0.001, targetSpacing);
  const spacing = baseSpacing * (1 + Math.max(0, strength) * 0.6);
  const range = spacing * Math.max(1, rangeMultiplier);
  const passes = Math.max(0, Math.floor(iterations));
  if (passes === 0) {
    return;
  }

  for (let pass = 0; pass < passes; pass += 1) {
    const dynamicEntries = ring.map((point) => ({ point, isStatic: false }));
    const staticEntries = prevRing
      ? prevRing.points.map((point) => ({ point, isStatic: true }))
      : [];
    const grid = buildSpatialGrid([...dynamicEntries, ...staticEntries], range);

    for (const entry of dynamicEntries) {
      const point = entry.point;
      const neighbors = collectNeighbors(point, grid);
      for (const neighbor of neighbors) {
        if (neighbor.point === point) {
          continue;
        }
        const repelStrength = neighbor.isStatic ? 0.85 * strength : 0.65 * strength;
        gentleRepel(point, neighbor.point, spacing, range, repelStrength);
      }

      const radial = point.clone().sub(ringCenter);
      if (radial.lengthSq() > 1e-6) {
        const radialDist = radial.length();
        if (radialDist < spacing * 0.5) {
          point.addScaledVector(radial.normalize(), (spacing * 0.5 - radialDist) * 0.4);
        }
      }
    }
  }
}

function gentleRepel(a, b, minDist, range, strength) {
  const offset = a.clone().sub(b);
  const dist = offset.length();
  if (dist < 1e-5 || dist >= range) {
    return;
  }
  const push = ((range - dist) / range) * strength;
  if (dist < minDist) {
    offset.normalize().multiplyScalar((minDist - dist) * 0.3 + push);
  } else {
    offset.normalize().multiplyScalar(push);
  }
  a.add(offset);
}

function applyGlobalRelax(rings) {
  const strength = Math.max(0, params.collisionStrength);
  const passes = Math.max(0, Math.floor(params.collisionIterations));
  if (strength <= 0 || passes === 0) {
    return;
  }
  const simCap = Math.max(3, Math.floor(params.simSegmentsCap || params.segments));
  const segments = rings[0]
    ? rings[0].points.length
    : Math.max(3, Math.min(params.segments, simCap));
  const baseSpacing = Math.max(0.001, params.stepLength * 0.6);
  const segmentBoost = Math.max(1, Math.sqrt(segments / 140));
  const boostedStrength = strength * (1 + (segmentBoost - 1) * 0.75);
  const minDist = baseSpacing * (0.65 + 0.6 * boostedStrength) * segmentBoost;
  const range = minDist * Math.max(1, params.collisionRange) * segmentBoost;

  for (let pass = 0; pass < passes; pass += 1) {
    const entries = [];
    for (let r = 0; r < rings.length; r += 1) {
      const ring = rings[r].points;
      const mask = rings[r].mask || [];
      for (let i = 0; i < ring.length; i += 1) {
        if (mask[i] <= 0.02) {
          continue;
        }
        entries.push({ point: ring[i], ringIndex: r, pointIndex: i });
      }
    }

    const grid = buildSpatialGrid(entries, range);

    for (const entry of entries) {
      const neighbors = collectNeighbors(entry.point, grid);
      for (const neighbor of neighbors) {
        if (neighbor.point === entry.point) {
          continue;
        }
        const ringSpan = Math.abs(entry.ringIndex - neighbor.ringIndex);
        const diff = Math.abs(entry.pointIndex - neighbor.pointIndex);
        const wrapDiff = Math.min(diff, segments - diff);
        if (ringSpan === 0 && wrapDiff <= 1) {
          continue;
        }
        const localStrength = ringSpan <= 1 ? boostedStrength * 0.7 : boostedStrength;
        gentleRepel(entry.point, neighbor.point, minDist, range, localStrength);
      }
    }
  }
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
  if (mergedMesh) {
    growthGroup.remove(mergedMesh);
    mergedMesh.geometry.dispose();
    mergedMesh.material.dispose();
    mergedMesh = null;
  }
}

function updateBaseRing() {
  if (baseRingMesh) {
    growthGroup.remove(baseRingMesh);
    baseRingMesh.geometry.dispose();
    baseRingMesh.material.dispose();
    baseRingMesh = null;
  }
  baseSeedPoints = [];

  const width = Math.max(0.01, params.extrusionWidth);
  const radialSegments = Math.min(
    720,
    Math.max(24, Math.floor(params.ringSegments || 240))
  );
  const heightSegments = Math.max(1, Math.min(10, Math.floor(params.baseQuadDivisions)));
  const positions = [];
  const indices = [];
  const linePositions = [];
  const colors = [];

  const attractorPos = new THREE.Vector3(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  const baseRotation = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 0, 1),
    Math.PI / 2
  );

  const keepGrid = Array.from({ length: heightSegments }, () =>
    new Array(radialSegments).fill(true)
  );
  const cutGrid = Array.from({ length: heightSegments }, () =>
    new Array(radialSegments).fill(false)
  );
  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);
  let hasKept = false;

  for (let h = 0; h < heightSegments; h += 1) {
    const y1 = -width / 2 + (width * h) / heightSegments;
    const y2 = -width / 2 + (width * (h + 1)) / heightSegments;
    for (let s = 0; s < radialSegments; s += 1) {
      const next = (s + 1) % radialSegments;
      const angle = (Math.PI * 2 * s) / radialSegments;
      const nextAngle = (Math.PI * 2 * next) / radialSegments;

      const x1 = Math.cos(angle) * params.ringRadius;
      const z1 = Math.sin(angle) * params.ringRadius;
      const x2 = Math.cos(nextAngle) * params.ringRadius;
      const z2 = Math.sin(nextAngle) * params.ringRadius;

      const quadCenter = new THREE.Vector3(
        (x1 + x2) * 0.5,
        (y1 + y2) * 0.5,
        (z1 + z2) * 0.5
      );
      quadCenter.applyQuaternion(baseRotation);

      const selectionInfluence = getSelectionInfluence(quadCenter, attractorPos);
      cutGrid[h][s] = selectionInfluence > 0.01;
      keepGrid[h][s] = !cutGrid[h][s];
      if (keepGrid[h][s]) {
        hasKept = true;
      }
    }
  }

  if (!hasKept) {
    for (let h = 0; h < heightSegments; h += 1) {
      for (let s = 0; s < radialSegments; s += 1) {
        keepGrid[h][s] = true;
      }
    }
  }

  const boundaryMap = new Map();
  const upAxis = new THREE.Vector3(0, 1, 0);
  const sideAxis = new THREE.Vector3(1, 0, 0);

  function buildBaseFromGrid() {
    for (let h = 0; h < heightSegments; h += 1) {
      const y1 = -width / 2 + (width * h) / heightSegments;
      const y2 = -width / 2 + (width * (h + 1)) / heightSegments;
      for (let s = 0; s < radialSegments; s += 1) {
        if (!keepGrid[h][s]) {
          continue;
        }
        const next = (s + 1) % radialSegments;
        const prev = (s - 1 + radialSegments) % radialSegments;

        const angle = (Math.PI * 2 * s) / radialSegments;
        const nextAngle = (Math.PI * 2 * next) / radialSegments;

        const x1 = Math.cos(angle) * params.ringRadius;
        const z1 = Math.sin(angle) * params.ringRadius;
        const x2 = Math.cos(nextAngle) * params.ringRadius;
        const z2 = Math.sin(nextAngle) * params.ringRadius;

        const v1 = new THREE.Vector3(x1, y1, z1);
        const v2 = new THREE.Vector3(x2, y1, z2);
        const v3 = new THREE.Vector3(x2, y2, z2);
        const v4 = new THREE.Vector3(x1, y2, z1);

        v1.applyQuaternion(baseRotation);
        v2.applyQuaternion(baseRotation);
        v3.applyQuaternion(baseRotation);
        v4.applyQuaternion(baseRotation);

        if (params.mode === "mesh") {
          const indexOffset = positions.length / 3;
          positions.push(
            v1.x, v1.y, v1.z,
            v2.x, v2.y, v2.z,
            v3.x, v3.y, v3.z,
            v4.x, v4.y, v4.z
          );
          const t1 = Math.min(1, Math.max(0, (v1.x + width / 2) / width));
          const t2 = Math.min(1, Math.max(0, (v2.x + width / 2) / width));
          const t3 = Math.min(1, Math.max(0, (v3.x + width / 2) / width));
          const t4 = Math.min(1, Math.max(0, (v4.x + width / 2) / width));
          const c1 = baseColor.clone().lerp(ridgeColor, t1);
          const c2 = baseColor.clone().lerp(ridgeColor, t2);
          const c3 = baseColor.clone().lerp(ridgeColor, t3);
          const c4 = baseColor.clone().lerp(ridgeColor, t4);
          colors.push(
            c1.r, c1.g, c1.b,
            c2.r, c2.g, c2.b,
            c3.r, c3.g, c3.b,
            c4.r, c4.g, c4.b
          );
          indices.push(
            indexOffset, indexOffset + 1, indexOffset + 2,
            indexOffset, indexOffset + 2, indexOffset + 3
          );
        } else {
          linePositions.push(
            v1.x, v1.y, v1.z, v2.x, v2.y, v2.z,
            v2.x, v2.y, v2.z, v3.x, v3.y, v3.z,
            v3.x, v3.y, v3.z, v4.x, v4.y, v4.z,
            v4.x, v4.y, v4.z, v1.x, v1.y, v1.z
          );
        }

        const edgePoints = [];
        if (cutGrid[h][next]) {
          edgePoints.push(v2.clone().add(v3).multiplyScalar(0.5));
        }
        if (cutGrid[h][prev]) {
          edgePoints.push(v1.clone().add(v4).multiplyScalar(0.5));
        }
        if (h < heightSegments - 1 && cutGrid[h + 1][s]) {
          edgePoints.push(v4.clone().add(v3).multiplyScalar(0.5));
        }
        if (h > 0 && cutGrid[h - 1][s]) {
          edgePoints.push(v1.clone().add(v2).multiplyScalar(0.5));
        }

        for (const p of edgePoints) {
          const key = `${p.x.toFixed(3)}_${p.y.toFixed(3)}_${p.z.toFixed(3)}`;
          if (!boundaryMap.has(key)) {
            boundaryMap.set(key, p);
          }
        }
      }
    }
  }

  buildBaseFromGrid();

  if (params.mode === "mesh" && positions.length === 0) {
    for (let h = 0; h < heightSegments; h += 1) {
      for (let s = 0; s < radialSegments; s += 1) {
        keepGrid[h][s] = true;
      }
    }
    positions.length = 0;
    indices.length = 0;
    colors.length = 0;
    boundaryMap.clear();
    buildBaseFromGrid();
  }

  baseSeedPoints = Array.from(boundaryMap.values());

  const geometry = new THREE.BufferGeometry();
  const isMeshMode = params.mode === "mesh";
  if (isMeshMode) {
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geometry.setIndex(indices);
    const welded = BufferGeometryUtils.mergeVertices(geometry, 1e-4);
    welded.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    flipTriangleWinding(welded);
    welded.computeVertexNormals();
    baseRingMesh = new THREE.Mesh(welded, material);
  } else {
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const material = new THREE.LineBasicMaterial({
      color: params.lineColor,
      transparent: true,
      opacity: params.lineOpacity,
    });
    baseRingMesh = new THREE.LineSegments(geometry, material);
  }
  growthGroup.add(baseRingMesh);
}

function buildLineGrowth(rings) {
  const positions = [];
  const segments = rings[0] ? rings[0].points.length : Math.max(3, params.segments);

  for (let i = 0; i < rings.length; i += 1) {
    const ring = rings[i].points;
    const mask = rings[i].mask || [];

    for (let j = 0; j < segments; j += 1) {
      if (mask[j] <= 0.02) {
        continue;
      }
      const current = ring[j];
      const next = ring[(j + 1) % segments];

      positions.push(current.x, current.y, current.z);
      positions.push(next.x, next.y, next.z);

      if (i < rings.length - 1) {
        if ((rings[i + 1].mask || [])[j] <= 0.02) {
          continue;
        }
        const upper = rings[i + 1].points[j];
        positions.push(current.x, current.y, current.z);
        positions.push(upper.x, upper.y, upper.z);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.LineBasicMaterial({
    color: params.lineColor,
    transparent: true,
    opacity: params.lineOpacity,
  });

  growthLines = new THREE.LineSegments(geometry, material);
  growthGroup.add(growthLines);
}

function buildMeshGrowth(rings) {
  const segments = rings[0] ? rings[0].points.length : Math.max(3, params.segments);
  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);
  const positions = [];
  const colors = [];
  const indices = [];

  const totalRings = rings.length;
  const vertexPerRing = segments;

  function outerIndex(r, s) {
    return r * vertexPerRing + s;
  }

  for (let i = 0; i < rings.length; i += 1) {
    const color = baseColor.clone().lerp(ridgeColor, i / (rings.length - 1));
    const ring = rings[i].points;
    const center = rings[i].center;
    const mask = rings[i].mask || [];

    for (let j = 0; j < segments; j += 1) {
      const point = ring[j];
      const radial = point.clone().sub(center);
      if (radial.lengthSq() < 1e-6) {
        radial.set(1, 0, 0);
      }
      radial.normalize();

      const visibility = mask[j] || 0;
      positions.push(point.x, point.y, point.z);
      colors.push(
        color.r * visibility,
        color.g * visibility,
        color.b * visibility
      );
    }

  }

  for (let r = 0; r < totalRings - 1; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const next = (s + 1) % segments;
      const maskA = (rings[r].mask || [])[s] || 0;
      const maskB = (rings[r].mask || [])[next] || 0;
      const maskC = (rings[r + 1].mask || [])[s] || 0;
      const maskD = (rings[r + 1].mask || [])[next] || 0;
      if (maskA <= 0.02 && maskB <= 0.02 && maskC <= 0.02 && maskD <= 0.02) {
        continue;
      }
      const a = outerIndex(r, s);
      const b = outerIndex(r, next);
      const c = outerIndex(r + 1, s);
      const d = outerIndex(r + 1, next);
      indices.push(a, c, b, b, c, d);

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
  updateAttractor();
  updateBaseRing();
  const rings = generateRings();
  applyGlobalRelax(rings);

  const targetSegments = Math.max(3, params.segments);
  const simSegments = rings[0] ? rings[0].points.length : targetSegments;
  const displayRings =
    simSegments === targetSegments ? rings : resampleRings(rings, targetSegments);

  if (baseSeedRing && simSegments !== targetSegments) {
    const resampledBase = resampleRingByIndex(baseSeedRing, targetSegments);
    if (resampledBase) {
      baseSeedRing = resampledBase;
    }
  }

  if (displayRings[0] && displayRings[0].points) {
    firstGrowthRing = displayRings[0].points.map((point) => point.clone());
  }

  if (params.mode === "mesh") {
    buildMeshGrowth(displayRings);
    mergeAndSmoothMeshes();
  } else {
    buildLineGrowth(displayRings);
  }
  updateBakedDisplay();
}

function bakeGeometry() {
  const source =
    params.mode === "lines"
      ? growthLines || baseRingMesh
      : mergedMesh || growthMesh;
  if (!source || !source.geometry || !source.material) {
    return;
  }

  const geometry = source.geometry.clone();
  geometry.computeBoundingSphere();
  const material = source.material.clone();
  let baked = null;

  if (source.isLineSegments) {
    baked = new THREE.LineSegments(geometry, material);
  } else {
    baked = new THREE.Mesh(geometry, material);
  }

  source.updateMatrixWorld(true);
  baked.position.copy(source.getWorldPosition(new THREE.Vector3()));
  baked.quaternion.copy(source.getWorldQuaternion(new THREE.Quaternion()));
  baked.scale.copy(source.getWorldScale(new THREE.Vector3()));

  baked.userData.bakeIndex = bakedGroup.children.length;
  const baseOffset = params.ringRadius * 2.5 * params.bakeBaseOffset;
  const baseSpacing = params.ringRadius * 1.2 * params.bakeSpacing;
  const offset = baseOffset + baked.userData.bakeIndex * baseSpacing;
  baked.position.x += offset;

  baked.userData.isBaked = true;
  baked.userData.sourceGeometry = geometry;
  baked.userData.sourceMaterial = material;
  baked.userData.sourceMode = source.isLineSegments ? "lines" : "mesh";
  baked.frustumCulled = false;
  bakedGroup.add(baked);
  baked.updateMatrixWorld(true);
  createBakedHelper(baked, geometry);
  setSelection([baked]);
}

function updateBakedOffsets() {
  if (bakedGroup.children.length === 0) {
    return;
  }
  const baseOffset = params.ringRadius * 2.5 * params.bakeBaseOffset;
  const baseSpacing = params.ringRadius * 1.2 * params.bakeSpacing;

  for (const baked of bakedGroup.children) {
    if (!baked.userData || !baked.userData.isBaked) {
      continue;
    }
    const index = baked.userData.bakeIndex ?? 0;
    baked.position.x = baseOffset + index * baseSpacing;
  }
  updateSelectionPivot();
}

function clearBakes() {
  bakedSelection.length = 0;
  bakedControls.detach();
  bakedControls.visible = false;

  while (bakedGroup.children.length > 0) {
    const child = bakedGroup.children.pop();
    bakedHelpers.delete(child);
    if (child.geometry) {
      child.geometry.dispose();
    }
    if (child.material) {
      child.material.dispose();
    }
  }
}

function deleteLastBake() {
  const last = bakedGroup.children.pop();
  if (last) {
    bakedHelpers.delete(last);
    if (last.geometry) {
      last.geometry.dispose();
    }
    if (last.material) {
      last.material.dispose();
    }
  }
  const index = bakedSelection.indexOf(last);
  if (index >= 0) {
    bakedSelection.splice(index, 1);
  }
  updateSelectionPivot();
}

function mergeAndSmoothMeshes() {
  if (!growthMesh || !baseRingMesh) {
    return;
  }
  if (!(growthMesh.geometry && baseRingMesh.geometry)) {
    return;
  }

  const baseGeom = BufferGeometryUtils.mergeVertices(baseRingMesh.geometry.clone(), 1e-4);
  const growthGeom = BufferGeometryUtils.mergeVertices(growthMesh.geometry.clone(), 1e-4);
  const smoothSteps = Math.max(1, Math.min(15, Math.floor(params.smoothnessStrength)));
  smoothLaplacian(growthGeom, smoothSteps + 3, 0.24 + smoothSteps * 0.03);
  stitchSeam(baseGeom, growthGeom, params.attractorRadius * 4);
  const bridgeRings = Math.max(4, Math.min(12, Math.round(params.smoothnessStrength) + 2));
  const bridgeGeom = buildBridgeGeometry(baseSeedRing, firstGrowthRing, bridgeRings);
  const mergeList = bridgeGeom ? [baseGeom, growthGeom, bridgeGeom] : [baseGeom, growthGeom];
  const merged = BufferGeometryUtils.mergeGeometries(mergeList, true);
  if (!merged) {
    return;
  }
  const welded = BufferGeometryUtils.mergeVertices(merged, 1e-4);
  const seamRadius = Math.max(
    0.05,
    params.extrusionWidth * 1.5,
    params.stepLength * 6,
    params.attractorRadius * 4
  );
  lockSeamVertices(welded, baseSeedRing, firstGrowthRing, seamRadius);
  enforceRingRoundness(welded);
  const seamWeld = Math.min(0.015, seamRadius * 0.1);
  const seamWelded = BufferGeometryUtils.mergeVertices(welded, seamWeld);
  flipTriangleWinding(seamWelded);
  applyVerticalGradient(seamWelded, params.baseColor, params.ridgeColor);
  seamWelded.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 1,
    roughness: 0.5,
    metalness: 0.08,
    side: THREE.DoubleSide,
  });

  mergedMesh = new THREE.Mesh(seamWelded, material);
  growthGroup.add(mergedMesh);

  growthGroup.remove(growthMesh);
  growthMesh.geometry.dispose();
  growthMesh.material.dispose();
  growthMesh = null;

  growthGroup.remove(baseRingMesh);
  baseRingMesh.geometry.dispose();
  baseRingMesh.material.dispose();
  baseRingMesh = null;
}

function flipTriangleWinding(geometry) {
  const index = geometry.getIndex();
  if (!index) {
    return;
  }
  const indices = index.array;
  for (let i = 0; i < indices.length; i += 3) {
    const tmp = indices[i + 1];
    indices[i + 1] = indices[i + 2];
    indices[i + 2] = tmp;
  }
  index.needsUpdate = true;
}

function applyThickness(geometry, thickness, radiusScale) {
  const amount = Math.max(0, thickness);
  if (amount <= 0) {
    return geometry;
  }
  const scale = Math.max(0.1, radiusScale || 1);
  const source = geometry.index ? geometry : BufferGeometryUtils.mergeVertices(geometry, 1e-6);
  source.computeVertexNormals();
  const srcPos = source.getAttribute("position");
  const srcNorm = source.getAttribute("normal");
  const index = source.getIndex();
  if (!index) {
    return geometry;
  }

  const vertexCount = srcPos.count;
  const outerPositions = new Float32Array(vertexCount * 3);
  const innerPositions = new Float32Array(vertexCount * 3);

  for (let i = 0; i < vertexCount; i += 1) {
    const offset = amount * 0.5 * scale;
    const ox = srcPos.getX(i) + srcNorm.getX(i) * offset;
    const oy = srcPos.getY(i) + srcNorm.getY(i) * offset;
    const oz = srcPos.getZ(i) + srcNorm.getZ(i) * offset;
    const ix = srcPos.getX(i) - srcNorm.getX(i) * offset;
    const iy = srcPos.getY(i) - srcNorm.getY(i) * offset;
    const iz = srcPos.getZ(i) - srcNorm.getZ(i) * offset;
    outerPositions[i * 3] = ox;
    outerPositions[i * 3 + 1] = oy;
    outerPositions[i * 3 + 2] = oz;
    innerPositions[i * 3] = ix;
    innerPositions[i * 3 + 1] = iy;
    innerPositions[i * 3 + 2] = iz;
  }

  const indices = Array.from(index.array);
  const innerOffset = vertexCount;
  const combinedIndices = indices.slice();
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] + innerOffset;
    const b = indices[i + 1] + innerOffset;
    const c = indices[i + 2] + innerOffset;
    combinedIndices.push(a, c, b);
  }

  const edgeCount = new Map();
  for (let i = 0; i < indices.length; i += 3) {
    const tri = [indices[i], indices[i + 1], indices[i + 2]];
    for (let e = 0; e < 3; e += 1) {
      const a = tri[e];
      const b = tri[(e + 1) % 3];
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      edgeCount.set(key, (edgeCount.get(key) || 0) + 1);
    }
  }

  edgeCount.forEach((count, key) => {
    if (count !== 1) {
      return;
    }
    const parts = key.split("_");
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    const aInner = a + innerOffset;
    const bInner = b + innerOffset;
    combinedIndices.push(a, b, bInner, a, bInner, aInner);
  });

  const combined = new THREE.BufferGeometry();
  const combinedPositions = new Float32Array(vertexCount * 6);
  combinedPositions.set(outerPositions, 0);
  combinedPositions.set(innerPositions, vertexCount * 3);
  combined.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(combinedPositions, 3)
  );
  combined.setIndex(combinedIndices);
  combined.computeVertexNormals();
  return combined;
}

function applyVerticalGradient(geometry, baseHex, ridgeHex) {
  const position = geometry.getAttribute("position");
  if (!position) {
    return;
  }
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  if (!box) {
    return;
  }
  const minY = box.min.y;
  const maxY = box.max.y;
  const range = Math.max(1e-6, maxY - minY);
  const baseColor = new THREE.Color(baseHex);
  const ridgeColor = new THREE.Color(ridgeHex);
  const colors = new Float32Array(position.count * 3);

  for (let i = 0; i < position.count; i += 1) {
    const t = (position.getY(i) - minY) / range;
    const color = baseColor.clone().lerp(ridgeColor, t);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

function buildBridgeGeometry(baseRing, growthRing, ringCount) {
  if (!baseRing || !growthRing) {
    return null;
  }
  const count = Math.min(baseRing.length, growthRing.length);
  if (count < 3) {
    return null;
  }
  const bridges = Math.max(2, Math.floor(ringCount || 2));
  const positions = [];
  const colors = [];
  const indices = [];
  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);

  const rings = [];
  for (let r = 0; r < bridges; r += 1) {
    const t = r / (bridges - 1);
    const ring = [];
    for (let i = 0; i < count; i += 1) {
      ring.push(baseRing[i].clone().lerp(growthRing[i], t));
    }
    rings.push(ring);
  }

  for (let r = 0; r < rings.length - 1; r += 1) {
    const ringA = rings[r];
    const ringB = rings[r + 1];
    const tA = r / (rings.length - 1);
    const tB = (r + 1) / (rings.length - 1);
    for (let i = 0; i < count; i += 1) {
      const next = (i + 1) % count;
      const a = ringA[i];
      const b = ringA[next];
      const c = ringB[next];
      const d = ringB[i];

      const indexOffset = positions.length / 3;
      positions.push(
        a.x, a.y, a.z,
        b.x, b.y, b.z,
        c.x, c.y, c.z,
        d.x, d.y, d.z
      );

      const cA = baseColor.clone().lerp(ridgeColor, tA);
      const cB = baseColor.clone().lerp(ridgeColor, tA);
      const cC = baseColor.clone().lerp(ridgeColor, tB);
      const cD = baseColor.clone().lerp(ridgeColor, tB);
      colors.push(
        cA.r, cA.g, cA.b,
        cB.r, cB.g, cB.b,
        cC.r, cC.g, cC.b,
        cD.r, cD.g, cD.b
      );

      indices.push(
        indexOffset, indexOffset + 1, indexOffset + 2,
        indexOffset, indexOffset + 2, indexOffset + 3
      );
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
  return geometry;
}


function stitchSeam(baseGeometry, growthGeometry, radius) {
  const basePos = baseGeometry.getAttribute("position");
  const growthPos = growthGeometry.getAttribute("position");
  if (!basePos || !growthPos) {
    return;
  }
  const seamRadius = Math.max(0.01, radius);
  const seamRadiusSq = seamRadius * seamRadius;

  const basePoints = [];
  for (let i = 0; i < basePos.count; i += 1) {
    basePoints.push(
      new THREE.Vector3(basePos.getX(i), basePos.getY(i), basePos.getZ(i))
    );
  }

  for (let i = 0; i < growthPos.count; i += 1) {
    const gx = growthPos.getX(i);
    const gy = growthPos.getY(i);
    const gz = growthPos.getZ(i);
    let closest = null;
    let closestDist = Infinity;
    let closestIndex = -1;
    for (let j = 0; j < basePoints.length; j += 1) {
      const bp = basePoints[j];
      const dx = bp.x - gx;
      const dy = bp.y - gy;
      const dz = bp.z - gz;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < closestDist) {
        closestDist = d2;
        closest = bp;
        closestIndex = j;
      }
    }
    if (closest && closestDist <= seamRadiusSq) {
      const mx = (gx + closest.x) * 0.5;
      const my = (gy + closest.y) * 0.5;
      const mz = (gz + closest.z) * 0.5;
      growthPos.setXYZ(i, mx, my, mz);
      if (closestIndex >= 0) {
        basePos.setXYZ(closestIndex, mx, my, mz);
      }
    }
  }
  growthPos.needsUpdate = true;
  basePos.needsUpdate = true;
}

function lockSeamVertices(geometry, baseRing, growthRing, radius) {
  if (!geometry || !baseRing || !growthRing) {
    return geometry;
  }
  const count = Math.min(baseRing.length, growthRing.length);
  if (count < 3) {
    return geometry;
  }
  const radiusValue = Math.max(0.001, radius);
  const radiusSq = radiusValue * radiusValue;
  const targets = new Array(count);

  for (let i = 0; i < count; i += 1) {
    const a = baseRing[i];
    const b = growthRing[i];
    targets[i] = new THREE.Vector3(
      (a.x + b.x) * 0.5,
      (a.y + b.y) * 0.5,
      (a.z + b.z) * 0.5
    );
  }

  const position = geometry.getAttribute("position");
  for (let i = 0; i < position.count; i += 1) {
    const vx = position.getX(i);
    const vy = position.getY(i);
    const vz = position.getZ(i);
    let closest = -1;
    let closestDistSq = radiusSq;
    for (let j = 0; j < count; j += 1) {
      const t = targets[j];
      const dx = t.x - vx;
      const dy = t.y - vy;
      const dz = t.z - vz;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq < closestDistSq) {
        closestDistSq = distSq;
        closest = j;
      }
    }
    if (closest >= 0) {
      const t = targets[closest];
      const dist = Math.sqrt(closestDistSq);
      const influence = 1 - dist / radiusValue;
      position.setXYZ(
        i,
        vx + (t.x - vx) * influence,
        vy + (t.y - vy) * influence,
        vz + (t.z - vz) * influence
      );
    }
  }
  position.needsUpdate = true;
  return geometry;
}

function smoothStep(value) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function enforceRingRoundness(geometry) {
  const position = geometry.getAttribute("position");
  if (!position) {
    return;
  }
  const ringRadius = Math.max(0.001, params.ringRadius);
  const width = Math.max(0.001, params.extrusionWidth);
  const attractorPos = new THREE.Vector3(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  const zoneScale = Math.max(0.05, params.deformableZone || 1);
  const band = Math.max(width * 1.5, params.stepLength * 4);
  const minRadius = ringRadius - band;
  const maxRadius = ringRadius + band;
  const xLimit = width * 1.4;

  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    if (Math.abs(x) > xLimit) {
      continue;
    }
    const y = position.getY(i);
    const z = position.getZ(i);
    const radial = Math.sqrt(y * y + z * z);
    if (radial < minRadius || radial > maxRadius) {
      continue;
    }
    if (radial < 1e-6) {
      continue;
    }

    const influence = getSelectionInfluence(
      new THREE.Vector3(x, y, z),
      attractorPos
    );
    const shaped = smoothStep(Math.pow(influence, 0.6 * zoneScale));
    const lock = 1 - shaped;
    if (lock <= 0) {
      continue;
    }

    const scale = ringRadius / radial;
    const targetY = y * scale;
    const targetZ = z * scale;
    position.setXYZ(
      i,
      x,
      y + (targetY - y) * lock,
      z + (targetZ - z) * lock
    );
  }
  position.needsUpdate = true;
}

function smoothLaplacian(geometry, iterations, lambda) {
  const position = geometry.getAttribute("position");
  const index = geometry.getIndex();
  if (!position || !index) {
    return;
  }

  const vertexCount = position.count;
  const adjacency = Array.from({ length: vertexCount }, () => new Set());
  const indices = index.array;

  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i];
    const b = indices[i + 1];
    const c = indices[i + 2];
    adjacency[a].add(b);
    adjacency[a].add(c);
    adjacency[b].add(a);
    adjacency[b].add(c);
    adjacency[c].add(a);
    adjacency[c].add(b);
  }

  const temp = new Float32Array(vertexCount * 3);
  for (let iter = 0; iter < iterations; iter += 1) {
    for (let v = 0; v < vertexCount; v += 1) {
      const neighbors = adjacency[v];
      if (!neighbors || neighbors.size === 0) {
        temp[v * 3] = position.getX(v);
        temp[v * 3 + 1] = position.getY(v);
        temp[v * 3 + 2] = position.getZ(v);
        continue;
      }
      let nx = 0;
      let ny = 0;
      let nz = 0;
      neighbors.forEach((n) => {
        nx += position.getX(n);
        ny += position.getY(n);
        nz += position.getZ(n);
      });
      const inv = 1 / neighbors.size;
      nx *= inv;
      ny *= inv;
      nz *= inv;

      const px = position.getX(v);
      const py = position.getY(v);
      const pz = position.getZ(v);

      temp[v * 3] = px + (nx - px) * lambda;
      temp[v * 3 + 1] = py + (ny - py) * lambda;
      temp[v * 3 + 2] = pz + (nz - pz) * lambda;
    }

    for (let v = 0; v < vertexCount; v += 1) {
      position.setXYZ(v, temp[v * 3], temp[v * 3 + 1], temp[v * 3 + 2]);
    }
  }

  position.needsUpdate = true;
}



const gui = new GUI({ width: 250 });
const growthFolder = gui.addFolder("Growth");
growthFolder.add(params, "mode", ["mesh", "lines"]).onChange(buildGrowth);
growthFolder.add(params, "segments", 24, 400, 1).onChange(buildGrowth);
growthFolder.add(params, "simSegmentsCap", 60, 400, 1).onChange(buildGrowth);
growthFolder.add(params, "iterations", 4, 30, 1).onChange(buildGrowth);
growthFolder.add(params, "stepLength", 0.02, 0.4, 0.01).onChange(buildGrowth);
growthFolder.add(params, "twist", -6.28, 6.28, 0.01).onChange(buildGrowth);
growthFolder.add(params, "growthFalloff", 0.2, 3, 0.05).onChange(buildGrowth);

const baseFolder = gui.addFolder("Base");
baseFolder.add(params, "ringRadius", 0.2, 3, 0.05).onChange(buildGrowth);
baseFolder.add(params, "ringSegments", 60, 720, 1).onChange(buildGrowth);
baseFolder.add(params, "extrusionWidth", 0.1, 0.3, 0.01).onChange(buildGrowth);
baseFolder.add(params, "baseQuadDivisions", 1, 10, 1).onChange(buildGrowth);
baseFolder.add(params, "baseCullFalloff", 0.05, 1.5, 0.01).onChange(buildGrowth);
baseFolder.add(params, "deformableZone", 0.3, 2, 0.05).onChange(buildGrowth);

const leafFolder = gui.addFolder("Leaf");
leafFolder.add(params, "ruffleAmplitude", 0, 0.8, 0.01).onChange(buildGrowth);
leafFolder.add(params, "ruffleFrequency", 0.5, 12, 0.1).onChange(buildGrowth);
leafFolder.add(params, "ruffleGrowth", 0, 2, 0.05).onChange(buildGrowth);
leafFolder.add(params, "leafGrowth", 0, 3, 0.05).onChange(buildGrowth);
leafFolder.add(params, "ridgeLift", 0, 0.6, 0.01).onChange(buildGrowth);
leafFolder.add(params, "ridgeSharpness", 0.2, 3, 0.05).onChange(buildGrowth);
leafFolder.add(params, "curl", -0.85, 0.85, 0.01).onChange(buildGrowth);
leafFolder.add(params, "bowl", -0.3, -0.05, 0.01).onChange(buildGrowth);
leafFolder.add(params, "taper", 0, 1.2, 0.01).onChange(buildGrowth);

const attractorFolder = gui.addFolder("Attractor");
attractorFolder.add(params, "attractorRadius", 0.1, 0.2, 0.01).onChange(buildGrowth);
attractorFolder
  .add(params, "attractorStrength", 0, 1.2, 0.01)
  .onChange(buildGrowth);
attractorFolder.add(params, "attractorBias", -0.2, 0.6, 0.01).onChange(buildGrowth);

const materialFolder = gui.addFolder("Material");
materialFolder.add(params, "meshOpacity", 0.2, 1, 0.01).onChange(buildGrowth);
materialFolder.add(params, "lineOpacity", 0.1, 1, 0.01).onChange(buildGrowth);
materialFolder.add(params, "smoothnessStrength", 1, 15, 1).onChange(buildGrowth);

const collisionFolder = gui.addFolder("Collision");
collisionFolder.add(params, "collisionStrength", 0, 1, 0.01).onChange(buildGrowth);
collisionFolder.add(params, "collisionIterations", 0, 15, 1).onChange(buildGrowth);
collisionFolder.add(params, "collisionRange", 1, 10, 0.05).onChange(buildGrowth);

const colorFolder = gui.addFolder("Color");
colorFolder.addColor(params, "baseColor").onChange(buildGrowth);
colorFolder.addColor(params, "ridgeColor").onChange(buildGrowth);
colorFolder.addColor(params, "lineColor").onChange(buildGrowth);

const viewFolder = gui.addFolder("View");
viewFolder.add(params, "autoRotate");
viewFolder.add({ bakeGeometry }, "bakeGeometry");
viewFolder.add({ deleteLastBake }, "deleteLastBake");
viewFolder.add({ clearBakes }, "clearBakes");
viewFolder.add(params, "bakeBaseOffset", 0.5, 4, 0.05).onChange(updateBakedOffsets);
viewFolder.add(params, "bakeSpacing", 0.5, 4, 0.05).onChange(updateBakedOffsets);

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

function onBakePointerDown(event) {
  if (event.button !== 0) {
    return;
  }
  if (event.target && event.target.closest && event.target.closest(".lil-gui")) {
    return;
  }
  if (bakedControls.dragging) {
    return;
  }
  const rect = renderer.domElement.getBoundingClientRect();
  bakePointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  bakePointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  bakeRaycaster.setFromCamera(bakePointer, camera);
  const hits = bakeRaycaster.intersectObjects(bakedGroup.children, true);
  let picked = null;
  if (hits.length > 0) {
    picked = hits[0].object;
    if (picked.userData.bakeTarget) {
      picked = picked.userData.bakeTarget;
    } else {
      while (picked && !picked.userData.isBaked && picked.parent) {
        picked = picked.parent;
      }
    }
  } else {
    let closest = null;
    let closestDist = Infinity;
    const screenPos = new THREE.Vector3();
    const offsetPos = new THREE.Vector3();
    const cameraRight = new THREE.Vector3();
    cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);

    for (const baked of bakedGroup.children) {
      if (!baked.userData || !baked.userData.isBaked) {
        continue;
      }
      const sourceGeom = baked.userData.sourceGeometry || baked.geometry;
      if (!sourceGeom || !sourceGeom.boundingSphere) {
        continue;
      }
      baked.getWorldPosition(screenPos);
      screenPos.project(camera);
      const sx = ((screenPos.x + 1) * 0.5) * rect.width + rect.left;
      const sy = ((-screenPos.y + 1) * 0.5) * rect.height + rect.top;

      const worldRadius =
        sourceGeom.boundingSphere.radius *
        Math.max(baked.scale.x, baked.scale.y, baked.scale.z);
      offsetPos.copy(cameraRight).multiplyScalar(worldRadius).add(baked.position);
      offsetPos.project(camera);
      const sx2 = ((offsetPos.x + 1) * 0.5) * rect.width + rect.left;
      const sy2 = ((-offsetPos.y + 1) * 0.5) * rect.height + rect.top;
      const screenRadius = Math.max(12, Math.hypot(sx2 - sx, sy2 - sy));

      const dx = sx - event.clientX;
      const dy = sy - event.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= screenRadius * 1.1 && dist < closestDist) {
        closestDist = dist;
        closest = baked;
      }
    }
    if (closest) {
      picked = closest;
    }
  }

  if (picked && picked.userData && picked.userData.isBaked) {
    if (event.shiftKey) {
      toggleSelection(picked);
    } else {
      setSelection([picked]);
    }
    return;
  }

  if (!event.shiftKey) {
    bakedSelection.length = 0;
    bakedControls.detach();
    bakedControls.visible = false;
  }
}

window.addEventListener("pointerdown", onBakePointerDown, true);

buildGrowth();
animate();
