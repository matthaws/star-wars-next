import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfoIndex from '../components/info_index';
import Contact from "../components/contact";
import styles from "../styles/styles";

const App = (props) => {
  return (
    <main id="content">
      <h1 id="title">Star Wars Holocron</h1>
      <InfoIndex info={props.info} />
      <Contact />
      <style global jsx>{
    `@font-face {
        font-family: StarWars;
        src: url(/static/special_font.woff)
      }

      body {
        background-color: black;
        color: yellow;
        background-image: url(/static/1.jpg);
      }

      #title {
        grid-column-start: 1;
        grid-column-end: 6;
        text-align: center;
        padding-left: 50px;
        margin: 5px;
        font-size: 40px;
        font-family: StarWars;
      }

      p {
        font-size: 40px;
      }

      .search {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 3;
        display:grid;
        grid-template-columns: 1fr 2fr 1fr;
      }

      form {
        text-align: center;
        padding-top: 30px;
        grid-column-start: 2;
      }

      label {
        font-family: StarWars;
        font-size: 20px;
      }

      input[type='text'] {
        display: block;
        margin: 10px auto;
        height: 50px;
        width: 400px;
        font-size: 35px;
        font-family: StarWars;
      }

      input[type='submit'] {
        background-color: black;
        border: 1px solid yellow;
        padding: 10px;
        border-radius: 5px;
        color: yellow;
        font-size: 20px;
        font-family: StarWars;
        cursor: pointer;
      }

      footer {
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 2;
        width: 66%;
        padding: 0;
        margin: 0 auto;
      }

      #characters {
        padding: 10px;
        list-style: none;
        grid-column-start: 1;
        grid-column-end: 2;

        font-family: StarWars;

      }

      #characters li {
        font-size: 44px;
        padding: 5px;
        border-bottom: 1px solid yellow;
      }

      #content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template:rows: 1fr 1fr 3fr;
      }

      `}

      </style>
     </main>
  );
};

App.getInitialProps = async function() {
  const res = await fetch('https://swapi.co/api/people');
  const info = await res.json();
  return {
    info
  }
};

export default App;
