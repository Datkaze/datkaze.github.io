
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import ReactPages from './pages/ReactPages';

function App() {
  return (
    <div className="App">
      <Header/>
        <ReactPages/>
      <Footer/>
    </div>
  );
}

export default App;
