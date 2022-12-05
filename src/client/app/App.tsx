import 'styles/app.scss';

import Logo from 'assets/svg/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>.env {process.env.NODE_ENV}</p>
        <a className="AppLink" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
