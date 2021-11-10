// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Resume />

        <Contact />
        <Footer />
    </div>
  );
}

export default App;
