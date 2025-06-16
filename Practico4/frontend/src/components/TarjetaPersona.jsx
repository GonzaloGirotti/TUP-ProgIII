import React from 'react';

const TarjetaPersona = ({ persona }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1rem",
      width: "200px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
};

export default TarjetaPersona;