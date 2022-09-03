import './App.css';

import { Navigation, Header, ThinkAbout, Collab } from "./components"

function App() {
  return (
    <div className="App">
      <div className="aplication">
        <div className="container">
          <Navigation/>
          <Header/>
          <ThinkAbout/>
          <Collab/>
        </div>
      </div>
    </div>
  );
}

export default App;
