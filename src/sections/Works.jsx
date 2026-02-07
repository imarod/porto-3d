import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
    {
        title: "3D Solar System Planets to Explore",
        description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        image: "/assets/projects/wordpress-theme.jpg",
        tech: [
            { name: "react", icon: "/assets/tech/reactjs.png" },
            { name: "three.js", icon: "/assets/tech/threejs.svg" },
            { name: "typescript", icon: "/assets/tech/typescript.png" },
            { name: "tailwind", icon: "/assets/tech/tailwind.png" }
        ],
        link: "#"
    },
    {
        title: "Yoom - Video Conferencing App",
        description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        image: "/assets/projects/wordpress-theme.jpg",
        tech: [
            { name: "react", icon: "/assets/tech/reactjs.png" },
            { name: "three.js", icon: "/assets/tech/threejs.svg" },
            { name: "typescript", icon: "/assets/tech/typescript.png" },
            { name: "tailwind", icon: "/assets/tech/tailwind.png" }
        ],
        link: "#"
    },
    {
        title: "Yoom - Video Conferencing App",
        description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        image: "/assets/projects/wordpress-theme.jpg",
        tech: [
            { name: "react", icon: "/assets/tech/reactjs.png" },
            { name: "three.js", icon: "/assets/tech/threejs.svg" },
            { name: "typescript", icon: "/assets/tech/typescript.png" },
            { name: "tailwind", icon: "/assets/tech/tailwind.png" }
        ],
        link: "#"
    },
    {
        title: "Yoom - Video Conferencing App",
        description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        image: "/assets/projects/wordpress-theme.jpg",
        tech: [
            { name: "react", icon: "/assets/tech/reactjs.png" },
            { name: "three.js", icon: "/assets/tech/threejs.svg" },
            { name: "typescript", icon: "/assets/tech/typescript.png" },
            { name: "tailwind", icon: "/assets/tech/tailwind.png" }
        ],
        link: "#"
    },
    {
        title: "Yoom - Video Conferencing App",
        description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        image: "/assets/projects/wordpress-theme.jpg",
        tech: [
            { name: "react", icon: "/assets/tech/reactjs.png" },
            { name: "three.js", icon: "/assets/tech/threejs.svg" },
            { name: "typescript", icon: "/assets/tech/typescript.png" },
            { name: "tailwind", icon: "/assets/tech/tailwind.png" }
        ],
        link: "#"
    },

];


const ProjectCard = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto c-space">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <p className=" uppercase tracking-wider text-sm">My Work</p>
                        <h2 className='text-5xl md:text-6xl font-bold text-white'>Projects</h2>
                    </motion.div>

                    {/* Custom Navigation Buttons */}
                    <div className="hidden md:flex gap-4 mb-2">
                        <button className="card-gradient bg-[#100d25]/60 border-white/40 transition-all duration-300 swiper-prev-btn p-3 rounded-full border  hover:border-transparent transition-all">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="card-gradient bg-[#100d25]/60 border-white/40 transition-all duration-300 swiper-next-btn p-3 rounded-full border  hover:border-transparent transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-next-btn',
                        prevEl: '.swiper-prev-btn',
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                        dynamicBullets: true
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // Pada layar >= 1024px (Desktop), tampilkan 3 slide
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                    className=" mt-8"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="flex justify-center p-2">
                            <div className="card-gradient bg-[#100d25]/60 p-5 rounded-2xl w-full md:max-w-none border border-white/40 transition-all duration-300 group hover:border-transparent ">

                                {/* Gambar dengan Overlay Link */}
                                <div className="relative w-full h-[230px] overflow-hidden rounded-xl duration-500  group-hover:scale-102">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover "
                                    />
                                    <div className="absolute inset-0 flex justify-end m-3">
                                        <div
                                            onClick={() => window.open(project.link, "_blank")}
                                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/60 backdrop-blur-sm border border-white/20 hover:scale-110 transition-all"
                                        >
                                            <span className="text-white text-xs">🔗</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Konten */}
                                <div className="mt-5 flex-1">
                                    <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
                                    <p className="mt-2 text-secondary text-gray-400 text-[14px] leading-[24px] line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Footer Card */}
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {/* Contoh bulatan ikon teknologi */}
                                        {project.tech.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="w-8 h-8 rounded-full border border-blue-400 bg-white flex items-center justify-center text-[10px] text-white"
                                            >
                                                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-sm font-bold group"
                                    >
                                        VIEW PROJECT
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination mt-8 flex justify-center"></div>

            </div>

            {/* Styling Pagination Dots */}
            <style>{`
                .custom-pagination .swiper-pagination-bullet {
                    background: #ffffff !important;
                    width: 10px !important;
                    opacity: 0.3;
                    margin: 0 4px;
                }
                .custom-pagination .swiper-pagination-bullet-active-main {
                    background: #915eff;
                    opacity: 1;
                    transform: scale(1.5) !important;
                }
                .custom-pagination .swiper-pagination-bullet-active-prev,
                .custom-pagination .swiper-pagination-bullet-active-next {
                    opacity: 0.6;
                    transform: scale(0.5) !important;
                }
                .custom-pagination {
                    position: relative !important; 
                    bottom: 0 !important;
                }
            `}</style>
        </div>
    );
};


export default ProjectCard;