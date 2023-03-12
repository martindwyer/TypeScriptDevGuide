import React, { Component } from 'react';
import globalCompanyPic1 from '../../assets/images/about-3.png';
import globalCompanyPic2 from '../../assets/images/about-6.png';
import globalCompanyPic3 from '../../assets/images/about-8.png';

export const WhoWeAre = () => {
  return (
    <div className="container who-we-are" id="who-we-are-section">
      <div className="overview">
        <h3 className="heading--section animate__animated animate__fadeInRightBig">
          <span className="logo-font">md</span> Web Technologies&nbsp;
          <i className="fa-solid fa-earth-americas"></i>
        </h3>
      </div>

      <div className="row" id="who-we-are-global">
        <div className="col-lg-6 community-content animate__animated animate__fadeInUpBig">
          <div className="content">
            <p>
              Headquartered in Cedar Rapids, Iowa, MD Web Technologies lives and
              breaths by the power of the global freelance market for
              development services.
            </p>
            <p>
              According to a{' '}
              <a
                href="https://flexiple.com/freelance/freelance-statistics-and-trends-2020/"
                target="_blank"
                rel="noreferrer"
              >
                recent study
              </a>
              ,{' '}
              <b>freelance employees currently total 58 million in the U.S.</b>
              &nbsp;and are poised to become the majority of the workforce by
              2027. The same study reports that Google employs more freelancers
              (120,000) than they have permanent employees (102,000). Moreover,
              nearly <b>50% of all businesses</b> use freelance support.{' '}
            </p>

            <p>
              {' '}
              At times, we are working collaboratively for others on sites such
              as{' '}
              <a href="https://upstackhq.com/" target="_blank" rel="noreferrer">
                UpStack
              </a>
              ,&nbsp;
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noreferrer"
              >
                UpWork
              </a>
              ,&nbsp;
              <a
                href="https://www.toptal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Toptal
              </a>
              , or{' '}
              <a href="https://www.guru.com/" target="_blank" rel="noreferrer">
                Guru
              </a>
              . At other times, we are including other developers in our
              projects. And at times, depending on work flow or type, some
              projects are done completely in house.
            </p>
            <p>
              Using the freelance marketplace both as a source of revenue and
              resources as needed offers many benefits:
            </p>
          </div>
        </div>
        <div className="col-lg-6 community-content">
          <div className="global-company-image animate__animated animate__fadeInLeftBig">
            <img
              src={globalCompanyPic1}
              alt="global company"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="global-company-image">
            <img
              src={globalCompanyPic3}
              alt="global company"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <h3 className="heading--section">
              With Global Advantages&nbsp;
              <i className="fa-solid fa-earth-asia"></i>
            </h3>
          </div>
          <div className="content">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Global Market</span>. First and
                foremost, offering our services on freelance marketplaces
                provides us with a global marketplace in which to provide our
                services and generate income. In today's world there is no need
                for corporate activity to be slowed due to regional or even
                national events. Only global factors drive success.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Flexibility</span>. Using
                freelance support on a project by project basis provides
                organizational flexibility. As needs arise, there is sufficient
                capacity to find suitable resources. In the case of a shortfall
                of available talent, we have several reliable suppliers of
                contract programming services.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Expertise</span>. Freelance
                markets have abundant expertise in every area, including the
                wide ranging technologies used in web development. Whether
                ASP.NET or Java Spring Boot, React or Angular, specialists can
                be found in the broad freelance marketplace.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Perspective</span>. Many of our
                conversations and collaborations are with people from around the
                world who offer unique and valuable new perspectives to our
                projects.
              </li>
            </ul>
            <p>
              We are firmly committed to the plain facts. Freelance markets were
              surging before the Covid-19 pandemic. Freelance marketplaces
              continue to surge and will continue to grow in proportion to the
              workforce. The world will never be the same. It will be much
              better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
