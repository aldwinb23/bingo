import './App.css';

import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div>
          Log in as:
        </div>
        <div>
          <button>
            Player
          </button>
        </div>
        <div>
          or
        </div>
        <div>
          <button>
            Caller
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
