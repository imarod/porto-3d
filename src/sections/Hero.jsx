
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { useFrame } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />      
    </section>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 5, 1 + state.mouse.y / 5, 3],
      0.5, delta
    )
  })
}


export default Hero
