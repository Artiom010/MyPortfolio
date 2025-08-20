import { Element } from "react-scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <Element name="about" className="py-24 flex flex-col items-center">
      <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-4 text-gray-300">
        About me
      </button>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
  <div className="relative mb-8 md:mb-0">
    <div className="relative z-10">
      <DotLottieReact
        src="https://lottie.host/c4636be9-8694-472b-8dad-96f361e79495/2h7zeX5Z16.lottie"
        loop
        autoplay
        style={{ width: "250px", height: "300px" }}
      />
    </div>

    <div className="absolute -left-7 -bottom-7 w-[250px] h-[300px] 
                    border-[18px] border-[#323946] rounded-md z-0">
    </div>
  </div>


        <div className="flex-1 text-gray-200">
          <h2 className="text-2xl md:text-2xl font-bold mb-3 text-white">
            Curious about me? Here you have it:
          </h2>
          <p className="mb-3">
            Hi, I'm Artiom—a full stack developer passionate about building and
            optimizing robust digital platforms from the ground up. I work with{" "}
            <b>Python, PHP, Laravel, React, Vue.js, Flutter, JavaScript</b> and
            databases like <b>MySQL</b> and <b>Oracle</b>. My experience covers
            end-to-end web solutions, backend automation, frontend UI, API
            integrations, and SEO for real-world projects such as{" "}
            <a
              href="https://agroadries.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              agroadries.md
            </a>
            ,{" "}
            <a
              href="https://doricons.ct.ws/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              Doricons.md
            </a>
            ,{" "}
            <a
              href="https://remont.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              remont.md
            </a>{" "}
            and more another projects.
          </p>
          <p className="mb-3">
            I thrive on bringing ideas to life—transforming concepts into fast,
            accessible, and visually engaging products, always with a focus on
            user experience and modern best practices. Whether it's writing
            scalable backend code, designing responsive UIs, or automating
            workflows, I enjoy challenges that push my skills further.
          </p>
          <p className="mb-3">
            I value collaboration, clean code, and continuous learning. I enjoy
            contributing to open source, sharing tech tips, and learning from
            the community. If you're looking for someone who delivers both
            technical quality and creative energy, let's connect!
          </p>
          <ul className="list-disc pl-5 mb-3">
            <li>B.Sc. in Applied Informatics (USM)</li>
            <li>Full Stack Developer courses at IT Steep Academy</li>
            <li>
              Hands-on experience with API integrations, automation & modern
              UI/UX
            </li>
            <li>
              Experience with both frontend & backend (React, Vue, Laravel,
              Python etc.)
            </li>
            <li>Languages: Romanian, Russian, English</li>
            <li>Open for freelance, collaboration & new challenges</li>
          </ul>
          <p>
            Want to see what I'm working on? Check out my{" "}
            <a
              href="https://github.com/Artiom010"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              GitHub
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/artiom-ciobanu-88a902267/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              LinkedIn
            </a>
            .<span className="text-lg ml-1">🚀</span>
          </p>
        </div>
      </div>
    </Element>
  );
}
