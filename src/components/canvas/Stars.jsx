import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { TextureLoader, AdditiveBlending } from "three";
import CanvasLoader from '../Loader'
import { inSphere } from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => inSphere(new Float32Array(15000 * 3), { radius: 7 }));
  const texture = useLoader(TextureLoader, "cyan-blue.webp")

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 17;

    ref.current.rotation.y = 0;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          map={texture}
          color='#f272c8'
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full fixed inset-0 z-[-1] pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader/>}>
          <Stars />

        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
