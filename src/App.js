import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import Login from './pages/auth/login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Login />
      <Button type="primary">Hello</Button>
      <Footer />
    </div>
  );
}

export default App;
