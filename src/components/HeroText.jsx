import { FlipWords } from "./FlipWord"
import { motion, useScroll, useSpring, useTransform } from "motion/react"


const HeroText = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { damping: 50 })
  const mountain3Y = useTransform(x, [0, 0.1], ["0%", "500%"])
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center z-20 md:-translate-y-[3vh] -translate-x-0 md:-translate-x-10 ">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none transform scale-x-150 text-[4rem] text-transparent [-webkit-text-stroke:1px_#F9EAD3]"
          style={{ y: mountain3Y }}
        >
          Hi I'm Dyah
        </motion.h1>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none scale-x-90 text-[3.5rem] sm:text-[4.5rem] px-4 -translate-y-[20vh] text-transparent
          [-webkit-text-stroke:1px_#F9EAD3] text-center "
          style={{ y: mountain3Y }}
        >
          Hi I'm Dyah
        </motion.h1>
      </div>
    </div>
  )
}

export default HeroText
