import React, { useState } from "react";

const WeatherApp = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ nom: "", prenom: "toto" });
  const [color, setColor] = useState("red");

  function handleClick() {
    setCount((prevValue) => {
      return prevValue + 1;
    });
    setCount((prevValue) => {
      return prevValue + 1;
    });
    setCount(count + 1);
  }

  const handlePrenom = (e) => {
    // setName(e.target.value);
    setPerson({ ...person, prenom: e.target.value });
  };

  const handleNom = (e) => {
    // setName(e.target.value);
    setPerson({ ...person, nom: e.target.value });
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click me</button>

      <h1>
        Hi my name is {person.nom} {person.prenom}
      </h1>
      <input type="text" value={person.nom} onChange={handleNom} />
      <input type="text" value={person.prenom} onChange={handlePrenom} />

      <div>
        <h3>my fav color is {color} </h3>
        <button type="button" onClick={() => setColor("blue")}>
          blue{" "}
        </button>
        <button type="button" onClick={() => setColor("green")}>
          green{" "}
        </button>
        <button type="button" onClick={() => setColor("yellow")}>
          yellow{" "}
        </button>
        <button type="button" onClick={() => setColor("white")}>
          white{" "}
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;
