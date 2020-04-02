import React from "react";
import { Link } from 'react-router-dom';

import "./button-register.css"

const ButtonRegister = () => {
    return (
    <Link to="/login" className = "register"> 
      Войти 
    </Link>
    );
};

export default ButtonRegister;