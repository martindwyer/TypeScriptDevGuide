import React, { useState, useEffect } from 'react';

export const CookiesApproval = () => {
  const [cookiesApproved, setCookiesApproved] = useState(false);

  let cookieDisclosure: HTMLButtonElement | null;

  const cookiesApproval = () => {
    if (window !== null && cookieDisclosure) {
      cookieDisclosure.style.display = 'none';
      setCookiesApproved(true);
    }
  };

  useEffect(() => {
    // Track the approval of cookies and privacy settings
    cookieDisclosure = document.querySelector('#cookie-disclosure');

    setTimeout(() => {
      console.dir(cookieDisclosure);
      if (cookieDisclosure && !cookiesApproved) {
        cookieDisclosure.style.display = 'flex';
      }
    }, 2000);
  }, [cookiesApproved]);

  return (
    <div
      id="cookie-disclosure"
      className="animate__animated animate__zoomInDown"
    >
      <p>
        We use cookies to ensure you have the best browsing experience on our
        website. By using our site, you acknowledge that you have read and
        understood our
        <a href="/privacy" className="cookie-link">
          Privacy Policy
        </a>{' '}
        and
        <a href="/terms" className="cookie-link">
          Universal Terms of Service.
        </a>
      </p>
      {!cookiesApproved ? (
        <button onClick={() => cookiesApproval()}>Proceed to Site</button>
      ) : null}
    </div>
  );
};
