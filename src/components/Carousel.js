import React from "react";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="d-flex carousel-caption " style={{zIndex:"10"}}>
        {" "}
        <input
          className="form-control me-2 outline-warning"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn text-dark btn-outline-warning bg-warning" type="submit">
          Search
        </button>
      </div>
      <div className="carousel-inner" style={{ maxHeight: "600px" ,filter:"brightness(60%"}}>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900x700/?burger"
            className="d-block w-100"
            alt="burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?indianfood"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?noodles"
            className="d-block w-100"
            alt="..."
          />
        </div> <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?chineseFood"
            className="d-block w-100"
            alt="..."
          />
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
}
