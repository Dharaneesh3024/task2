import React, { useState } from 'react';

// Import images
// import img1 from './c-d-x-PDX_a_82obo-unsplash.jpg';
// import img2 from './domino-studio-164_6wVEHfl-unsplash.jpg';

function Products() {
//   // Use the imported images directly
//   const images = [img1, img2];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Products Page</h1>

      {/* Image Slider */}
      <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
        {/* <img 
          src={images[currentIndex]} 
          alt={`Product ${currentIndex + 1}`} 
          style={{ width: "100%", height: "auto", borderRadius: "10px" }} 
        /> */}
        {/* <button 
          onClick={prevSlide} 
          style={{ position: "absolute", top: "50%", left: "10px", background: "rgba(0, 0, 0, 0.5)", color: "white", fontSize: "20px", padding: "10px", cursor: "pointer" }}
        >
          ❮
        </button> */}
        {/* <button 
          onClick={nextSlide} 
          style={{ position: "absolute", top: "50%", right: "10px", background: "rgba(0, 0, 0, 0.5)", color: "white", fontSize: "20px", padding: "10px", cursor: "pointer" }}
        >
          ❯
        </button> */}
      </div>

      {/* Text Section */}
      <div style={{ paddingTop: "20px" }}>
        <h2>Our Products</h2>
        <p>Explore our wide range of products designed to enhance your shopping experience.</p>
      </div>
    </div>
  );
}

export default Products;
