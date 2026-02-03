import { motion, useScroll, useSpring, useTransform } from "motion/react"
import HeroText from "./HeroText"


const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { damping: 50 })
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "50%"])
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"])
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "20%"])
  const mountain1Y = useTransform(x, [0, 0.3], ["0%", "30%"])
  return (
    <section className="absolute inset-0 ">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-60"
          style={{
            backgroundImage: "url(assets/bg-reallygood.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }} />
          <div
          className="absolute  w-full h-screen -z-40"
          style={{
            backgroundImage: "url(assets/clouds-main2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }} />

          <HeroText />

          <motion.img
          src="assets/clouds-random.png"
          className="absolute bottom-[20vh]  left:0 md:left-[-40vh]  w-full h-auto md:bottom-[-30vh] -z-30 "
          style={{ y: mountain1Y }}
          />


          <motion.img
          src="assets/clouds-random.png"
          className="absolute bottom-[20vh]  left:0 md:left-[-10vh]  w-full h-auto md:bottom-[-20vh] -z-35 "
          style={{ y: mountain2Y }}
          />
       



        <motion.div className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(assets/mountains-white.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y
          }} />
      
      </div>
    </section>
  )
}

export default ParallaxBackground
