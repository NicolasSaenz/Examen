import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './componentes/Card'

function App() {
  const[car,setCar] = useState("")
  const[color,setColor] = useState("")
  const [isErrorName, setIsErrorName] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const isValidCar = car.length > 3;
  const isValidColor = color.length > 6;
  const onCarChange = (e) => {
    setCar(e.target.value);
  };
  const onColorChange = (e) => {
    setColor(e.target.value);
  };
  function signUpUser(e) {
    e.preventDefault();
    if (isValidCar && isValidColor) {
      setIsErrorName(false);
      setShowCard(true);
    } else {
      setIsErrorName(true);
      
    }

  }

  return (
    <>
    <h1>Dime tu coche favorito</h1>
    <form onSubmit={signUpUser}>
      <div>
        <input
          
          type="text"
          placeholder="Escriba su coche favorito"
          value={car}
          onChange={onCarChange}
        />
      </div>    
      <div>
          <input
            type="text"
            placeholder="Escribe un color de mas de 6 letras"
            value={color}
            onChange={onColorChange}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
          {isErrorName && <p>porfa chequea la info</p>}
        </div>
     
    </form>
    {showCard && (
        <Card car="car" color="{color}" />
      )}
    
  </>
  )

}

export default App
