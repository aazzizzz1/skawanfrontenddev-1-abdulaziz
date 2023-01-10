import './App.css';
import Blog from './components/Blog';
import Client from './components/Client';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Furniture from './components/Furniture';
import NewArrival from './components/NewArrival';
import NewsLetter from './components/NewsLetter';
import Partnership from './components/Partnership';
import PopularProducts from './components/PopularProducts';
import SofaCollection from './components/SofaCollection';

function App() {
  return (
    <div className="App">
      <Furniture/>
      <PopularProducts />
      <NewArrival />
      <SofaCollection />
      <Feature />
      <Blog />
      <Client />
      <Partnership/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
