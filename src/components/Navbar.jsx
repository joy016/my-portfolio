import { CiHome } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { MdOutlineContactPage } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const textColor = scrollPosition > 50 ? 'text-white' : 'text-[#9333ea]';
  const bgColor = scrollPosition > 50 ? 'bg-violet-500' : 'bg-transparent';

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`sticky top-0 hidden sm:flex sm:justify-end space-x-4 py-2 pr-20 bg-[#FFFFFF] transition duration-700 ease-in-out z-[1] ${bgColor}`}
      >
        {[
          ['Home', '#home'],
          ['About', '/#about'],
          ['Projects', '/#projects'],
          // ['', '/#contact'],
        ].map(([title, url]) => (
          <a
            href={url}
            className={`rounded-lg px-3 py-2 ${textColor} font-medium transition duration-700 ease-in-out hover:text-[#ffffff] hover:bg-[#9333ea]`}
          >
            {title}
          </a>
        ))}
      </nav>
      <ul className="fixed bottom-0 right-0 h-full flex flex-col justify-center items-center py-4 sm:hidden">
        {[
          [<CiHome className="w-6 h-5" />, '/#home'],
          [<IoPersonOutline className="w-6 h-5" />, '/#about'],
          [<GrProjects className="w-6 h-4" />, '/#projects'],
          // [<MdOutlineContactPage className="w-6 h-5" />, '/#contact'],
        ].map(([icon, url]) => (
          <li key={url} className="mb-2">
            <a href={url} className="text-slate-700 hover:text-fuchsia-500">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
