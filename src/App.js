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
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/tg.webp" />
          </a>
          <a
            className="App-link"
            href="https://t.me/ton_shrimp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/shrimp.png" />
          </a>
          <a
            className="App-link"
            href="https://ton.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="App-img" src="/ton_symbol.png" />
          </a>
          {/* <a */}
          {/*   className="App-link" */}
          {/*   href="#" */}
          {/*   target="_blank" */}
          {/*   rel="noopener noreferrer" */}
          {/* > */}
          {/*   <img className="App-img App-x" src="/x.svg" /> */}
          {/* </a> */}
          <a
            className="App-link App-buy kablammo-font"
            href="https://dedust.io/swap/TON/EQCUBcy-K56xWCKSAtf2wMfmImNmDshmYlDxvKSDuyK82gBa"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
