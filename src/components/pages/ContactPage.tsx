import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";


const ContactPage = () => {


  const contactInfo = [

    {
      icon:<FaEnvelope />,
      title:"Email",
      value:"sadafarid.edu.pk@gmail.com",
      link:"mailto:sadafarid.edu.pk@gmail.com"
    },


    {
      icon:<FaPhone />,
      title:"Phone",
      value:"+92 316 5481529",
      link:"tel:+92 316 5481529"
    },

    {
      icon:<FaLinkedin />,
      title:"LinkedIn",
      value:"Sadaf Iqbal",
      link:"https://linkedin.com/"
    },
    {
      icon:<FaGithub />,
      title:"GitHub",
      value:"Sadaf-2",
      link:"https://github.com/Sadaf-2"
    },


    {
      icon:<FaMapMarkerAlt />,
      title:"Location",
      value:"Nust Collage EME Jhangi Seydan Islamabad",
      link:"#"
    }

  ];

  return (

    <section className="
    min-h-screen
    py-24
    px-6
    ">


      <div className="
      max-w-7xl
      mx-auto
      ">


        {/* Heading */}

        <motion.h2

        initial={{
          opacity:0,
          y:-40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        className="
        text-5xl
        font-bold
        text-center
        mb-16
        "

        >

        Contact 
        <span className="text-cyan-400">
          Me
        </span>

        </motion.h2>





        <div className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
        ">



        {/* Left */}

        <div>


        <h3 className="
        text-4xl
        font-bold
        mb-6
        ">

        Let's Work Together 

        </h3>


        <p className="
        text-slate-400
        text-lg
        leading-8
        ">

        I'm open for frontend development,
        UI/UX design projects and internship
        opportunities. Feel free to contact me
        anytime.

        </p>



        <a

        href="mailto:sadafarid.edu.pk@gmail.com"

        className="
        inline-block
        mt-8
        px-8
        py-4
        rounded-xl
        bg-cyan-500
        text-black
        font-semibold
        hover:scale-105
        transition
        "

        >

        Send Email

        </a>


        </div>







        {/* Right Cards */}


        <div className="
        space-y-5
        ">


        {
          contactInfo.map((item,index)=>(


          <motion.a

          href={item.link}

          target="_blank"

          key={index}


          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            delay:index*0.1
          }}


          className="
          flex
          items-center
          gap-5
          bg-slate-900
          border
          border-slate-700
          p-5
          rounded-2xl
          hover:border-cyan-400
          hover:-translate-y-1
          transition
          "


          >


          <div className="
          text-cyan-400
          text-3xl
          ">

          {item.icon}

          </div>



          <div>

          <h4 className="
          font-bold
          text-lg
          ">

          {item.title}

          </h4>


          <p className="
          text-slate-400
          ">

          {item.value}

          </p>


          </div>


          </motion.a>


          ))
        }



        </div>



        </div>


      </div>


    </section>

  );

};


export default ContactPage;