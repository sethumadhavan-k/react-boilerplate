import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRoute';
import './style/style.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
