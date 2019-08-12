import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'

const ProductList = ({ products, selectProduct }) => (
  <div className="product-list">
    {
      products.map((product, index) =>
        <ProductCard className="product-card" product={product} selectProduct={selectProduct} key={index} />
      )
    }
  </div>
)

export default ProductList
