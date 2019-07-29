import React from 'react'
import './styles.css'

const ProductDetail = ({ product }) => (
  <article className="product-wrapper">
    <div className="image-container">
      <img
        src={require(`../../assets/images/${product.image}`)}
        alt={product.name}
      />
    </div>
    <div className="product-description">
      <h2>{product.name}</h2>
      <p>{product.summary}</p>
    </div>
    <div className="product-summary">
      <div>look</div>
      <div>{product._id}</div>
    </div>
  </article>
)

export default ProductDetail
