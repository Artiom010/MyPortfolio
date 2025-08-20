import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import CopyButton from "../components/CopyButton";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <Element name='contact' className="py-20 flex flex-col items-center">
      <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-8 text-gray-300">
        Get in touch
      </button>
      <h2 className="text-white text-xl md:text-2xl font-normal text-center mb-8 leading-normal max-w-2xl">
      What’s next? Reach out if you’re looking for a developer, have questions, or just want to connect.     </h2>

      <div className="flex items-center gap-4 md:gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 md:h-8 md:w-8 text-[#d1d5db]">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        <span className="text-white font-bold text-4xl md:text-3xl select-text whitespace-nowrap">
          artiom.cc2002@gmail.com
        </span>
        <CopyButton value="artiom.cc2002@gmail.com" />
      </div>
      <div className="flex items-center gap-4 md:gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 md:h-8 md:w-8 text-[#d1d5db]">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 
          2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6
          6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span className="text-white font-bold text-1xl md:text-3xl select-text whitespace-nowrap">
          +373 79804176
        </span>
        <CopyButton value="+373 79804176" />
      </div>

      <div className="text-gray-400 text-lg mb-6 text-center">
          You may also find me on these platforms!      </div>
      <div className="flex space-x-8 text-3xl text-gray-200 justify-center mb-2">
        <a href="https://github.com/Artiom010" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
><FaGithub /></a>
        <a href="https://web.telegram.org/k/#@Artiomc09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
        ><FaTelegramPlane /></a>
        <a href="https://www.linkedin.com/in/artiom-ciobanu-88a902267/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
        ><FaLinkedinIn /></a>
      </div>
    </Element>
  );
}
