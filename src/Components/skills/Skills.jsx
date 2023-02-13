import React from 'react'
import './skills.css';
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <>
        <h2 className='section__title'>Skills</h2>
        <div className='skills__container container grid'>
        
          <Backend />
          <Frontend />
        

        </div>
    </>
  )
}
export default Skills;