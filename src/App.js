import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 style={{display: 'flex', justifyContent: 'center', padding: '1rem 0'}}>Ofertas de la semana!</h1>
    </div>
  );
}

export default App;
