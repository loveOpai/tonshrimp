import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        {/* <div className="App-section"> */}
        {/*   <div className="oishi"> shrimp おいしい, buy&nbsp; */}
        {/*     <a */}
        {/*       href="#" */}
        {/*       className="App-link" */}
        {/*       href="#" */}
        {/*       target="_blank" */}
        {/*       rel="noopener noreferrer" */}
        {/*     > */}
        {/*       $tonshrimp */}
        {/*     </a> */}
        {/*   </div> */}
        {/*   &nbsp; */}
        {/*   &nbsp; */}
        {/*   <a */}
        {/*     href="#" */}
        {/*     className="App-link 🦐" */}
        {/*     href="#" */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*   > */}
        {/*     🦐 */}
        {/*   </a> */}
        {/* </div> */}
        <div className="App-link-list">
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/tg.webp" />
          </a>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/shrimp.svg" />
          </a>
          <a
            className="App-link"
            href="https://ton.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/ton_symbol.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
