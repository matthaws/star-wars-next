import React from "react";

const Contact = () => (
  <footer>
    <ul>
      <li>Made by
      <a href="http://www.github.com/matthaws">
        <span>Matthew Haws</span>
      </a>
      </li>
      <li>
        LinkedIn
      </li>
      <li>
        Portfolio
      </li>
      <li>
        Github
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid yellow;
      }

      a {
        color: yellow;
        padding-left: 20px;
        text-decoration: none;
      }
    `}</style>
  </footer>
)

export default Contact;
