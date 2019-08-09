// Import Modules
import React, { Component } from 'react';

// Import Components
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import ProductDetail from '../../components/ProductDetail'
import ProductList from '../../components/ProductList'

// import products
import { PRODUCTS } from '../../config/PRODUCTS'

// Import Styles
import './App.css'

 class App extends Component {

   constructor(props) {
     super(props)
     this.state = {
       index: 1
     }

     this.selectProduct = this.selectProduct.bind(this)
   }

   selectProduct(index) {
     this.setState({
       index
     })
   }

   render() {
     const  { index } = this.state;
     const productFiltered = PRODUCTS.filter(product => product._id === index)[0]
     return (
       <div className="App">
         <Header />
         <SubHeader />
         <ProductDetail product={productFiltered}/>
         <ProductList products={PRODUCTS} selectProduct={this.selectProduct} />
       </div>
     );
   }
 }

export default App;
