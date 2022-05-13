
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import RouterPages from './pages/RouterPage';


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
