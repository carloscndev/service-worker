import React from 'react'
import './styles.css'

const ProductCard = ({ product, selectProduct }) => (
  <article className="product-card">
    <div className="like-card">
      <span><i className="fas fa-heart" /></span>
    </div>
    <div className="image-container" onClick={() => selectProduct(product._id)}>
      <img
        src={require(`../../assets/images/${product.image}`)}
        alt={product.name}
      />
    </div>
    <div className="card-summary">
      <div className="card-description">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
      </div>
      <div className="add-to-cart">
        <span><i className="fas fa-plus-square" /></span>
      </div>
    </div>
  </article>
)

export default ProductCard
