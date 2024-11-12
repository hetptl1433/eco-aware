import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/image/1_vURY82qhDbXk6iL6Lrf04w.jpg'; // Adjust paths as needed
import image2 from '../assets/image/1_vURY82qhDbXk6iL6Lrf04w.jpg';
import image3 from '../assets/image/1_vURY82qhDbXk6iL6Lrf04w.jpg';

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
