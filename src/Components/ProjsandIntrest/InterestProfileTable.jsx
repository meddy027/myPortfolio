import React from 'react'

const InterestsProfileTable= ({ name, image}) => {
    return (
      <table className = 'ints_table'>
        <tbody className = 'ints_info_table'>
          <tr>
            <td colSpan="2"><img className='picture' src={image} alt={name} /></td>
          </tr>
          <tr className='desc'>
            <td colSpan="2" className='pic_desc'>{name}</td>
          </tr>
        </tbody>
      </table>
    );
};
    export default InterestsProfileTable;