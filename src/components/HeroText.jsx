import { FlipWords } from "./FlipWord"
import { motion, useScroll, useSpring, useTransform } from "motion/react"



const HeroText = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { damping: 50 })
  const textY = useTransform(x, [0, 0.1], ["0%", "-200%"])
  const text2Y = useTransform(x, [0, 0.1], ["0%", "100%"])

  const words = [ "Modern", "Scalable"]
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }


  return (
    <div className="relative min-h-screen flex justify-center text-center z-20 md:translate-y-[24vh] translate-y-[0] translate-x-0 md:translate-x-10 ">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space ">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none transform scale-x-150 text-[3rem] text-transparent [-webkit-text-stroke:1px_#F9EAD3]"
          style={{ y: textY }}
        >
          Hi I'm Dyah
        </motion.h1>

        <div className="flex flex-col">
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            style={{y:text2Y}}
          >I Design &  Build <br /> Things for the Web</motion.p>

          {/* <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
          <FlipWords words={words} className="font-black text-white text-4xl" />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >Web Solutions</motion.p> */}
        </div>
      </div>

      {/* Mobile View */}
       <div className="flex flex-col md:hidden translate-y-[20vh] ">
        <motion.h1
          className="font-poster font-black uppercase tracking-tighter leading-none scale-x-150 text-[3rem] sm:text-[3.5rem] px-4 text-transparent
          [-webkit-text-stroke:1px_#F9EAD3] text-center "
          style={{ y: textY }}
        >
          Hi I'm Dyah
        </motion.h1>
        <div>
          <motion.p className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{y:text2Y}}
          transition={{ delay: 1.2 }}>I'm Building</motion.p>
          <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{y:text2Y}}
          transition={{ delay: 1.5 }}><FlipWords words={words} className="font-black text-white text-4xl" /></motion.div>
          <motion.p className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{y:text2Y}}
          transition={{ delay: 1.8 }}>Web Aplications</motion.p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
