import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfoIndex from '../components/info_index';
import Contact from "../components/contact";


const App = (props) => {
  return (
    <main>
      <h1>Star Wars</h1>
      <InfoIndex info={props.info} />
      <Contact />
      <style global jsx>{`
        @font-face {
          font-family: StarWars;
          src: url('static/special_font.woff')
        }

        body {
          background-color: black;
          margin: 0;
          height: 100%;
          color: yellow;
          background-image: url('static/1.jpg');
        }

        h1 {
          text-align: center;
          font-size: 60px;
          font-family: StarWars;
        }
          `}</style>
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
