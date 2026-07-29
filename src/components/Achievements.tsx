import { motion } from "framer-motion";
import {
  FaAward,
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaProjectDiagram size={35} />,
    number: "10+",
    title: "Projects Completed",
  },
  {
    icon: <FaCode size={35} />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <FaLaptopCode size={35} />,
    number: "1+",
    title: "Years Learning",
  },
  {
    icon: <FaAward size={35} />,
    number: "5+",
    title: "Certificates",
  },
];

const Achievements = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        My{" "}
        <span className="text-cyan-400">
          Achievements
        </span>
      </motion.h2>


      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {achievements.map((item, index) => (

          <motion.div

            key={index}

            initial={{
              opacity:0,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:index * 0.2,
              duration:0.5
            }}

            viewport={{
              once:true
            }}

            className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-8
            text-center
            shadow-lg
            hover:border-cyan-400
            hover:-translate-y-3
            transition-all
            duration-300
            "
          >


            <div className="
            text-cyan-400
            flex
            justify-center
            mb-5
            ">
              {item.icon}
            </div>


            <h3 className="
            text-4xl
            font-bold
            text-white
            ">
              {item.number}
            </h3>


            <p className="
            text-slate-400
            mt-3
            text-lg
            ">
              {item.title}
            </p>


          </motion.div>

        ))}

      </div>

    </section>
  );
};


export default Achievements;