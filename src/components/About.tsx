import { Element } from "react-scroll" 

export default function About() {
  return (
    <Element name="about" className="py-24 flex flex-col items-center">
      <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-4 text-gray-300">
        About me
      </button>
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        <div className="relative mb-8 md:mb-0">
          <img src="/vite.svg" alt="About" className="w-[250px] h-[300px] object-cover rounded-md z-10 relative" />
          <div className="absolute -left-7 -bottom-7 w-[250px] h-[300px] border-[18px] border-[#323946] rounded-md z-0"></div>
        </div>
        <div className="flex-1 text-gray-200">
        <h2 className="text-2xl md:text-2xl font-bold mb-3 text-white ">
            Curious about me? Here you have it:
          </h2>
          <p className="mb-3">
            Lorem Ipsum Dolor Sit          <a href="#" className="underline text-blue-400 hover:text-blue-500">Lorem Ipsum Dolor Sit
            </a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vitae congue eu consequat ac felis donec et odio pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Ultrices sagittis orci a scelerisque purus semper eget duis. Varius morbi enim nunc faucibus a pellentesque sit amet. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis.

          </p>
          <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue eu consequat ac felis donec et odio pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Ultrices sagittis orci a scelerisque purus semper eget duis. Varius morbi enim nunc faucibus a pellentesque sit amet. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis.

          </p>
          <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue eu consequat ac felis donec et odio pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Ultrices sagittis orci a scelerisque purus semper eget duis. Varius morbi enim nunc faucibus a pellentesque sit amet. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis.
          </p>
          <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue eu consequat ac felis donec et odio pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Ultrices sagittis orci a scelerisque purus semper eget duis. Varius morbi enim nunc faucibus a pellentesque sit amet. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis.
          </p>
          <ul className="list-disc pl-5 mb-3">
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Dolor Sitr</li>
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Dolor Sit</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          <span className="text-lg">😊</span></p>
        </div>
      </div>
    </Element>
  );
}
