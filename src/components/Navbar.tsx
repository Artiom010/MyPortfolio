import { useEffect, useState } from "react";
import { FaRegMoon, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > 80) {
            setShowTopBtn(true);
          } else {
            setShowTopBtn(false);
          }
          if (currentScroll < lastScroll || currentScroll < 10) {
            setShowNavbar(true);
          } else {
            setShowNavbar(false);
          }
          setLastScroll(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [lastScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-[#0A0E18] shadow-sm z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold text-white tracking-tight bg-none px-2 py-1 rounded">{'<Arteni C. />'}</span>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="about" smooth={true} duration={800} offset={-50} className="text-white font-semibold transition cursor-pointer">About</Link>
            <Link to="work" smooth={true} duration={800} offset={-50} className="text-white font-semibold transition cursor-pointer">Work</Link>
            <Link to="testimonials" smooth={true} duration={800} offset={-50} className="text-white font-semibold transition cursor-pointer">Testimonials</Link>
            <Link to="contact" smooth={true} duration={800} offset={-50} className="cursor-pointer text-white font-semibold transition">
              Contact
            </Link>
            <div className="border-l h-6 border-gray-700 mx-2"></div>
            <button className="text-gray-300 hover:text-white text-xl p-1 transition">
              <FaRegMoon />
            </button>
            <a
              href="/CV.pdf"
              download
              className="bg-white text-[#0A0E18] px-4 py-1 rounded-xl font-semibold shadow hover:bg-gray-200 transition ml-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#232b3e] hover:bg-gray-700 text-white rounded-full shadow-lg p-4 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  );
}
