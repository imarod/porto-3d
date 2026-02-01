import { motion } from 'framer-motion'

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: "/assets/tech/html.png",
    },
    {
      name: "CSS 3",
      icon: "/assets/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.png",
    },
    {
      name: "React JS",
      icon: "/assets/tech/reactjs.png",
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: "/assets/tech/redux.png",
    // },
    {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwind.png",
    },
    {
      name: "Node JS",
      icon: "/assets/tech/nodejs.png",
    },
    {
      name: "Laravel",
      icon: "/assets/tech/laravel.svg",
    },
    {
      name: "Three JS",
      icon: "/assets/tech/threejs.svg",
    },
    {
      name: "git",
      icon: "/assets/tech/git.png",
    },
    {
      name: "figma",
      icon: "/assets/tech/figma.png",
    },
    // {
    //   name: "docker",
    //   icon: "/assets/tech/docker.png",
    // },
  ];


  return (
    <div className=" mx-auto c-space max-w-7xl justify-center">
       <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}>
       
        <h2 className='text-7xl font-bold'>Tech</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-17 h-17 md:w-22 md:h-22 rounded-full border border border-tertiary bg-white backdrop-blur-md flex items-center justify-center" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <img src={technology.icon} alt={technology.name} className="w-12 h-12 md:w-15 md:h-15" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Tech
