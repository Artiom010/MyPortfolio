import { Element } from "react-scroll";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "AgroAdries.md",
    desc: "Modern portal for AGROADRIES S.R.L.—delivering informative content, dynamic menus and a clean responsive experience. Built from scratch with focus on SEO, performance and accessibility.",
    tags: ["HTML", "CSS", "JavaScript", "SEO", "Responsive"],
    image: "agroweb.png",
    url: "https://agroadries.md/",
    showImageOnly: true,
  },
  {
    name: "Remont.md",
    desc: "Platform for renovation & repair services, focusing on fast performance, workflow automation, and seamless UX for both users and admin. Major improvements in speed, database, and interactivity.",
    tags: ["Python", "SQL", "MariaDB", "JavaScript", "CodeIgniter 3", "PHP"],
    image: "6862bb5001edce4bc55c5b00.png",
    url: "https://remont.md/",
    showImageOnly: true,
  },
  {
    name: "Doricons.md",
    desc: "Web app for modern fencing & construction solutions. Features a custom backend in Laravel, responsive UI with Tailwind, dynamic product management and live form validation.",
    tags: ["Laravel", "Tailwind CSS", "JavaScript", "Python", "PostgreSQL", "React"],
    image: "screen dori.jpg",
    url: "https://doricons.ct.ws/",
    showImageOnly: true,
  },
  {
    name: "NewEuroFences.com",
    desc: "Full redesign and content management for a fencing company. Built with React.js and TurboRepo for monorepo architecture, with fast PostgreSQL database, custom dashboards and multilingual support.",
    tags: [
      "React.js",
      "TurboRepo",
      "PostgreSQL",
      "Content Management",
      "SEO",
      "HTML",
      "CSS",
      "JavaScript",
      "UX",
    ],
    image: "yPbwiFXPEfCP4wJCrBEABQ.png",
    url: "https://us.gmdfences.com/",
    showImageOnly: true,
  },
  {
    name: "AgroSmart",
    desc: "A cross-platform mobile app for smart agriculture monitoring and management. Developed with Flutter, the app will provide real-time analytics, automation, and remote control for farms. Stay tuned for launch!",
    tags: ["Flutter", "Dart", "Mobile", "IoT", "Coming Soon"],
    image: "agrosmart.png",
    // url: "#",
    comingSoon: true,
    showImageOnly: true,
  },
];

export default function Projects() {
  return (
    <Element name="work" className="py-20 flex flex-col items-center">
      <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">
        Work
      </button>
      <h3 className="mb-8 text-white text-lg">
        Some of the noteworthy projects I have built:
      </h3>
      <div className="flex flex-col gap-12 max-w-5xl w-full">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className={`
              flex flex-col lg:flex-row items-stretch bg-[#262e3b] rounded-2xl shadow-xl p-0
              border border-[#232b3e] overflow-hidden
              ${p.comingSoon ? "relative border-blue-600" : ""}
              ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}
            `}
            style={{ minHeight: 340 }}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group basis-full lg:basis-1/2 flex items-center justify-center bg-[#232b3e] transition-all duration-300"
            >
              <div className="w-full aspect-[16/9] lg:aspect-auto lg:h-[340px] flex items-center justify-center bg-[#232b3e] rounded-2xl overflow-hidden m-8 shadow-md">
                <img
                  src={p.image}
                  alt={p.name}
                  className={`
                    w-full h-full object-contain transition-transform duration-300
                    group-hover:scale-105
                    ${p.comingSoon ? "blur-sm grayscale group-hover:blur-0 group-hover:grayscale-0" : ""}
                  `}
                  style={{ maxHeight: 345 }}
                />
              </div>
            </a>
            {/* Conținut */}
            <div className="basis-full lg:basis-1/2 flex flex-col justify-center px-8 py-8">
              <h4 className="text-white text-2xl font-semibold mb-3 flex items-center">
                {p.name}
                {p.comingSoon && (
                  <span className="ml-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs animate-pulse shadow-lg">
                    Coming soon
                  </span>
                )}
              </h4>
              <p className="text-gray-300 mb-4 text-lg">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#323946] text-xs px-3 py-1 rounded text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {!p.comingSoon && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-auto rounded-lg bg-[#232b3e] text-blue-400 hover:bg-[#273148] hover:text-blue-300 transition-colors text-base font-medium w-max"
                >
                  <FiExternalLink className="text-lg" />
                  View Project
                </a>
              )}
              {p.comingSoon && (
                <div className="flex items-center text-blue-400 text-sm mt-2 group-hover:text-green-400 transition-colors">
                  <span className="animate-bounce mr-2">🛠️</span>
                  Launching soon!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
