import { useState } from 'react'
import { motion } from 'framer-motion'
import { RocketCanvas } from '../components/canvas'
import { slideIn } from '../utils/motions'



const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("access_key", "1729cff9-aba1-4e7a-b54c-505c25cdbfc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json()
    setResult(data.success ? "Message sent successfully" : "Something went wrong")
  }


  return (
    <div className=' mt-4 md:mt-[20vh] c-space mx-auto max-w-7xl justify-center  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl'>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>

        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact</h3>

        <form onSubmit={onSubmit}
          className='mt-12 flex flex-col gap-8'
          action="">
          <label
            className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholde:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label
            className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholde:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label
            className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              row='7'
              name='message'
              placeholder="What do you want to say?"
              className='bg-[#151030] py-4 px-6 placeholde:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button
            type='submit'
            className='bg-[#151030] py-3 px-8 outlined-none border-none w-fit text-white font-bold shadows-md shadow-primary rounded-xl'>
            send

          </button>
          <p>{result}</p>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <RocketCanvas />

      </motion.div>
    </div>
  )
}

export default Contact
