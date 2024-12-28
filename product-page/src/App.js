import './App.scss';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';
import {products, categories} from "./helper/data"

function App() {
  return (
    // console.log(products, categories)
    <div className="App">
    <Header categories={categories} title="Product List"/>
    <ProductList />
    </div>
  );
}

export default App;
