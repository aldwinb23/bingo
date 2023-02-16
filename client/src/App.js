import './App.css';

import Navbar from './Navbar/Navbar';

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let bingo_b = [];
  while (bingo_b.length < 5) {
    let newNum = getRandomInt(1, 15)
    if (!bingo_b.includes(newNum)) {
      bingo_b.push(newNum);
    }
  }
  
  let bingo_i = [];
  while (bingo_i.length < 5) {
    let newNum = getRandomInt(16, 30)
    if (!bingo_i.includes(newNum)) {
      bingo_i.push(newNum);
    }
  }
  let bingo_n = [];
  while (bingo_n.length < 5) {
    let newNum = getRandomInt(31, 45)
    if (!bingo_n.includes(newNum)) {
      bingo_n.push(newNum);
    }
  }
  let bingo_g = [];
  while (bingo_g.length < 5) {
    let newNum = getRandomInt(46, 60)
    if (!bingo_g.includes(newNum)) {
      bingo_g.push(newNum);
    }
  }
  let bingo_o = [];
  while (bingo_o.length < 5) {
    let newNum = getRandomInt(61, 75)
    if (!bingo_o.includes(newNum)) {
      bingo_o.push(newNum);
    }
  }



  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div>
          Log in as:
        </div>
        <div>
        B -
        {bingo_b[0]} - 
        {bingo_b[1]} - 
        {bingo_b[2]} - 
        {bingo_b[3]} - 
        {bingo_b[4]}
        </div>

        <div>
        I -
        {bingo_i[0]} - 
        {bingo_i[1]} - 
        {bingo_i[2]} - 
        {bingo_i[3]} - 
        {bingo_i[4]}
        </div>

        <div>
        N -
        {bingo_n[0]} - 
        {bingo_n[1]} - 
        {bingo_n[2]} - 
        {bingo_n[3]} - 
        {bingo_n[4]}
        </div>

        <div>
        G -
        {bingo_g[0]} - 
        {bingo_g[1]} - 
        {bingo_g[2]} - 
        {bingo_g[3]} - 
        {bingo_g[4]}
        </div>

        <div>
        O -
        {bingo_o[0]} - 
        {bingo_o[1]} - 
        {bingo_o[2]} - 
        {bingo_o[3]} - 
        {bingo_o[4]}
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
