import React from 'react';

const Frontend = () => {
  return (
    <div className="skills__container">
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer Skills</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Node.JS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;