import React from 'react';
import './home.css';
import Social from './Socials';
import Data from './Data';

const Home = () => {
  return (
        <div className='home__container container-fluid'>
          <div className='home__content'>
              <Social />
              <Data />
          </div>
        </div>
  )
}
export default Home