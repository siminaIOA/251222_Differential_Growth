import "./style.css";
import * as THREE from "three";
import GUI from "lil-gui";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#f1efe6");

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

document.getElementById("app").appendChild(renderer.domElement);

const growthGroup = new THREE.Group();
scene.add(growthGroup);

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

const axesHelper = new THREE.AxesHelper(2.5);
axesHelper.material.transparent = true;
axesHelper.material.opacity = 0.4;
scene.add(axesHelper);

const params = {
  segments: 96,
  iterations: 34,
  stepLength: 0.12,
  ringRadius: 1.4,
  scale: 0.45,
  twist: 3.1,
  attractorX: 0.6,
  attractorY: 1.2,
  attractorZ: -0.4,
  attractorRadius: 1.4,
  attractorStrength: 0.35,
  ridgeColor: "#ff7a59",
  baseColor: "#1b3a4b",
  autoRotate: true,
};

let growthLines = null;

function generateRings() {
  const rings = [];
  const center = new THREE.Vector3(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  const step = params.stepLength;
  const total = Math.max(1, params.iterations);
  const segments = Math.max(3, params.segments);

  for (let i = 0; i <= total; i += 1) {
    const t = i / total;
    const twist = params.twist * t;
    const radius = params.ringRadius * (1 + params.scale * t);
    const y = step * i;
    const ring = [];

    for (let j = 0; j < segments; j += 1) {
      const angle = (Math.PI * 2 * j) / segments + twist;
      const point = new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );

      if (params.attractorStrength > 0) {
        const toCenter = center.clone().sub(point);
        const dist = toCenter.length();
        if (dist < params.attractorRadius) {
          const falloff = 1 - dist / params.attractorRadius;
          point.addScaledVector(
            toCenter.normalize(),
            params.attractorStrength * falloff
          );
        }
      }

      ring.push(point);
    }

    rings.push(ring);
  }

  return rings;
}

function buildGrowth() {
  if (growthLines) {
    growthGroup.remove(growthLines);
    growthLines.geometry.dispose();
    growthLines.material.dispose();
  }

  const rings = generateRings();
  const positions = [];
  const colors = [];
  const segments = Math.max(3, params.segments);

  const baseColor = new THREE.Color(params.baseColor);
  const ridgeColor = new THREE.Color(params.ridgeColor);

  for (let i = 0; i < rings.length; i += 1) {
    const color = baseColor.clone().lerp(ridgeColor, i / (rings.length - 1));
    const ring = rings[i];

    for (let j = 0; j < segments; j += 1) {
      const current = ring[j];
      const next = ring[(j + 1) % segments];

      positions.push(current.x, current.y, current.z);
      positions.push(next.x, next.y, next.z);
      colors.push(color.r, color.g, color.b, color.r, color.g, color.b);

      if (i < rings.length - 1) {
        const upper = rings[i + 1][j];
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
    opacity: 0.95,
  });

  growthLines = new THREE.LineSegments(geometry, material);
  growthGroup.add(growthLines);

  attractorMesh.position.set(
    params.attractorX,
    params.attractorY,
    params.attractorZ
  );
  attractorMesh.geometry.dispose();
  attractorMesh.geometry = new THREE.SphereGeometry(params.attractorRadius, 32, 32);
}

const gui = new GUI({ width: 320 });
const growthFolder = gui.addFolder("Growth");
growthFolder.add(params, "segments", 24, 160, 1).onChange(buildGrowth);
growthFolder.add(params, "iterations", 4, 80, 1).onChange(buildGrowth);
growthFolder.add(params, "stepLength", 0.02, 0.4, 0.01).onChange(buildGrowth);
growthFolder.add(params, "ringRadius", 0.2, 3, 0.05).onChange(buildGrowth);
growthFolder.add(params, "scale", -0.5, 1.4, 0.01).onChange(buildGrowth);
growthFolder.add(params, "twist", -6.28, 6.28, 0.01).onChange(buildGrowth);

const attractorFolder = gui.addFolder("Attractor");
attractorFolder.add(params, "attractorX", -4, 4, 0.05).onChange(buildGrowth);
attractorFolder.add(params, "attractorY", -2, 5, 0.05).onChange(buildGrowth);
attractorFolder.add(params, "attractorZ", -4, 4, 0.05).onChange(buildGrowth);
attractorFolder.add(params, "attractorRadius", 0.2, 4, 0.05).onChange(buildGrowth);
attractorFolder
  .add(params, "attractorStrength", 0, 1.2, 0.01)
  .onChange(buildGrowth);

const colorFolder = gui.addFolder("Color");
colorFolder.addColor(params, "baseColor").onChange(buildGrowth);
colorFolder.addColor(params, "ridgeColor").onChange(buildGrowth);

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
}

buildGrowth();
animate();
