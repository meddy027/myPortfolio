import React, { useState } from "react";
function ContactButton() {
    const [showContact, setShowContact] = useState(false);
  
    return (
      <div>
        <button className='button button--flex downloadMe' onClick={() => setShowContact(!showContact)}>
          Contact
        </button>
        {showContact && (
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: example@example.com</li>
          </ul>
        )}
      </div>
    );
  }
  
  export default ContactButton;