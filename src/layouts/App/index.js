// Import Modules
import React, { useState} from 'react';

// Import Components
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import ProductDetail from '../../components/ProductDetail'
import ProductList from '../../components/ProductList'

// import products
import { PRODUCTS } from '../../config/PRODUCTS'

// Import Styles
import './App.css'

 const App = () => {

    const [index, selectProduct] = useState(1)
    const productFiltered = PRODUCTS.filter(product => product._id === index)[0]

    return (
      <div className="App">
        <Header />
        <SubHeader />
        <ProductDetail product={productFiltered}/>
        <ProductList products={PRODUCTS} selectProduct={selectProduct} />
      </div>
    );
 }






export default App;
