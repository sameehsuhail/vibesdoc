import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import * as logo from '../assets/images/logo.png';
import * as icon from '../assets/images/scientist.png';
import Footer from '../components/Footer';

const NoMatchPage: React.FC = () => (
  <div>
    <div id="pagelogo">
      <Link to="/">
        <img alt="logo" width="150" src={String(logo)} />
      </Link>
    </div>
    <div id="centered">
      <h1 id="four04h">4</h1>
      <img alt="0" width="150" src={String(icon)} />
      <h1 id="four04h">4</h1>
    </div>
    <div id="centered">
      <p id="four04p">Sorry, but the requested page does not exist in this dimension.</p>
    </div>
    <Footer />
  </div>
);

export default NoMatchPage;
