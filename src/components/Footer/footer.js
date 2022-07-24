

function Footer() {
  return (
    <footer className="bg-dark text-center text-white ">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-1">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#3b5998"}}
            href="https://facebook.com" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#55acee"}}
            href="https://twitter.com" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#dd4b39"}}
            href="https://www.google.com" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#ac2bac"}}
            href="https://www.instagram.com" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#0082ca"}}
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <!-- Github --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{backgroundColor: "#333333"}}
            href="https://github.com/" target="_blank" rel="noreferrer"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{backgroundColor: "rgba(, 0, 0, 0.2)"}}
      >
        Copyright © 2022 
        <a className="none" href="https://devdojo.com/fun" target="_blank" rel="noreferrer"> 
        &nbsp;DevIsFun
        </a>
        &nbsp;All rights reserved
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;