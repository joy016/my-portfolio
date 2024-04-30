import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWorkHistory } from 'react-icons/md';

import { JobExperience } from '../constants/experience';
import { skills } from '../constants/imagesPath';

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center px-8 py-[4rem]"
      id="about"
    >
      <div className="sm:w-[100%] md:w-[100%] lg:w-[50%]">
        <h1 className="text-center text-[#9333ea] text-[1.5rem] uppercase font-semibold">
          Skills
        </h1>
        <div class=" grid grid-cols-4 gap-[2rem] cursor-pointer rounded-lg max-w-[40rem] p-[2rem] my-0 mx-auto">
          {skills.map((item) => (
            <img src={item.path} className="w-[4rem]" />
          ))}
        </div>
      </div>
      <div className="sm:w-[100%] md:w-[100%] lg:w-[50%]">
        <h1 className="text-center text-[#9333ea] text-[1.5rem] uppercase font-semibold">
          Job Experience
        </h1>
        <VerticalTimeline layout="1-column-left">
          {JobExperience.map((item) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#9333ea',
                color: '#fff',
                fontSize: '12px',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  #9333ea',
              }}
              date={item.date}
              iconStyle={{ background: '#9333ea', color: '#fff' }}
              icon={<MdOutlineWorkHistory />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.companyName}
              </h4>
              <p style={{ fontSize: '1em' }}>{item.responsibilities}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
