import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 w-14 h-14 rounded-full shadow-lg shadow-cyan-500/40 duration-300 z-50"
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
};

export default ScrollTop;