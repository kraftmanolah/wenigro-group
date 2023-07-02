import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
