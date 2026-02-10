import { motion, useScroll, useSpring, useTransform } from "motion/react"
import HeroText from "./HeroText"

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { damping: 50 })

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "50%"])
  // const planetsY = useTransform(x, [0, 0.5], ["0%", "-40%"]) 
  // const pinkclouds2Y = useTransform(x, [0, 0.5], ["0%", "15%"])
  const mountainY = useTransform(x, [0, 0.5], ["0%", "30%"])

  return (
    <section className="absolute inset-0 w-full h-screen overflow-hidden">
      <div className="relative h-full w-full">
 
        {/* 1. Background Sky*/}
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(assets/bg-loseless.webp)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        /> */}

        {/* 2. Saturn*/}
        {/* <motion.div
          className="absolute top-[15%] md:top-[20%] left-[10%] md:left-[-5%] w-[35%] md:w-[33%] z-10"
          style={{ y: planetsY }}
        >
          <img src="assets/saturn.png" alt="saturn" className="w-full h-auto" />
        </motion.div> */}


        {/* 4. Moon/Overlay  */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: "url(assets/moon.webp)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
          loading="lazy"
        />

        {/* <HeroText /> */}

        {/* 6. Clouds - */}
        {/* <motion.img
          src="assets/clouds-random.png"
          className="absolute bottom-[20%] md:bottom-[-40%] left-0 md:left-[-25vh] w-full min-w-[120%] h-auto z-30 object-cover"
          style={{ y: pinkclouds2Y, x: "-10%" }}
        /> */}

        {/* 7. Mountains 1 (White 1) */}
        <motion.div
          className="absolute inset-0 z-40"
          style={{
            backgroundImage: "url(assets/mountains-white1.webp)",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
            y: mountain3Y
          }}
          loading="lazy"
        />

        {/* 8. Mountains 2 (White 2 - Layer Paling Depan) */}
        <motion.div
          className="absolute inset-0 z-50"
          style={{
            backgroundImage: "url(assets/mountains-white2.webp)",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
            y: mountainY
          }}
          loading="lazy"
        />

        {/* Layer Gradasi (Fog) di atas kaki gunung */}
        <div
          className="absolute inset-x-0 bottom-0 z-[51] pointer-events-none"
          style={{
            height: '13vh', 
            background: 'linear-gradient(to top, #030412 0%, rgba(3, 4, 18, 0.5) 40%, transparent 100%)'
          }}
        />
      </div>
    </section>
  )
}

export default ParallaxBackground