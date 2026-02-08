import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Abstract Sunset',
      category: 'Digital Print',
      price: '$49.99',
      image: '🎨',
      description: 'Vibrant abstract artwork capturing the essence of a sunset'
    },
    {
      id: 2,
      title: 'Ocean Dreams',
      category: 'Custom Art',
      price: '$299.99',
      image: '🌊',
      description: 'Custom commissioned piece inspired by ocean waves'
    },
    {
      id: 3,
      title: 'City Lights',
      category: 'Digital Print',
      price: '$39.99',
      image: '🌃',
      description: 'Modern cityscape with neon lights and futuristic vibes'
    },
    {
      id: 4,
      title: 'Nature\'s Harmony',
      category: 'Framed Art',
      price: '$199.99',
      image: '🌿',
      description: 'Premium framed artwork featuring natural landscapes'
    },
    {
      id: 5,
      title: 'Cosmic Journey',
      category: 'Digital Print',
      price: '$59.99',
      image: '🌌',
      description: 'Stunning space-themed artwork with cosmic elements'
    },
    {
      id: 6,
      title: 'Golden Hour',
      category: 'Custom Art',
      price: '$349.99',
      image: '✨',
      description: 'Exclusive custom piece celebrating golden hour beauty'
    }
  ];

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Artwork</h2>
          <p className="section-subtitle">
            Curated collection of premium artwork products
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-emoji">{product.image}</div>
                <div className="product-overlay">
                  <button className="product-quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-add-to-cart">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
