import './App.css';

function App() {
  const opciones = async()=>{
    const respuesta = await 
    fetch("https://api.genshin.dev/")
    const types = respuesta.json()
    console.log({types});  
  };

  opciones();

  return (
    <div className='App container'>
    <h3>Genshin Impact Dex</h3>
    <select>
    <option value="">Seleccione un elemento</option>
      <option value="artifacts"></option>
      <option value="boss"></option>
      <option value="consumables"></option>
      <option value="domains"></option>
      <option value="elements"></option>
      <option value="enemies"></option>
      <option value="materials"></option>
      <option value="nations"></option>
      <option value="weapons"></option>
    </select>
    </div>
  );
}

export default App;
