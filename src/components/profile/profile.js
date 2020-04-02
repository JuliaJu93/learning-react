import React from 'react';
import {
  Redirect,
} from "react-router-dom";

class Profile extends React.Component {
    render() {
      if (localStorage.getItem('user') !== 'true')
      return <Redirect to="/login" />;
      return <h2>Юля любит Умяра!</h2>;
    }
  }

export default Profile;