import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={45} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={45} />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs size={45} />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact size={45} />, color: "text-cyan-400" },
  { name: "TypeScript", icon: <SiTypescript size={45} />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={45} />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs size={45} />, color: "text-green-500" },
  { name: "Flask", icon: <SiFlask size={45} />, color: "text-white" },
  { name: "Git", icon: <FaGitAlt size={45} />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub size={45} />, color: "text-white" },
  { name: "Figma", icon: <FaFigma size={45} />, color: "text-pink-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Technologies I work with
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">

        {skills.map((skill, index) => (

          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .05 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col items-center hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(6,182,212,.35)] duration-300"
          >

            <div className={skill.color}>
              {skill.icon}
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {skill.name}
            </h3>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Skills;