import {useState} from "react";

import './App.css';




const App =()=>{
  const [color, setColor] = useState ("rojo")

  // const cambiaColorRojo = ()=>{
  //   setColor ("rojo");
  // }
  // const cambiaColorAzul = ()=>{
  //   setColor ("azul");
  // }

  const cambiaColor =()=>{
    setColor ("azul")
  }
  return (
    <div className={color}>

      {/* <button onClick={cambiaColor}>
        Poner el fondo Azul
      </button> */}

      {/* <button onClick={cambiaColorRojo}>Fondo Rojo</button>
      <button onClick={cambiaColorAzul}>Fondo Azul</button> */}
      <button onClick={cambiaColor}>Fondo {color} </button>
    </div>
  )
}

export default App;