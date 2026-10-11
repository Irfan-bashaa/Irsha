import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Smartphone, Cpu, ShoppingBag, Cloud, Zap } from 'lucide-react';

export default function Hero3DCore() {
  const containerRef = useRef(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect mobile or low performance
    const isMobile = window.innerWidth < 768;
    if (isMobile) setIsLowPower(true);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Group for all core elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core - Inner Glowing Blue Nucleus
    const innerCoreGeo = new THREE.SphereGeometry(1.05, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x3d7fff,
      emissive: 0x3d7fff,
      emissiveIntensity: 1.3,
      roughness: 0.18,
      metalness: 0.4,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // 2. High-Tech Architectural Navy & Glass Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.65, 2);
    const cageWireGeo = new THREE.WireframeGeometry(cageGeo);
    const cageWireMat = new THREE.LineBasicMaterial({
      color: 0x3d7fff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.NormalBlending,
    });
    const cageLines = new THREE.LineSegments(cageWireGeo, cageWireMat);
    coreGroup.add(cageLines);

    // Translucent crystalline glass outer facets
    const cageGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.08,
      roughness: 0.08,
      transmission: 0.86,
      thickness: 1.2,
      ior: 1.52,
      transparent: true,
      opacity: 0.75,
    });
    const cageGlass = new THREE.Mesh(cageGeo, cageGlassMat);
    coreGroup.add(cageGlass);

    // 3. Orbital Containment Rings (Electric Blue Precision Rings)
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x4f8cff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xbfd7ff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Digital Blue Energy Particles
    const particleCount = isMobile ? 160 : 340;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color('#4F8CFF'),
      new THREE.Color('#6EA8FF'),
      new THREE.Color('#BFD7FF'),
      new THREE.Color('#3D7FFF'),
      new THREE.Color('#FFFFFF'),
    ];

    for (let i = 0; i < particleCount; i++) {
      const r = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Canvas particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const cctx = canvas.getContext('2d');
    const grad = cctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(79, 140, 255, 0.85)');
    grad.addColorStop(0.8, 'rgba(110, 168, 255, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    cctx.fillStyle = grad;
    cctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleCloud);

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const bluePointLight = new THREE.PointLight(0x4f8cff, 3.8, 12);
    bluePointLight.position.set(0, 0, 0);
    scene.add(bluePointLight);

    const softBlueLight = new THREE.DirectionalLight(0xbfd7ff, 2.2);
    softBlueLight.position.set(4, 5, 4);
    scene.add(softBlueLight);

    const contrastLight = new THREE.DirectionalLight(0xedf1f7, 1.5);
    contrastLight.position.set(-5, -3, -2);
    scene.add(contrastLight);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width - 0.5) * 1.5;
      mouse.targetY = -(clientY / rect.height - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const startTime = performance.now();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      coreGroup.rotation.y = elapsed * 0.14 + mouse.x * 0.4;
      coreGroup.rotation.x = Math.sin(elapsed * 0.09) * 0.1 + mouse.y * 0.3;

      cageLines.rotation.y = -elapsed * 0.09;
      cageLines.rotation.z = elapsed * 0.05;
      cageGlass.rotation.copy(cageLines.rotation);

      ring1.rotation.z = elapsed * 0.22;
      ring2.rotation.y = -elapsed * 0.18;

      const pulse = 1 + Math.sin(elapsed * 2.2) * 0.035;
      innerCore.scale.set(pulse, pulse, pulse);
      innerCoreMat.emissiveIntensity = 1.4 + Math.sin(elapsed * 2.8) * 0.35;

      const positionsAttr = particleGeo.attributes.position;
      const posArray = positionsAttr.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const x = posArray[idx];
        const z = posArray[idx + 2];
        const angle = 0.003;
        posArray[idx] = x * Math.cos(angle) - z * Math.sin(angle);
        posArray[idx + 2] = x * Math.sin(angle) + z * Math.cos(angle);
      }
      positionsAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      cageGeo.dispose();
      cageWireGeo.dispose();
      cageWireMat.dispose();
      cageGlassMat.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      pTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] md:h-[620px] lg:h-[680px] flex items-center justify-center">
      {/* Background Volumetric Blue Glow */}
      <div 
        className="absolute w-[340px] md:w-[480px] h-[340px] md:h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.20) 0%, rgba(110, 168, 255, 0.08) 35%, rgba(61, 127, 255, 0.02) 60%, transparent 80%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Light Mode Ground Shadow */}
      <div 
        className="absolute bottom-8 w-[320px] md:w-[440px] h-[36px] rounded-[100%] pointer-events-none transition-opacity duration-500 opacity-95"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(13, 19, 32, 0.12) 0%, rgba(61, 127, 255, 0.06) 35%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />

      {/* 3D WebGL Canvas Mount */}
      <div ref={containerRef} className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing" />

      {/* 6 Floating Interface Panels positioned around the 3D core */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
        {/* Module 1: Web Systems (Top Right) */}
        <div className="absolute top-[12%] right-[10%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#192235]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl hover:border-[#4F8CFF]/60 group transition-all">
            <span className="w-2 h-2 rounded-full bg-[#4F8CFF] dark:bg-[#4F8CFF] animate-ping" />
            <Globe className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wider">Web Architecture</span>
          </div>
        </div>

        {/* Module 2: AI Intelligence (Top Left) */}
        <div className="absolute top-[18%] left-[6%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#192235]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl hover:border-[#4F8CFF]/60 group transition-all">
            <Cpu className="w-4 h-4 text-[#BFD7FF] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wider">AI Engines</span>
            <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-[#4F8CFF]/15 text-[#3D7FFF] dark:text-[#6EA8FF] rounded border border-[#4F8CFF]/25">v4.2</span>
          </div>
        </div>

        {/* Module 3: Mobile Apps (Bottom Left) */}
        <div className="absolute bottom-[20%] left-[8%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#192235]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl hover:border-[#4F8CFF]/60 group transition-all">
            <Smartphone className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wider">Mobile Systems</span>
          </div>
        </div>

        {/* Module 4: E-Commerce (Bottom Right) */}
        <div className="absolute bottom-[16%] right-[8%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#192235]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl hover:border-[#4F8CFF]/60 group transition-all">
            <ShoppingBag className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wider">E-Commerce Ecosystem</span>
          </div>
        </div>

        {/* Module 5: Cloud Infrastructure (Middle Right Edge) */}
        <div className="absolute top-[48%] right-[2%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#192235]/85 backdrop-blur-md border border-[var(--border-subtle)] shadow-xs hover:border-[#4F8CFF]/50 group transition-all">
            <Cloud className="w-3.5 h-3.5 text-[#BFD7FF]" />
            <span className="text-[11px] font-medium text-[var(--text-secondary)]">Zero-Latency Cloud</span>
          </div>
        </div>

        {/* Module 6: Automation (Middle Left Edge) */}
        <div className="absolute top-[48%] left-[2%] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#192235]/85 backdrop-blur-md border border-[var(--border-subtle)] shadow-xs hover:border-[#4F8CFF]/50 group transition-all">
            <Zap className="w-3.5 h-3.5 text-[#3D7FFF] dark:text-[#6EA8FF]" />
            <span className="text-[11px] font-medium text-[var(--text-secondary)]">Real-time Automation</span>
          </div>
        </div>
      </div>

      {/* Interactive Core Control Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#192235]/80 border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] backdrop-blur shadow-xs pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
        Interactive 3D Core • Drag to Rotate
      </div>
    </div>
  );
}
