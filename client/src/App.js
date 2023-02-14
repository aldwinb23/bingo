import './App.css';

import Navbar from './Navbar/Navbar';

function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  let bingo_b1 = Math.floor(Math.random() * 14) + 1;
  let bingo_b2 = Math.floor(Math.random() * 14) + 1;
  let bingo_b3 = Math.floor(Math.random() * 14) + 1;
  let bingo_b4 = Math.floor(Math.random() * 14) + 1;
  let bingo_b5 = Math.floor(Math.random() * 14) + 1;

  let bingo_b = [];
  while (bingo_b.length < 5) {
    let newNum = getRandomInt(15)
    bingo_b.push(newNum);
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div>
          {bingo_b1} - 
          {bingo_b2} - 
          {bingo_b3} - 
          {bingo_b4} - 
          {bingo_b5} - 
          Log in as:
        </div>
        {bingo_b[0]} - 
        {bingo_b[1]} - 
        {bingo_b[2]} - 
        {bingo_b[3]} - 
        {bingo_b[4]}
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
