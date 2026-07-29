import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaBullseye,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Frontend Developer
          </h3>

          <p className="text-slate-400 leading-8 text-lg">
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Sadaf Iqbal
            </span>
            , a passionate <strong>Frontend Developer</strong> and a
            <strong> BS Computer Science (Artificial Intelligence)</strong>
            student at <strong>PMAS Arid Agriculture University, Rawalpindi</strong>.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            I currently have a <strong>3.6 CGPA</strong> and enjoy creating
            modern, responsive, and user-friendly web applications using the
            latest frontend technologies.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            My main interest is{" "}
            <span className="text-cyan-400">Frontend Development</span>,
            where I combine creativity with technology to build beautiful,
            interactive and high-performance websites.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            I am continuously improving my skills in React, TypeScript,
            Tailwind CSS, REST APIs and UI/UX Design while working on
            real-world projects and preparing for professional frontend
            developer roles.
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition">
            <div className="flex items-center gap-4">
              <FaLaptopCode className="text-cyan-400 text-3xl" />
              <div>
                <h4 className="text-xl font-bold">Interest</h4>
                <p className="text-slate-400">Frontend Development</p>
                <p className="text-slate-400">React.js & TypeScript</p>
                <p className="text-slate-400">UI/UX Design</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition">
            <div className="flex items-center gap-4">
              <FaCode className="text-cyan-400 text-3xl" />
              <div>
                <h4 className="text-xl font-bold">Skills</h4>
                <p className="text-slate-400">
                  HTML • CSS • JavaScript
                </p>
                <p className="text-slate-400">
                  React • TypeScript
                </p>
                <p className="text-slate-400">
                  Tailwind CSS • Git • GitHub
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition">
            <div className="flex items-center gap-4">
              <FaBullseye className="text-cyan-400 text-3xl" />
              <div>
                <h4 className="text-xl font-bold">Career Goal</h4>
                <p className="text-slate-400">
                  To become a professional Frontend Developer and build
                  modern, responsive, and user-friendly web applications
                  while continuously learning new technologies.
                </p>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;