import { useEffect } from 'react';
import Aos from 'aos';
import { Header } from './components/Header/Header';

import './App.css';

function App() {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
