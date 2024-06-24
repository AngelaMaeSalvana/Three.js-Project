import React from 'react'
import { skills, education } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className= 'max-container'>
      <h1 className='head-text'>Hello, I'm <span className='color-gradient_text font-bold drop-shadow'>Angela</span></h1>
      
      <div className='mt-5 flex flex-col gap 3'>
        <p>I'm a passionate <span className='font-semibold'>Front-end Web Developer</span> and aspiring <span className='font-semibold'>UI/UX designer</span>,  <br />My journey into web development began with a love for design and a curiosity about how websites are built, leading me to pursue a career where creativity meets technology.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain '
                
                /> 
              </div> 
            </div>
          ))}

        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3> 
        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((educ) => {
              <VerticalTimelineElement key={educ.school_name} year={educ.year}
                                       icon={
                                        <div className='flex justify-center items-center w-full h-full '>
                                          <img src={educ.icon} alt={educ.school_name} className='w-[60%] h-[60%] object-contain'/>
                                        </div>
                                       }
                                       iconStyle={{ border:'2', borderColor: educ.iconBg}}
                                       contentStyle={{
                                        borderBottom:'8px',
                                        borderStyle:'solid',
                                        borderBottomColor: educ.iconBg,
                                        boxShadow:'none'
                                       }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{educ.school_name}</h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>{educ.title} - {educ.year}</p>
                </div>
              </VerticalTimelineElement>
            })}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-500'/>
      <CTA />

    </section>
  )
}

export default About