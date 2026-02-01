import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motions';


const ServiceCard = ({ title, icon, index }) => {
  const direction = index < 2 ? "right" : "left"

  return (
    <Tilt className='w-full sm:w-60 md:w-64'>
      <motion.div
        variants={fadeIn(direction, "spring", 0.1, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className='w-full bg-[linear-gradient(90.13deg,#00cea8_1.9%,#bf61ff_97.5%)] p-[1px] rounded-[20px] shadow-lg shadow-purple-500/30'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-[#151030] rounded-[20px] px-5 py-12 min-h-[280px] flex justify-evenly items-center flex-col'>

          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {

  const services = [
    {
      title: "Web Developer",
      icon: "/assets/logos/blazorpink.png",
    },
    {
      title: "React Native Developer",
      icon: "/assets/logos/blazorpink.png",
    },
    {
      title: "Backend Developer",
      icon: "/assets/logos/blazorpink.png",
    },
    {
      title: "Content Creator",
      icon: "/assets/logos/blazorpink.png",
    },
  ];

  return (
    <div className='mt-[20vh] mx-auto c-space max-w-7xl justify-center'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}>
        <p>INTRODUCTION</p>
        <h2 className='text-7xl font-bold'>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I have an educational background in Information Technology, complemented by a strong passion for coding and proven experience in building web applications. I am a detail-oriented coder, a problem-solving thinker, and a collaborative communicator.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

    </div>
  )
}

export default About
