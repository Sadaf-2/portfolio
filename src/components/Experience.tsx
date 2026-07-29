import { motion } from "framer-motion";

import nust from "../assets/experience/nust.png";
import school from "../assets/experience/school.png";

const experience = [
  {
    logo: nust,
    company: "Takhleeq.ai",
    role: "Frontend Developer Intern",
    duration: "June 2026 - Present",
    description:
      "Worked on modern frontend applications using React, TypeScript, Tailwind CSS and REST APIs. Built responsive UI components and collaborated with the development team using Git and GitHub.",
  },
  {
    logo: school,
    company: "Pakistan Foundation School",
    role: "Computer Science & IT Teacher",
    duration: "1 Year",
    description:
      "Taught Computer Science and Information Technology, prepared lesson plans, guided students in programming fundamentals and practical computer skills.",
  },
];

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <div className="space-y-8">

        {experience.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
          >

            <div className="flex flex-col md:flex-row items-center gap-6">

              <img
                src={item.logo}
                alt={item.company}
                className="w-24 h-24 object-contain rounded-full bg-white p-2"
              />

              <div>

                <h3 className="text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {item.company}
                </p>

                <p className="text-slate-400">
                  {item.duration}
                </p>

                <p className="text-slate-500 mt-2 leading-7">
                  {item.description}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Experience;