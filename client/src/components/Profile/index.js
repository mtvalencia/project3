// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div style={{textAlign:"center",margin:"150px"}}>
        <p><i className="fas fa-fan fa-3x fa-spin"></i></p>
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div style={{width:"700px", margin:"auto"}} className="cover-container2">
      <img src="https://github.com/mtvalencia/ProjectFiles/blob/master/mvprofile.png?raw=true" alt="Profile" />

      <h2>{user.name}</h2>
      {/* <p>{user.email}</p> */}
      <code>{JSON.stringify(user, null, 2)}</code>
    </div>
  );
};

export default Profile;