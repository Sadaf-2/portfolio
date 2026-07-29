const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
      <p>
        © {new Date().getFullYear()} Sadaf Iqbal. All Rights Reserved.
      </p>

      <p className="mt-2">
        Built with  using React + TypeScript + Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;