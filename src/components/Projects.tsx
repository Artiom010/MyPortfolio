import { Element } from "react-scroll";


const projects = [
    {
      name: "Wingie",
      desc: "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
      tags: ["React", "Typescript", "React Bootstrap", "Firebase", "Express.js", "PostgreSQL", "Styled Components", "Redux"],
      image: "vite.svg",
      url: "https://www.wingie.com",
    },
    {
      name: "Fiskil",
      desc: "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
      tags: ["React", "Next.js", "Typescript", "Tailwindcss", "Redux Toolkit", "Express.js", "PostgreSQL", "Firebase", "AWS Amplify", "Cypress", "Storybook"],
      image: "vite.svg",
      url: "#",
    },
  ];
  export default function Projects() {
    return (
      <Element name="work" className="py-20 flex flex-col items-center">
        <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">Work</button>
        <h3 className="mb-8 text-white text-lg">Some of the noteworthy projects I have built:</h3>
        <div className="flex flex-col gap-10 max-w-4xl w-full">
          {projects.map(p => (
            <div key={p.name} className="flex flex-col md:flex-row bg-[#232b3e] rounded-xl shadow p-6 gap-8">
              <img src={p.image} alt={p.name} className="w-full md:w-1/2 rounded-lg object-cover max-h-[200px]" />
              <div className="flex-1 flex flex-col justify-between">
                <h4 className="text-white text-xl font-semibold mb-2">{p.name}</h4>
                <p className="text-gray-300 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="bg-[#323946] text-xs px-2 py-1 rounded text-gray-200">{tag}</span>
                  ))}
                </div>
                <a href={p.url} target="_blank" className="text-blue-400 hover:underline flex items-center text-sm">View Project <span className="ml-1">↗</span></a>
              </div>
            </div>
          ))}
        </div>
      </Element>
    );
  }
  