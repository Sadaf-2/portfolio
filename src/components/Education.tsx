import { motion } from "framer-motion";

import arid from "../assets/education/arid.png";
import punjab from "../assets/education/punjab.png";
import air from "../assets/education/air.png";

const education = [
  {
    logo: arid,
    institute: "PMAS Arid Agriculture University",
    degree: "BS Computer Science (Artificial Intelligence)",
    duration: "2023 - Present",
    
  },
  {
    logo: punjab,
    institute: "Punjab College",
    degree: "ICS (Computer Science)",
    duration: "2020 - 2022",
    detail: "Grade A",
  },
  {
    logo: air,
    institute: "Pakistan Foundation School",
    degree: "Matriculation (Computer Science)",
    duration: "2018 - 2020",
    detail: "Grade A",
  },
];

const Education = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        <span className="text-cyan-400">Education</span>
      </motion.h2>

      <div className="space-y-8">

        {education.map((item, index) => (

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
                alt={item.institute}
                className="w-24 h-24 object-contain rounded-full bg-white p-2"
              />

              <div>

                <h3 className="text-2xl font-bold">
                  {item.institute}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {item.degree}
                </p>

                <p className="text-slate-400">
                  {item.duration}
                </p>

                <p className="text-slate-500 mt-2">
                  {item.detail}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Education;