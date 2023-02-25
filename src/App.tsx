import ShowOneProduct from './Components/Context';
import './css/index.css'
import Footer from './Pages/Footer';
import HomeScreen from './Pages/HomeScreen';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <ShowOneProduct>
     
      <NavBar />
      <HomeScreen />
      <Footer />
    </ShowOneProduct>

  );
}

export default App;
