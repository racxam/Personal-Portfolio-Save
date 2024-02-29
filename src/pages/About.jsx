import React from 'react'
import {skills,experiences} from '../constants/index'
import { VerticalTimeline, VerticalTimelineElement } from'react-vertical-timeline-component' ;
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>🙏 नमस्ते!,<span className='font-semibold blue-gradient_text drop-shadow'> Sumit</span> Here!</h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>Introducing Sumit Kumar Jhaldiyal, a tech aficionado from the heart of Uttarakhand, India. In the ever-evolving field of Computer Science, Sumit is not just a student; he's a fervent devotee infusing zeal into each code snippet. Get ready for a journey where innovation and dedication converge under Sumit's tech-savvy guidance. </p>
      </div>
      <div className='py-20 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill)=>(
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-x5 '/>
            <div className='btn-front rounded-x1 flex flex-col justify-center items-center'>
              <img src={skill.imageUrl} alt={skill.name} className={'w-1/2 h-1/2 object-contain ' }/>
               <p className='font-light text-center'>{skill.name}</p>

            </div>
            </div>
        ))}
      </div>

      </div>


      <div className='py-16'>
          <h3 className='subhead-text'>Education</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>

          <p>Sumit Kumar Jhaldiyal has pursued his academic journey with dedication and enthusiasm, focusing on building a strong foundation in computer science and related disciplines. His educational background reflects his passion for technology and his commitment to continuous learning. Explore below to learn more about his academic achievements and qualifications.</p>
          </div>

      </div>
      <div className='mt-12 flex-container'>
          <VerticalTimeline  >
            {experiences.map((experience)=>(
              <VerticalTimelineElement
              key={experience.company_name}
               date={experience.date}
               icon={<div className='flex justify-center items-center w-full h-full'>
                <img
                src={experience.icon}
                alt={experience.company_name}
                className={'w-[60%] h-[60%] object-contain'}
                />
               </div>}
               contentStyle={{
                borderBottom:'8px',
                borderStyle:'solid',  
                borderBottomColor: experience.iconBg,

               }}
               iconStyle={{
                background:experience.iconBg,

               }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}</h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {experience.company_name}
                    </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point,index)=>(
                    <li key={`experience Point-${index}`}className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
      <br />
      <Footer/>
    </section>
  )
}

export default About
