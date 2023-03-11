import React, { useEffect, useState } from 'react';
import imageOne from '../../assets/images/slider-1.png';
import imageTwo from '../../assets/images/slider-2.png';
import imageThree from '../../assets/images/slider-3.png';

type SliderProps = {
  id: string;
};

export const Slider = (props: SliderProps) => {
  return (
    <div className="slider">
      <div className="row">
        <h2 className="heading--section text-center">Staying In Touch</h2>
      </div>
      <div
        id="carouselSlider"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="7000"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" title="Click to stop auto scroll">
          <div className="carousel-item active" data-bs-interval="7000">
            <img src={imageOne} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={imageTwo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={imageThree} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row">
        <h4 className="text-center">
          Teleconference. Online meetings. In person.
        </h4>
      </div>
    </div>
  );
};
