import React , {Suspense}from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useGLTF } from '@react-three/drei'
const Galaxy = () => {
    // Arahkan ke lokasi file di folder public
    const { scene } = useGLTF('/galaxy/scene.gltf')

    scene.traverse((object) => {
    if (object.isMesh || object.isPoints) {
      object.material.vertexColors = true; // WAJIB untuk model jenis ini
      object.material.transparent = true;
      object.material.opacity = 0.8; // Atur transparansi agar terlihat seperti gas
    }
  });

    return (
        <primitive
            object={scene}
            scale={10} // Kamu bisa ubah angka ini jika galaksinya kekecilan/kegedean
            position-y={0}
            rotation-y={0}
        />
    )
}

const GalaxyCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-2]"> {/* Container agar canvas punya ukuran */}
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 500, // Galaksi biasanya luas, jadi far-nya agak besar
          position: [10, 50, 50], // Mundurkan kamera sedikit agar terlihat luas
        }}
      >
        {/* Suspense menangani loading model yang berat */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5} // Galaksi berputar pelan agar estetik
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <Galaxy />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyCanvas;