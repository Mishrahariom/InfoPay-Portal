import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="main-footer">
        <div className="logo-frame">
          <img className="logo-icon1" alt="" src="/logo-1.svg" />
        </div>
        <div className="footer-textline">
          <div className="copyright-notice" />
          <div className="footer-logo-container">
            <div className="footer-line">
              <div className="made-with">Made with ❤️</div>
              <div className="div9">•</div>
              <div className="link5">
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
                <div className="question-unit4">Privacy policy</div>
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
              </div>
              <div className="div9">•</div>
              <div className="link5">
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
                <div className="text39">Terms of usage</div>
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
              </div>
              <div className="div9">•</div>
              <div className="link5">
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
                <div className="text40">Cancellation policy</div>
                <img className="diamond-icon31" alt="" src="/diamond.svg" />
              </div>
              <div className="div9">•</div>
              <div className="f-a-q2">Sitemap</div>
            </div>
            <div className="socials">
              <div className="instagramlogo-wrapper">
                <img
                  className="instagramlogo-icon"
                  alt=""
                  src="/instagramlogo.svg"
                />
              </div>
              <div className="tiktoklogo-wrapper">
                <img
                  className="instagramlogo-icon"
                  alt=""
                  src="/tiktoklogo.svg"
                />
              </div>
              <div className="tiktoklogo-wrapper">
                <img
                  className="instagramlogo-icon"
                  alt=""
                  src="/facebooklogo.svg"
                />
              </div>
              <div className="tiktoklogo-wrapper">
                <img
                  className="instagramlogo-icon"
                  alt=""
                  src="/twitterlogo.svg"
                />
              </div>
              <div className="tiktoklogo-wrapper">
                <img
                  className="instagramlogo-icon"
                  alt=""
                  src="/linkedinlogo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
