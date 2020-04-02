import React from 'react';
import ButtonRegister from '../button-register';
import { Link } from 'react-router-dom';

import './head.css';

const Head = () => {
return (
    <div className ="head">
    <nav>
    <ul>
        <li>
        <Link to="/"> На главную </Link>
        </li>
        <li>
        <Link to="/news"> Новости </Link>
        </li>
        <li>
        <Link to="/profile"> Профиль </Link>
        </li>
    </ul>
    </nav>
    <ButtonRegister />
    </div>
);
};

export default Head;