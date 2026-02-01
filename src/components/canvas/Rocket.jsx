import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Rocket = () => {
  const { scene: rocket } = useGLTF('/rocket/scene.gltf')
  const rocketRef = useRef();

  // State untuk menyimpan nilai random agar setiap kali reload kecepatannya beda
  const [config] = useState(() => ({
    speed: Math.random() * 0.8 + 0.4,
    range: 100,
    offset: Math.random() * Math.PI
  }));

  useFrame((state) => {
    if (rocketRef.current) {
      const time = state.clock.getElapsedTime();

      // Lalu ditambahkan efek Math.sin untuk naik turun
      const yBase = -750;
      rocketRef.current.position.y =
        yBase + Math.sin(time * config.speed + config.offset) * config.range;
      rocketRef.current.rotation.y += 0.01;
    }
  });

  React.useLayoutEffect(() => {
    rocket.traverse((object) => {
      if (object.isMesh) {

        // Hilangkan objek berdasarkan nama
        const name = object.name.toLowerCase();
        if (name.includes("moon") || name.includes("asteroid") || name.includes("planet")) {
          object.visible = false; // Menyembunyikan objek
        }
      }
    });
  }, [rocket]);
  return (
    <primitive
      ref={rocketRef}
      object={rocket}
      scale={0.7}
      position={[0, -700, 0]} />
  )
}

const RocketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}

      camera={{
        fov: 45,             // Standar pandangan mata manusia
        near: 1,             // Jarak terdekat yang bisa dilihat
        far: 5000,           // WAJIB BESAR karena roketmu berukuran ~800 unit
        position: [800, 500, 1000], // Mundurkan kamera agar roket terlihat utuh
      }}>
      <Suspense fallback={null}>


        {/* 2. Ambient: Cahaya dasar tipis saja agar bayangan tidak terlalu hitam pekat */}
        <ambientLight intensity={0.5} />

        {/* 3. HemisphereLight: (FIXED) Cahaya dari langit (biru putih) dan tanah (abu) */}
        <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.5} />

        {/* Directional Light: Kiri Depan, Sedikit Ke Atas */}
        <directionalLight
          position={[-500, -300, 2000]}
          /* X: -1200 -> Jauh di Kiri
             Y: -600  -> Sedikit di atas badan roket (karena roket di -750)
             Z: 800   -> Di depan roket
          */
          intensity={4}
          castShadow
        />

        {/* Point Light: Fill light dari kanan untuk menerangi bayangan agar tidak terlalu gelap */}
        <pointLight position={[1000, -750, 200]} intensity={1.5} color="#ffffff" />

        <Rocket />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default RocketCanvas
