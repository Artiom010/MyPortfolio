import { Element } from "react-scroll";

const testimonials = [
    {
      name: "Krisztian Gyuris",
      position: "Founder - inboxgenie.io",
      message: "Job well done! I am really impressed. He is very good at what he does :) I would recommend Sagar and will rehire in the future for Frontend development.",
      avatar: "/vite.svg"
    },
    {
      name: "Eugen Esanu",
      position: "Founder - shosho.design",
      message: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
      avatar: "/vite.svg"
    },
    {
      name: "Joe Matkin",
      position: "Freelancer",
      message: "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
      avatar: "/vite.svg"
    },
  ];
  export default function Testimonials() {
    return (
      <Element name="testimonials" className="py-20 flex flex-col items-center">
        <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">Testimonials</button>
        <h3 className="mb-8 text-white text-lg">Nice things people have said about me:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {testimonials.map(t => (
            <div key={t.name} className="bg-[#232b3e] rounded-xl p-6 shadow-sm flex flex-col items-center">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-200 text-center mb-4">{t.message}</p>
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-xs text-gray-400">{t.position}</span>
            </div>
          ))}
        </div>
      </Element>
    );
  }
  