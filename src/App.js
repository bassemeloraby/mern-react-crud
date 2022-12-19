
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
