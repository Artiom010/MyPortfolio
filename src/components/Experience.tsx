import { Element } from "react-scroll";

const jobs = [
  {
    company: "Unisim-Soft",
    title: "Full Stack Developer",
    period: "Sep 2024 – Aug 2025",
    logo: "/una.2.png",
    bullets: [
      "End-to-end web application development using HTML/CSS, JavaScript, Python, and SQL.",
      "Building modern, responsive user interfaces and backend logic with Python and Java.",
      "Optimizing application performance and maintaining high code quality.",
      "Collaborating with QA and design teams to deliver user-friendly and efficient solutions."
    ]
  },
  {
    company: "Garduri MD (Doricons Project)",
    title: "Full Stack Developer",
    period: "Dec 2024 – Jun 2025",
    logo: "/gmd.png",
    bullets: [
      "Built a robust Laravel backend (RESTful API, data management) and styled the interface with Tailwind CSS.",
      "Created custom JavaScript components (modals, dropdowns, form validation) for enhanced interactivity.",
      "Developed Python scripts for data automation and API integrations.",
      "Managed public GitHub repo, CI/CD, and collaborated with UI/UX for cross-browser compatibility and high performance."
    ]
  },
  {
    company: "BR Team SRL (Remont.md)",
    title: "Full Stack Developer",
    period: "May 2024 – Jul 2024",
    logo: "/remontmd.svg",
    bullets: [
      "Improved platform performance and features for Remont.md as part of a collaborative team.",
      "Implemented backend logic using Python and CodeIgniter 3, optimized MariaDB/SQL database operations.",
      "Developed interactive features in vanilla JavaScript.",
      "Enhanced user experience and streamlined internal workflows."
    ]
  },
  {
    company: "AgroAdries SRL",
    title: "Full Stack Developer",
    period: "Oct 2023 – Jul 2024",
    logo: "/agroadries.png",
    bullets: [
      "Developed the end-to-end agroadries.md site using HTML, CSS, and JavaScript.",
      "Structured semantic markup and created fully responsive layouts.",
      "Implemented dynamic features (menus, sliders) in vanilla JavaScript.",
      "Delivered a clean, fast, and user-friendly web experience for clients and partners."
    ]
  },
  {
    company: "DoriCons SRL",
    title: "Full Stack Developer",
    period: "Jan 2025 – Mar 2025",
    logo: "/doricons.png",
    bullets: [
      "Built a robust Laravel backend (RESTful API, data management, optimization).",
      "Designed responsive layouts with Tailwind CSS and custom JavaScript.",
      "Wrote Python scripts for workflow automation and data preprocessing.",
      "Managed GitHub repository and collaborated with UI/UX for cross-browser compatibility."
    ]
  }
];


  export default function Experience() {
    return (
      <Element name="experience" className="py-20 flex flex-col items-center">
        <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">Experience</button>
        <h3 className="mb-10 text-white text-lg">Here is a quick summary of my most recent experiences:</h3>
        <div className="flex flex-col gap-6 max-w-2xl w-full">
          {jobs.map(job => (
            <div key={job.title} className="flex items-start gap-4 bg-[#232b3e] rounded-xl p-6 shadow-sm">
              <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain mt-1" />
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-white text-md font-semibold">{job.title}</h4>
                  <span className="text-gray-400 text-sm">{job.period}</span>
                </div>
                <ul className="list-disc pl-4 mt-2 text-gray-300 text-sm space-y-1">
                  {job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Element>
    );
  }
  