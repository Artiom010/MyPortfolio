import { FaGithub, FaTwitter, FaFigma, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14 bg-[#0A0E18]">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 flex items-center leading-tight">
          Hi, I'm Artiom
          <span className="ml-3 text-5xl animate-wave origin-bottom">👋</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl font-normal">
        Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit
        </p>

        <div className="flex flex-col items-start space-y-2 mb-8">
        <div className="flex items-center text-gray-200 text-lg">
            <FaMapMarkerAlt className="mr-2 text-2xl text-gray-400" />
            Chisinau, Republic of Moldova
        </div>
        <div className="flex items-center text-lg">
            <span className="pulse-dot mr-8">
            <span className="dot"></span>
            <span className="pulse"></span>
            </span>
            <span className="text-gray-200 mr-8">Available for new projects</span>
        </div>
        </div>

        <div className="flex space-x-4 text-2xl mt-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition relative rounded-lg p-2 hover:bg-[#232b3e]"
          >
            <FaFigma />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative">
          <img
            src="/vite.svg"
            alt="Avatar"
            className="w-[270px] h-[320px] object-cover rounded-md border-4 border-[#232b3e] shadow-lg z-10"
          />
          <div className="absolute -bottom-7 -right-7 w-[270px] h-[320px] border-[18px] border-[#232b3e] rounded-md z-0"></div>
        </div>
      </div>
    </section>
  );
}
