import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import CopyButton from "../components/CopyButton";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <Element
      name="contact"
      className="py-20 px-4 sm:px-6 flex flex-col items-center"
    >
      <button className="bg-[#232b3e] text-xs sm:text-sm px-3 py-1 rounded-full mb-6 text-gray-200">
        Get in touch
      </button>

      <h2 className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-normal text-center mb-8 leading-relaxed max-w-2xl">
        What’s next? Reach out if you’re looking for a developer, have
        questions, or just want to connect.
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        <span className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl break-all text-center sm:text-left">
          artiom.cc2002@gmail.com
        </span>
        <CopyButton value="artiom.cc2002@gmail.com" />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 
            19.79 19.79 0 0 1-8.63-3.07 
            19.5 19.5 0 0 1-6-6 
            19.79 19.79 0 0 1-3.07-8.67 
            A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
            12.84 12.84 0 0 0 .7 2.81 
            2 2 0 0 1-.45 2.11L8.09 9.91a16 16 
            0 0 0 6 6l1.27-1.27a2 2 0 0 1 
            2.11-.45 12.84 12.84 0 0 0 
            2.81.7A2 2 0 0 1 22 16.92z"
          ></path>
        </svg>
        <span className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl text-center sm:text-left">
          +373 79804176
        </span>
        <CopyButton value="+373 79804176" />
      </div>

      <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-5 text-center">
        You may also find me on these platforms:
      </div>

      <div className="flex space-x-6 sm:space-x-8 text-2xl sm:text-3xl text-gray-400 justify-center">
        <a
          href="https://github.com/Artiom010"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
        >
          <FaGithub />
        </a>
        <a
          href="https://web.telegram.org/k/#@Artiomc09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.linkedin.com/in/artiom-ciobanu-88a902267/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </Element>
  );
}
