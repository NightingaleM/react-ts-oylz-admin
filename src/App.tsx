import React from 'react';
import logo from './logo.svg';
import './App.css';
import HH from 'compoments/HH'
import { initializeStore } from "store/index";


// const App: React.FC = () => {
class App extends React.Component {
  // mobxStore: any;
  // static async getInitialProps(appContext: any) {

  // }
  render() {
    return (
      <div className="App" >
        {/* <Component {...pageProps} /> */}
        <HH></HH>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
