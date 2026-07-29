import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Attendance Management System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    description:
      "Full-stack attendance system with Admin Dashboard, Attendance Tracking, PDF & Excel Reports.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Flask", "SQLite"],
    github: "https://github.com/Sadaf-2",
    live: "#",
  },

  {
    title: "Quran Companion",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800",
    description:
      "Modern Quran application with Prayer Times, Qibla, Duas and Favorites.",
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/Sadaf-2/Quran-companion",
    live: "#",
  },

  {
    title: "Job Portal",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    description:
      "Responsive Job Portal with Login, Search, Dashboard and Authentication.",
    tech: ["React", "Redux Toolkit", "TypeScript"],
    github: "https://github.com/Sadaf-2/JOB_PORTAL",
    live: "#",
  },

  {
    title: "Recipe Finder",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    description:
      "Recipe Finder using MealDB API with Search and Categories.",
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/Sadaf-2",
    live: "#",
  },

  {
    title: "Student Management System",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop",
    description:
      "CRUD based Student Management Dashboard with Responsive UI.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sadaf-2",
    live: "#",
  },

  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    description:
      "Personal Portfolio with React, Tailwind CSS and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sadaf-2/portfolio",
    live: "#",
  },
];const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="
              group
              bg-slate-900
              rounded-2xl
              overflow-hidden
              border
              border-slate-700
              hover:border-cyan-400
              hover:-translate-y-3
              transition-all
              duration-500
              shadow-xl
            "
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-56
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-cyan-500/20
                      text-cyan-400
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-7">
                                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-slate-800
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                    font-semibold
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-cyan-500
                    text-black
                    hover:bg-cyan-400
                    transition
                    font-semibold
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>
                       
    </section>
  );
};

export default Projects;
              
              