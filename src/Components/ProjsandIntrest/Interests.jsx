import React from 'react';
import AIML from '../../assets/AiML.jpeg';
import Seinfield from '../../assets/seinfield.jpeg';
import InterestsProfileTable from './InterestProfileTable';
import Kobe from '../../assets/Kobe_Bryant_2014.jpeg'

const Interests = () => {
  return (
    <>
    
        
            
            <InterestsProfileTable 
              name="Advancements in Technology"
              image={AIML}
            />
            <InterestsProfileTable
              name= 'Movies and Televison'
              image={Seinfield}

             />

            <InterestsProfileTable
              name= 'Sports'
              image={Kobe}
             />

             </>
    
  )
}

export default Interests