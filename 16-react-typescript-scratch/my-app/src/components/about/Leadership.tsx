import React, { Component } from 'react';
import martinPic from '../../assets/images/martin.jpeg';
import portfolioPic from '../../assets/images/portfolio.jpeg';

class Leadership extends Component {
  componentDidMount() {
    //document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <div className="container leadership" id="leadership-section">
        <div className="overview row" id="founder">
          <h3 className="heading--section text-center">
            Leadership&nbsp;<i className="fa-solid fa-users"></i>
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-6 leader">
            <h4 className="heading--section">Martin Dwyer</h4>
            <p>
              <img src={martinPic} alt="martin" className="img-fluid martin" />
              <span>
                <b>Founder and CEO Martin Dwyer</b> is a proven leader and
                innovator in the business world. His background includes, among
                other things, over ten years in senior leadership of Fortune 100
                companies. Martin has his Masters degree in Information
                Technology with emphasis in Software Engineering.
              </span>
            </p>
            <p>
              While consulting for GoDaddy in 2016, seeing a need for reliable
              development resources, his focus shifted entirely to software
              development, with an emphasis in web development.
            </p>

            <p>
              Reach out to Martin on{' '}
              <a href="https://www.linkedin.com/in/mdbytes" title="LinkedIn" />
              Read more about Martin, his background, and some of his latest
              projects at his{' '}
              <a href="https://mdbytes.us" title="Curriculum Vitae" />
              site.
            </p>
            <div id="portfolio-image">
              <a href="https://mdbytes.us" target="_blank" rel="noreferrer">
                <img
                  src={portfolioPic}
                  alt="mdbytes us"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 leader">
            <h4 className="heading--section">Overview</h4>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Leader</span>. Proven leader of
                teams and individuals in Fortune 100 companies for over 20 years
                guiding units and divisions that ranged from 8 to 150 team
                members.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Trainer</span>. Trained
                individuals and groups up to 150 on various technical topics
                ranging from software development, economics, finance,
                mathematics and statistics. As a corporate trainer, university
                instructor and now part-time as collegiate tutor.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Hardware Technician</span>.
                Extensive training and experience with computer hardware and
                network technologies. Experience includes building new PC's,
                rebuilding old PC's, upgrading hardware components, designing
                and configuring networks and network technologies.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Software Developer</span>. With a
                broad business background, Martin enjoys breaking down business
                problems into software opportunities with proficiency in Java,
                JSP, Servlets, Spring, Spring Boot, C#, ASP.NET MVC, Node.js,
                JavaScript and React to name a few. Being an avid Linux user for
                over twenty years, he enjoys managing his own Linux Ubuntu web
                server with NGINX and Docker container support.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="list-heading">Husband. Father. Friend</span>.
                More than any of this, Martin is firmly committed to his
                personal roles in life. Husband to Rose. Father to Hollyann,
                Kyle, Casey and Noah. Friend to those with open minds and gentle
                hearts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Leadership;
