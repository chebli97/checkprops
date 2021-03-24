import proptype from 'prop-types';

import React from 'react'





function Profile(props) {

   

    const  handleName =()=>{
        alert(props.fullName);
    }
    return (
        <>
            <p >{props.fullName}</p>
            <p >{props.bio}</p>
            <p >{props.profession}</p>
            <div>{props.children}</div>
            <button onClick={handleName}>Click</button>
        </>
    )
}
  Profile.defaultProps ={
      fullName:'saifchebli'
  };

  Profile.proptype ={
      fullName:proptype.string
  }
export default Profile;
