import { FlipWords } from "./FlipWord"
import { motion, useScroll, useSpring, useTransform } from "motion/react"


const HeroText = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { damping: 30 })
  const mountain3Y = useTransform(x, [0, 0.1], ["0%", "100%"])
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center -z-50 md:-translate-y-[23vh] -translate-x-0 md:-translate-x-10 ">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none transform scale-x-90 text-[9rem] bg-gradient-to-r from-[#e6a99a] via-[#f2c8a5] to-[#f9e8d5] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,210,170,0.6)] drop-shadow-[0_0_40px_rgba(255,170,140,0.3)]"
          style={{y:mountain3Y}}
         >
          Hi I'm Dyah</motion.h1>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none scale-x-90 text-[3.5rem] sm:text-[4.5rem] px-4 -translate-y-[10vh]
          bg-gradient-to-r from-[#e6a99a] via-[#f2c8a5] to-[#f9e8d5] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,210,170,0.6)] drop-shadow-[0_0_30px_rgba(255,170,140,0.3)] text-center "
         style={{y:mountain3Y}}
        >
          Hi I'm Dyah
        </motion.h1>
      </div>
    </div>
  )
}

export default HeroText
