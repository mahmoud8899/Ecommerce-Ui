import ShowOneProduct from './Components/Context';
import './css/index.css'
import Footer from './Pages/Footer';
import HomeScreen from './Pages/HomeScreen';
import ItemsCart from './Pages/ItemsCart';
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
