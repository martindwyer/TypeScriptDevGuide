import React from 'react';
import { SliderProps } from './slideData';

export const Slides = (props: SliderProps) => {
  let count = 0;
  return (
    <React.Fragment>
      {props.slides.map((slide) => {
        count++;
        return (
          <div className={`carousel-item ${count === 1 ? 'active' : ''}`}>
            <p>Slide </p>
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.alt}
              title={slide.title}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};
