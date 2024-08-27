import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [isLightTheme, setLightTheme] = useState(true);

  function changeTheme(){
    setLightTheme(!isLightTheme);
  }

  useEffect(() => {
    
  }, [isLightTheme]);

  return (
    <>
      <div className="container" data-theme={isLightTheme ? "light" : "black"} onClick={changeTheme}>
        <button>
          <div className="round_item"></div>
        </button>
      </div>
    </>
  )
}


export default App;