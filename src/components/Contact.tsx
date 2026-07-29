import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-28 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Let's build something amazing together.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-20">

        {/* Left */}

        <div className="space-y-6">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-slate-400">
                  youremail@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-slate-400">
                  +92 XXX XXXXXXX
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-slate-900 p-4 rounded-full hover:bg-cyan-500 duration-300"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="bg-slate-900 p-4 rounded-full hover:bg-cyan-500 duration-300"
            >
              <FaLinkedin size={25} />
            </a>

          </div>

        </div>

        {/* Right */}

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
          ></textarea>

          <button
            className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-bold duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;