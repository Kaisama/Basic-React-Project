import React from 'react'

function Hero() {
  return (
    <>
        <main className="hero container">
            <div className="hero-content">
                <h1>Welcome to NIKE Footwear: Elevate Your Every Step!</h1>
                <p>Discover comfort, style, and quality craftsmanship in every pair. From office to outdoors, our shoes blend timeless design with modern innovation. Find your perfect match and step into confidence with NIKE.</p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icon">
                    <img src="/images/Flipkart.png" alt="Flipkart" />
                   
                </div>
            </div>
            <div className="hero-image">
                <img class="shoe" src="/images/th.jpg" alt="shoes" />
            </div>
        </main>
    </>
      )
}

export default Hero