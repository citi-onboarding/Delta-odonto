import React from 'react';
import Logo from '../Assets/logo_name.png'
//import axios from 'axios';

import './Banner.css';

function Banner() {
    //React
  return (//HTML
    <section class="banner">
      <img id="logo" src={Logo} alt="Logo Delta Dental"></img>
      <div class="banner_text">

        <h1 id="title">Banner com a proposta de valor da Delta Odonto</h1>
        <h2 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <a id="our_services" href="/">Nossos serviços</a>

      </div>
      <div class="container">
        <a data-scroll href="#full">
      <div class="arrow"></div>
      </a>
      </div>

    </section>
  );
}

export default Banner;