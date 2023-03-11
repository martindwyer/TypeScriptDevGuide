import React from 'react';
import logo from '../../assets/images/logo.svg';
import homePhoto from '../../assets/images/app-1.png';

function Jumbotron() {
  return (
    <div className="jumbotron row">
      <div className="col-md-6 site-info">
        <div>
          <h1 className="heading">Website Template</h1>
          <p className="heading--tagline">
            from <span className="logo-font">md</span>{' '}
            <span className="name-font">Web Technologies</span>
          </p>
          <div className="col-md-6 jumbotron-header">
            <img src={logo} className="jumbotron-logo site-logo" alt="logo" />
          </div>
        </div>

        <a
          href="https://reactjs.org/tutorial/tutorial.html"
          id="home-learn-button"
          className="jumbotron-link btn btn-primary rounded-pill"
        >
          Learn React
        </a>
      </div>
      <div className="col-md-6 site-info">
        <img src={homePhoto} alt="home photo" className="img-fluid" />
        <p className="jumbo-promo">Flexible high performance website</p>
      </div>
    </div>
  );
}

export default Jumbotron;
