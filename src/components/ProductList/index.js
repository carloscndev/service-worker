import React from 'react'
import ProductCard from '../ProductCard'
import './styles.css'

const ProductList = ({ products }) => (
  <div className="product-list">
    {
      products.map((product, index) =>
        <ProductCard product={product} key={index} />
      )
    }
  </div>
)

export default ProductList
