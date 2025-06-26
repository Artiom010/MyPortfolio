import { Element } from "react-scroll";

const jobs = [
    {
      company: "Lorem Ipsum Dolor Sit",
      title: "Lorem Ipsum Dolor Sit",
      period: "Lorem Ipsum Dolor Sit",
      logo: "/vite.svg",
      bullets: [
        "Lorem Ipsum Dolor Sit",
        "Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit"
      ]
    },
    {
      company: "Lorem Ipsum Dolor Sit",
      title: "Lorem Ipsum Dolor Sit",
      period: "Lorem Ipsum Dolor Sit",
      logo: "/vite.svg",
      bullets: [
        "Lorem Ipsum Dolor Sit",
        "Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit"
      ]
    },
    {
      company: "Lorem Ipsum Dolor Sit",
      title: "Lorem Ipsum Dolor Sit",
      period: "Lorem Ipsum Dolor Sit",
      logo: "/vite.svg",
      bullets: [
        "Lorem Ipsum Dolor Sit",
        "Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit"
      ]
    },
  ];
  export default function Experience() {
    return (
      <Element name="experience" className="py-20 flex flex-col items-center">
        <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">Experience</button>
        <h3 className="mb-10 text-white text-lg">Here is a quick summary of my most recent experiences:</h3>
        <div className="flex flex-col gap-6 max-w-2xl w-full">
          {jobs.map(job => (
            <div key={job.title} className="flex items-start gap-4 bg-[#232b3e] rounded-xl p-6 shadow-sm">
              <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain mt-1" />
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
  