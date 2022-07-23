import logo from './logo.svg';
import './App.css';
import { Button, Layout, Menu } from 'antd';

import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';

const { Header, Content, Sider } = Layout;

function App() {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
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
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
      </Layout>
      <Login />
      <Signup />
      <Button type="primary">Hello</Button>
      <Footer />
    </div>
  );
}

export default App;
