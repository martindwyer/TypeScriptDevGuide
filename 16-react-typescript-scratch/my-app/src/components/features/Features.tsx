import React from 'react';

import featureOne from '../../assets/images/feature-1.png';
import featureTwo from '../../assets/images/feature-2.png';
import featureThree from '../../assets/images/feature-3.png';

export const featuresClick = () => {
  const features = document.querySelector('#features');
  features?.scrollIntoView();
};

export const Features = () => {
  return (
    <div className="container-fluid features" id="features">
      <div className="row">
        <h2 className="heading--section text-center pt-4 pb-2">
          Featured Services
        </h2>
      </div>
      <hr className="section" />
      <div className="row">
        <div className="card col-md-4">
          <img src={featureOne} className="card-img-top" alt="..." />
          <div className="card-body">
            <div>
              <h5 className="card-title">Ideas</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti dolores, laboriosam officia totam voluptatum natus ut
                doloremque, dolore ullam, est eos dolorum quod nulla molestias
                ex eveniet? Cumque, eius architecto.
              </p>
            </div>
            <a href="#" className="btn btn-primary rounded-pill">
              Learn more
            </a>
          </div>
        </div>
        <div className="card col-md-4">
          <img src={featureTwo} className="card-img-top" alt="..." />
          <div className="card-body">
            <div>
              <h5 className="card-title">Insights</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                impedit autem cum accusantium! Officia, fugit? Ipsam dolore,
                temporibus eius quisquam culpa itaque accusamus ab labore
                adipisci vitae voluptatem praesentium est!
              </p>
            </div>
            <a href="#" className="btn btn-primary rounded-pill">
              Learn more
            </a>
          </div>
        </div>
        <div className="card col-md-4">
          <img src={featureThree} className="card-img-top" alt="..." />
          <div className="card-body">
            <div>
              <h5 className="card-title">Innovations</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur culpa ex deserunt autem at quaerat tenetur obcaecati
                iure assumenda blanditiis quia temporibus, laboriosam
                voluptatibus sit ea laborum? Asperiores, veniam qui!
              </p>
            </div>
            <a href="#" className="btn btn-primary rounded-pill">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
