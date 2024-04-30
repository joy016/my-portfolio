import { projects } from '../constants/projects';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-center text-[#9333ea] text-[1.5rem] uppercase font-semibold">
        Projects
      </h1>
      <div className="grid gap-10 max-sm:grid-cols-1 max-lg:grid-cols-2  grid-rows-auto grid-cols-4 px-[3rem] py-[3rem]">
        {projects.map((item) => (
          <div class="rounded overflow-hidden shadow-lg w-[100%]" key={item.id}>
            <div class="relative">
              <a href={item.sourceCodeLink} target="_blank">
                <img
                  class="w-full"
                  src={item.projectImagePath}
                  alt={item.projectName}
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div className="flex gap-3 px-2 py-4">
              <a href={item.projectDemoLink} target="_blank">
                <div class="bg-[#9333ea] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  DEMO
                </div>
              </a>
              <a href={item.sourceCodeLink} target="_blank">
                <div class="bg-[#9333ea] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  SOURCE CODE
                </div>
              </a>
            </div>
            <div class="px-6 py-4">
              <a
                href="#"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {item.projectName}
              </a>
              <p class="text-gray-500 text-sm">{item.projectDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
