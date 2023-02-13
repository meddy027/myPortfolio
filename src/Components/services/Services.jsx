import React, { useState } from 'react'
import './services.css'
import Info from './Info';

export const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index)=> {
        setToggleState(index);
    }
  return (

    <div className='services container' id= 'services'>
        <h2 className='section__title'>Services</h2>
        <span className='services__subtitle'>What I Offer</span>
        <Info /> 
        <div className='services__container container'>
          
            <div className='services__content'>
                <div>
                    <i class="uil uil-brackets-curly services__icon"></i>
                    <h3 className='services__title'>Software<br />Engineer</h3>

                </div>
                <span className='services__button' onClick={() => toggleTab(1)}>
                View More <i className = 'uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState===1 ? 'services__modal active-modal': 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick = {()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Software Engineer</h3>
                        <p className='services__modal-description'>Creating impactful programs for over 5 years.
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I have developed a vast range of software applicatons</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I put your needs first</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Designing, programming, documenting, testing, and bug fixing</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                    <i class="uil uil-arrow services__icon"></i>
                    <h3 className='services__title'>Ui/Ux<br />Designer</h3>

                </div>
                <span onClick={() => toggleTab(2)} className='services__button'>View More <i className = 'uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState===2 ? 'services__modal active-modal': 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Web Development</h3>
                        <p className='services__modal-description'>Designing responsive and creative websites for 3+ years.
                         
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Mockup and design templates</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I created and designed this website</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Constant collaboration throughout all phases of development</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                <i class="uil uil-desktop-alt services__icon"></i>
                    <h3 className='services__title'>Tech<br />Support</h3>

                </div>
                <span  onClick={() => toggleTab(3)} className='services__button'>View More <i className = 'uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState===3 ? 'services__modal active-modal': 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Tech Support</h3>
                        <p className='services__modal-description'>Skilled IT technican for over 5 years.
                         
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Installing and configuring computer hardware, software, systems, networks, printers and scanners </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Repairing desktops and laptops </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Reburbishment and E-waste solutions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Services;
