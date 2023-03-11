import logo from '../../assets/images/logo.svg';

export const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <footer className="row border-top py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="row created-by">
              <p>
                Created by <span className="logo-font">md</span>{' '}
                <span className="name-font">Web Technologies</span>
              </p>
            </div>
            <div className="row open-source-icons">
              <h6>Powered by:</h6>

              <a
                href="https://reactjs.org/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i className="fa-brands fa-react" title="React.Js"></i>
              </a>
              <a
                href="https://getbootstrap.com/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i className="fa-brands fa-bootstrap" title="Bootstrap"></i>
              </a>
              <a
                href="https://sass-lang.com/dart-sass"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i className="fa-brands fa-sass" title="Dart Sass"></i>
              </a>
              <a
                href="https://fontawesome.com/icons/js?s=&f=brands"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i
                  className="fa-brands fa-font-awesome"
                  title="FontAwesome"
                ></i>
              </a>
              <a
                href="https://www.typescriptlang.org/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i
                  className="fa-brands fa-js"
                  title="JavaScript and TypeScript"
                ></i>
              </a>
              <a
                href="https://nodejs.org/en/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <i className="fa-brands fa-node" title="Node.js"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <h5>Technologies</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://reactjs.org/"
                  className="nav-link p-0 text-white"
                >
                  React.js
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://getbootstrap.com/"
                  className="nav-link p-0 text-white"
                >
                  Bootstrap
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://sass-lang.com/dart-sass"
                  className="nav-link p-0 text-white"
                >
                  Dart Sass
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://nodejs.org/en/"
                  className="nav-link p-0 text-white"
                >
                  Node.js
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.typescriptlang.org/"
                  className="nav-link p-0 text-white"
                >
                  TypeScript
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://fontawesome.com/"
                  className="nav-link p-0 text-white"
                >
                  FontAwesome
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h5>Pages</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 text-white">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/faq" className="nav-link p-0 text-white">
                  FAQ
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contact" className="nav-link p-0 text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h5>Sites</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  MD Web Technologies
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  MIT College
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  North Park
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  CC Reads
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 site-logo-holder">
            <img
              src={logo}
              alt="site logo in footer"
              className="site-logo"
              height="75"
            />
          </div>
        </div>
        <div className="row text-center">
          <p>
            &copy;2023 <span className="logo-font">md</span> Web Technologies
          </p>
        </div>
      </footer>
    </div>
  );
};
