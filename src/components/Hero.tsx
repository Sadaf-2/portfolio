import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >

      {/* Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      </div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">


        {/* Left */}

        <motion.div
          initial={{opacity:0,x:-80}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
        >

          <p className="text-cyan-400 text-xl mb-4">
             Hello, I'm
          </p>


          <h1 className="text-6xl md:text-7xl font-black leading-tight">

            Sadaf

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              Iqbal

            </span>

          </h1>



          <div className="mt-6 text-3xl font-semibold text-cyan-300">

            <TypeAnimation

              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Freelancer",
                2000,
              ]}

              speed={40}

              repeat={Infinity}

            />

          </div>




          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">

            I create beautiful, responsive and modern websites using
            React, TypeScript, Tailwind CSS and REST APIs.

          </p>





          <div className="mt-10 flex gap-5 flex-wrap">


            {/* Hire Button */}

            <button

            className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            font-semibold
            hover:scale-105
            duration-300
            shadow-xl
            shadow-cyan-500/40
            "

            >

              Hire Me

            </button>





            {/* Download CV Button */}

            <a

            href="/resume/Sadaf_Iqbal_Resume.pdf"

            download

            className="
            px-8
            py-4
            rounded-xl
            border
            border-cyan-400
            hover:bg-cyan-500
            hover:text-black
            duration-300
            font-semibold
            "

            >

              Download CV

            </a>



          </div>


        </motion.div>





        {/* Right */}

        <motion.div

          initial={{opacity:0,x:80}}

          animate={{opacity:1,x:0}}

          transition={{duration:1}}

          className="flex justify-center"

        >

          <div className="relative">


            <div className="
            absolute
            inset-0
            rounded-full
            bg-cyan-500
            blur-3xl
            opacity-40
            "></div>



            <img

              src={profile}

              alt="Profile"

              className="
              relative
              w-80
              h-80
              md:w-[420px]
              md:h-[420px]
              rounded-full
              object-cover
              border-[10px]
              border-cyan-400
              hover:scale-105
              hover:rotate-2
              duration-500
              shadow-[0_0_80px_rgba(6,182,212,.6)]
              "

            />


          </div>


        </motion.div>



      </div>


    </section>
  );
};


export default Hero;