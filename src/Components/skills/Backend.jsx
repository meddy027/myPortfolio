import React from 'react';

const Backend = () => {
  return (
    <div className="skills__container">
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer Skills</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Proficient</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">C++</h3>
                <span className="skills__level">Proficient</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Proficient</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Golang</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skills">
                <h3 className="skills__name">Django</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;