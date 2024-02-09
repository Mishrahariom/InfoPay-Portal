import "./CardInputGroup.css";

const CardInputGroup = () => {
  return (
    <section className="card-input-group">
      <div className="background">
        <div className="background1" />
        <div className="credit-debit-card-frame">
          <img
            className="actions-icon"
            loading="eager"
            alt=""
            src="/actions.svg"
          />
        </div>
        <div className="address-bar">
          <div className="address-bar-background" />
          <div className="label-frame">
            <img className="secure-icon" alt="" src="/secureicon.svg" />
            <div className="url">https://www.tickete.com</div>
          </div>
          <img className="favorite-icon" alt="" src="/favorite.svg" />
        </div>
        <div className="f-a-q-question-unit-frame">
          <img className="user-icon" alt="" />
        </div>
        <img className="menu-icon" alt="" src="/menu.svg" />
      </div>
      <div className="header">
        <div className="footer-main">
          <img className="logo-icon" loading="eager" alt="" src="/logo.svg" />
          <div className="link">
            <img className="lock-icon" loading="eager" alt="" src="/lock.svg" />
            <div className="icon-wrapper">Checkout</div>
            <img className="diamond-icon" alt="" src="/diamond.svg" />
          </div>
          <div className="title-text">
            <div className="title-text-child" />
            <div className="globesimple-parent">
              <img className="lock-icon" alt="" src="/globesimple.svg" />
              <div className="en">EN</div>
              <div className="div">/</div>
              <div className="usd">USD</div>
            </div>
            <div className="button-instance">
              <img className="lock-icon" alt="" src="/question.svg" />
              <div className="help">Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-timer">
        <div className="holding-your-tickets">
          Holding your tickets for 30:00
        </div>
      </div>
    </section>
  );
};

export default CardInputGroup;
