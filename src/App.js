import { useState } from 'react';
import CurrentRaidBosses from './Pages/CurrentRaidBosses';
import Menu from './Components/Menu'

function App() {

  const [lang, setLang] = useState('es')

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Menu setLang={setLang}/>
        <CurrentRaidBosses lang={lang}/>
      </div>
    </div>
  );
}

export default App;
