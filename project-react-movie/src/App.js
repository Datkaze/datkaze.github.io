import './css/main.css';
import './css/grid.css';
import './css/filter.css'
import Footer from './pages/Footer';
import Header from './pages/Header';
import RouterPages from './pages/RouterPages';


function App() {
  return (
    <div className="App">
      <Header/>
      <RouterPages/>
      <Footer/>
    </div>
  );
}

export default App;
