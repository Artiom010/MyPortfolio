import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setShowTopBtn(current > 80);
          setShowNavbar(current < lastScroll || current < 10);
          setLastScroll(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!mobileMenuRef.current) return;
      if (mobileOpen && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const linkCommon =
    "font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <Link
        to="about"
        smooth
        duration={800}
        offset={-70}
        onClick={onClick}
        className={`${linkCommon} text-white`}
      >
        About
      </Link>
      <Link
        to="work"
        smooth
        duration={800}
        offset={-70}
        onClick={onClick}
        className={`${linkCommon} text-white`}
      >
        Work
      </Link>
      <Link
        to="testimonials"
        smooth
        duration={800}
        offset={-70}
        onClick={onClick}
        className={`${linkCommon} text-white`}
      >
        Testimonials
      </Link>
      <Link
        to="contact"
        smooth
        duration={800}
        offset={-70}
        onClick={onClick}
        className={`${linkCommon} text-white`}
      >
        Contact
      </Link>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-[#0A0E18]/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur`}
        aria-label="Primary"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-2xl font-extrabold text-white tracking-tight px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Go to top"
          >
            {"<Arteni C. />"}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="border-l h-6 border-gray-700 mx-2" />
            <a
              href="/CVAC.pdf"
              download
              className="bg-white text-[#0A0E18] px-4 py-1 rounded-xl font-semibold shadow hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Download CV
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            ref={mobileMenuRef}
            className="px-4 pb-4 pt-2 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks onClick={() => setMobileOpen(false)} />
              <a
                href="/CV.pdf"
                download
                className="bg-white text-[#0A0E18] px-4 py-2 rounded-xl font-semibold shadow hover:bg-gray-200 transition w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-[#232b3e] hover:bg-gray-700 text-white rounded-full shadow-lg p-4 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}

      <div className="h-16 md:h-[64px]" />
    </>
  );
}
