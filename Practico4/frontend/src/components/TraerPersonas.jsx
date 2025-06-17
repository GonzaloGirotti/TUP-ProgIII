import React, { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const api = 'http://localhost:3000/api/v1';

    fetch(`${api}/personas`)
      .then(res => res.json())
      .then(data => setPersonas(data.data.personas))
      .catch(err => console.error('Error al traer personas:', err));
  }, []);

  return (
    <div>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;