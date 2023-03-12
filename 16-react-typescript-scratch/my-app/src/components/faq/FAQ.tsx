import React from 'react';
import { PageHeader } from '../layout/PageHeader';

export const FAQ = () => {
  return (
    <div className="faq">
      <PageHeader page="FAQ" icon="fa-solid fa-clipboard-question" />
      <div className="container py-5">
        <h2 className="heading--section text-center py-3">
          Frequently asked questions
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What's included with this website?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <strong>This high performance website</strong> is built with
                  your business goal's in mind.
                </p>
                <ul>
                  <li>
                    <strong>Customized content</strong> for the home, about,
                    faq, contact and privacy pages.
                  </li>
                  <li>
                    A fully functioning <strong>contact form</strong> and link
                    to an <strong>interactive map</strong> so that customers can
                    get in touch.
                  </li>
                  <li>
                    <strong>SEO optimization</strong> with objective criteria to
                    give your site the best chance of being found by search
                    engines.
                  </li>
                  <li>
                    Free <strong>web hosting</strong> options for the first
                    year.
                  </li>
                  <li>
                    Up to three hours per month for{' '}
                    <strong>site updating</strong> and editing.{' '}
                  </li>
                </ul>
                See more about options and pricing at our{' '}
                <a href="https://www.mdbytes.com/services/catalog">
                  services catalog
                </a>{' '}
                .{' '}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
