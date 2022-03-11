import React from 'react';
import Link from 'next/link';
import { userService } from '../../services';


const about = () => {
  return (
    <div className="p-4">
      <div className="container">
          <h1>Hello from about:  {userService.userValue?.firstName}!</h1>
          <p>put the info here</p>
          <p>More info</p>
      </div>
    </div>  

  );
};

export default about;
