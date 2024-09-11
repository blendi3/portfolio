import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-500">Portfolio of Blendi Ivanja</p>

      <div className="flex gap-3">
        <a href="https://github.com/blendi3" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedIn.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="mailto:blendiivanja2@gmail.com" target="_blank">
          <div className="social-icon">
            <img src="/assets/gmail.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© 2024 Blendi. All rights reserved.</p>
    </section>
  );
};

export default Footer;
