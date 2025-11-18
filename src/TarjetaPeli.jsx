function TarjetaPeli({ titulo, genero, rating, imagen, duracion, argumento }) {
  
  const horas = Math.floor(duracion / 60);
  const minutos = duracion % 60;
  const duracionHHMM = `${horas}h ${minutos}m`;

  const destacada = rating >= 8.8;

  return (
    <div className="tarjeta-peli">
      
      <h2>{titulo}</h2>
        {destacada ? <p className="destacada">* Aclamada por la crítica *</p> : null}
      <img src={imagen} alt={titulo} className="img-portada" />
      <p>Género:{genero}</p>
      <p>Rating: {rating}</p>
      <p>Duración: {duracionHHMM}</p>

        {/* Resumen desplegable */}
        <details className="resumen">
            <summary>Ver resumen del argumento</summary>
            <p>{argumento}</p>
        </details>

    </div>
  );
}

export default TarjetaPeli;
