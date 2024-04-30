import { FaLinkedin, FaGithub } from 'react-icons/fa';

import myImage from '../images/profileImg.png';

const HomePage = () => {
  return (
    <section
      id="home"
      className="flex max-lg:flex-col max-xl:flex-row items-center justify-center py-[5rem] px-[1.5rem] sm:px-[10rem]  max-sm:py-[4rem] bg-[#faf5ff]"
    >
      <div className="flex flex-col max-lg:order-last">
        <h1 className="text-[#9333ea] text-[1.5rem] uppercase max-lg:text-center">
          Hello
        </h1>
        <h1 className="text-[4.2rem] max-lg:text-[3.2rem] max-lg:text-center">
          I'm <span className="font-extrabold">Edijoy a</span> React Developer
        </h1>
        <div className="flex flex-col gap-[1rem]">
          <p className="max-sm:text-[13px] max-w-[35rem] tracking-[2px]">
            Welcome to my web developer portfolio! I'm Joy, a skilled React
            Developer with a passion of creating responsive and user friendly
            website. I've worked for almost 2 years in the industry.
          </p>
          <div className="flex gap-[1rem] max-sm:justify-center sm:max-w-[30rem]">
            <button className="font-bold tracking-[2px] text-[15px] sm:text-[13px] max-sm:p-[9px] p-[10px] bg-[#9333ea] w-[100%] border-solid rounded-lg text-[#ffffff] transition duration-700 ease-in-out hover:shadow-lg hover:bg-[#a855f7]">
              Hire me
            </button>
            <button className="border-2 border-[#9333ea] text-[#9333ea] font-bold tracking-[2px] text-[15px] sm:text-[13px] p-[9px] sm:p-[10px] w-[100%] rounded-lg transition duration-700 ease-in-out hover:shadow-lg hover:bg-[#9333ea] hover:text-[#ffffff]">
              Download cv
            </button>
          </div>

          <div className="flex gap-[5px] items-center">
            {[
              [
                <FaLinkedin className="w-[45px] h-[45px] bg-[#EFECEC] rounded-full p-[10px]" />,
                'https://www.linkedin.com/in/edijoy-lejas-28b02b1aa/',
              ],
              [
                <FaGithub className="w-[45px] h-[45px] bg-[#EFECEC] rounded-full p-[10px]" />,
                'https://github.com/joy016',
              ],
            ].map(([icon, url]) => (
              <a
                href={url}
                key={url}
                target="_blank"
                className="text-slate-700 transition duration-700 ease-in-out hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#9333ea] rounded-full max-md:max-w-[13rem] max-md:max-h-[13rem] flex items-center justify-center overflow-hidden">
        <img src={myImage} className="object-cover w-full h-full" />
      </div>
    </section>
  );
};

export default HomePage;
