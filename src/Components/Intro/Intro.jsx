import React from "react";
import './Intro.css';

function Intro() {

    const myName = "Shahbaz Ali";

    return (
    <div className="Intro">
        <h1>Intro Component</h1>
      <p>
        Hello <strong>{myName}</strong>!
      </p>
      <h1>This is a Heading</h1>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ol>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <p>My age is {2020 - 1998} years old.</p>
    </div>
  );
}

export default Intro;
