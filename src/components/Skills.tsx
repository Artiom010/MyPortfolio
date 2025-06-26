import { Element } from "react-scroll";

const skills = [
  { name: "Javascript", icon: "/js.svg" },
  { name: "Flutter", icon: "/flutter.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "PostgresSQL", icon: "postgresql.svg" },
  { name: "PHP", icon: "/PHP.svg" },
  { name: "Laravel", icon: "/laravel.svg" },
  { name: "Codeigniter3", icon: "/codeigniter.svg" },
  { name: "Postman", icon: "/postman.svg" },
  { name: "Tailwindcss", icon: "/tailwindcss.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "HTML5", icon: "/html5.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "Oracle", icon: "/Oracle_logo.svg" },
  { name: "Git", icon: "/git.svg" },
];

export default function Skills() {
  return (
    <Element name="skills" className="py-16 md:py-20 flex flex-col items-center bg-transparent">
      <button className="bg-[#232b3e] text-sm px-4 py-1 rounded-full mb-4 text-gray-300">
        Skills
      </button>
      <h3 className="mb-10 text-white text-2xl font-normal text-center">
        The skills, tools and technologies I am really good at:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-x-14 gap-y-10 max-w-6xl w-full justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center group">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 md:w-20 md:h-20 mb-2 rounded-lg transition-transform duration-300 group-hover:scale-110"
              draggable={false}
              style={{ userSelect: "none" }}
            />
            <span className="text-[#c7d0e2] text-base mt-1 font-normal tracking-wide select-none">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Element>
  );
}
