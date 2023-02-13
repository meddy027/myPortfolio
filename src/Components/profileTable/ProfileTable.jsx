import React from 'react';
import "./profileTable.css"

const ProfileTable = ({ name, image, birthday, birthplace, occupation, website }) => {
  return (
    <table className = '_table'>
      <tbody className = 'info_table'>
        <tr className='first_tr'>
          <td colSpan="2">{name}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <img src={image} alt={name} style={{ width: '300px' }} />
          </td>
        </tr>
        <tr className='sec_tr'>
          <td colSpan="2">Background Information</td>
        </tr>
        <section className='bg_info_section'>
        <tr>
          <td style={{ width: '50%', fontWeight: 'bold', }}>Birthday:</td>
          <td style={{ width: '50%' }}>{birthday}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold' }}>Birthplace:</td>
          <td>{birthplace}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold' }}>Occupation:</td>
          <td>{occupation}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', }}>Website:</td>
          <td>
            <a href={website}>{website}</a>
          </td>
        </tr>
        </section>
      </tbody>
    </table>
  );
};

export default ProfileTable;
