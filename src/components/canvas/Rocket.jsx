//This work is based on "Rocket Scene" (https://sketchfab.com/3d-models/rocket-scene-a58dcf289796461e8a8d5bff3f1d3e4d) by nickheitzman (https://sketchfab.com/nickheitzman) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Rocket = () => {
  const { scene: rocket } = useGLTF('/rocket/scene.gltf')
  const rocketRef = useRef();
  const lightRef = useRef();


  useFrame((state) => {
    if (rocketRef.current) {
      const time = state.clock.getElapsedTime()
      const yBase = -750;
      rocketRef.current.position.y = yBase + Math.sin(time * 0.5) * 100
      rocketRef.current.rotation.y += 0.01

      if (lightRef.current) {
        lightRef.current.target = rocketRef.current
      }
    }
  })


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
        const name = object.name.toLowerCase();
        if (name.includes("moon") || name.includes("asteroid") || name.includes("planet")) {
          object.visible = false;
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

    // camera={{
    //   fov: 45,
    //   near: 1,
    //   far: 5000,
    //   position: [800, 500, 1000],
    // }}

    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.5} />

        <PerspectiveCamera
          makeDefault
          fov={45}
          near={1}
          far={5000}
          position={[800, 500, 1000]}
          >
          <directionalLight
            position={[-2000, -300, 500]}
            /* X: -1200 -> Jauh di Kiri
               Y: -600  -> Sedikit di atas badan roket (karena roket di -750)
               Z: 800   -> Di depan roket
            */
            intensity={4}
            castShadow
          />
        </PerspectiveCamera>



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
