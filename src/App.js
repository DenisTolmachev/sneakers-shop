import logo from './img/logo.png';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src={logo} />
          <div className="headerInfo">
            <h3 className="">Best Sneakers</h3>
            <p>Best sneakers in the Europe!</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <svg />
              <span>300 $</span>
            </li>
            <li>
              <svg />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>All sneakers</h1>
      </div>
    </div>
  );
}

export default App;
