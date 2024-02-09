import CreditDebitCardFrame from "./CreditDebitCardFrame";
import "./LogosContainer.css";

const LogosContainer = () => {
  return (
    <section className="logos-container">
      <div className="visa-mastercard-dinersclub">
        <div className="frame-card-input">
          <div className="text-input-value">
            <div className="heading2">
              <h1 className="section-message-container">{`Confirm & pay`}</h1>
            </div>
            <div className="section-message">
              <div className="border" />
              <div className="conteiner">
                <div className="icon-wrapper1">
                  <img
                    className="shieldcheck-icon"
                    alt=""
                    src="/shieldcheck.svg"
                  />
                </div>
                <div className="content">
                  <div className="text-wrapper">
                    <div className="title">Free cancellation</div>
                    <div className="description">
                      Tickets can be cancelled by 13th December, 2022.
                    </div>
                  </div>
                  <div className="actions">
                    <div className="button1">
                      <img
                        className="diamond-icon4"
                        alt=""
                        src="/diamond.svg"
                      />
                      <div className="text1">Action</div>
                      <img
                        className="diamond-icon4"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                    <div className="buttonoutlinebrandactivesm">
                      <img
                        className="diamond-icon4"
                        alt=""
                        src="/diamond.svg"
                      />
                      <div className="text1">Action</div>
                      <img
                        className="diamond-icon4"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="close-button">
                  <img className="shieldcheck-icon" alt="" src="/info.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent">
            <div className="logo-instance">
              <div className="heading3">
                <h2 className="about-illustrations">Enter your details</h2>
              </div>
              <div className="paragpraph">
                <div className="text3">
                  We'll be sending your tickets to the details below. Booking
                  for a friend? Add their details.
                </div>
              </div>
            </div>
            <div className="payment-method-frame">
              <div className="card-input-frame">
                <div className="text-input-floating-label">
                  <div className="input">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value">
                      <div className="heading-frame">Full name</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="dropmenu-add-on">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">Same as on your ID</div>
                  </div>
                </div>
              </div>
              <div className="card-input-frame1">
                <div className="select-floating-label">
                  <div className="input1">
                    <div className="input-add-on2">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/globehemispherewest.svg"
                      />
                    </div>
                    <div className="value1">
                      <div className="answer-frame">Country code</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="input-add-on2">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/caretdown.svg"
                      />
                    </div>
                  </div>
                  <div className="hint1">
                    <div className="hint-text">Hint text</div>
                  </div>
                </div>
                <div className="text-input-floating-label1">
                  <div className="input2">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value">
                      <div className="f-a-q">Phone number</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="dropmenu-add-on">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text2">
                      We may reach out for booking updates here over
                      SMS/Whatsapp
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-input-frame2">
                <div className="select-floating-label">
                  <div className="input2">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value">
                      <div className="text7">Email</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="dropmenu-add-on">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">
                      We'll send your tickets here
                    </div>
                  </div>
                </div>
                <div className="select-floating-label">
                  <div className="input2">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value">
                      <div className="text9">Confirm email</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="dropmenu-add-on">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">
                      Just to ensure we've got this right
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">
              <div className="divider-child" />
            </div>
          </div>
          <div className="frame-parent">
            <div className="logo-instance">
              <div className="heading3">
                <h2 className="about-illustrations">Additional information</h2>
              </div>
              <div className="paragpraph">
                <div className="text3">
                  We need a few more details to complete your reservation.
                </div>
              </div>
            </div>
            <div className="payment-method-frame">
              <div className="card-input-frame2">
                <div className="select-floating-label">
                  <div className="input2">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value">
                      <div className="question-unit-frame">Input label</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="dropmenu-add-on">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">Hint text</div>
                  </div>
                </div>
                <div className="select-floating-label">
                  <div className="input1">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value6">
                      <div className="info-frame">Select</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="input-add-on2">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/caretdown.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">Hint text</div>
                  </div>
                </div>
              </div>
              <div className="heading-frame2">
                <div className="select-floating-label2">
                  <div className="input7">
                    <div className="input-add-on">
                      <div className="text4">Text</div>
                    </div>
                    <div className="value7">
                      <div className="text14">Multiselect</div>
                      <div className="section-message-frame">*</div>
                    </div>
                    <div className="input-add-on2">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/caretdown.svg"
                      />
                    </div>
                  </div>
                  <div className="hint">
                    <div className="hint-text">Hint text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-summary">
          <div className="frame-set-frame">
            <div className="plus-symbol-frame">
              <div className="gallery">
                <div className="image-w-blur">
                  <img
                    className="credit-debit-card"
                    alt=""
                    src="/credit-debit-card@2x.png"
                  />
                  <img
                    className="credit-debit-card1"
                    alt=""
                    src="/credit-debit-card@2x.png"
                  />
                </div>
                <div className="logos">
                  <div className="pagination-indicator-group">
                    <div className="pagination-indicator">
                      <div className="vector" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector1" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector1" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector3" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector1" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector1" />
                    </div>
                    <div className="pagination-indicator">
                      <div className="vector" />
                    </div>
                  </div>
                </div>
                <div className="link2">
                  <div className="byclicking-confirm-pay">
                    <div className="upsell-booster">
                      <div className="badge1">
                        <img className="trophy-icon" alt="" src="/trophy.svg" />
                        <div className="question-unit1">Bestseller</div>
                        <img
                          className="diamond-icon13"
                          alt=""
                          src="/diamond.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-arrow-group">
                    <div className="carousel-arrow">
                      <img
                        className="shieldcheck-icon"
                        alt=""
                        src="/caretleft.svg"
                      />
                    </div>
                    <div className="carousel-arrow">
                      <img
                        className="shieldcheck-icon"
                        alt=""
                        src="/caretright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="question-unit-parent">
                  <div className="question-unit2">
                    <div className="rating-review-badge">
                      <img
                        className="trophy-icon"
                        alt=""
                        src="/rating-star.svg"
                      />
                      <div className="visa-mastercard-logos">
                        <div className="line">4.9</div>
                        <div className="k">(4.5k)</div>
                      </div>
                    </div>
                    <div className="div5">•</div>
                    <div className="category">{`<category>`}</div>
                  </div>
                  <div className="experience-name">
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </div>
                </div>
                <div className="card-input-value">
                  <div className="heading-frame3">
                    <div className="input-add-on16">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/ticket.svg"
                      />
                    </div>
                    <div className="button-lock-frame">
                      <div className="heading5">
                        <div className="f-a-q1">{`<ticket type - variant>`}</div>
                      </div>
                      <div className="hint8">
                        <div className="hint-text8">{`Duration: <duration>`}</div>
                      </div>
                    </div>
                    <div className="input-add-on17">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/pencilsimpleline.svg"
                      />
                    </div>
                  </div>
                  <div className="heading-frame3">
                    <div className="input-add-on16">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/calendarblank.svg"
                      />
                    </div>
                    <div className="button-lock-frame">
                      <div className="heading5">
                        <div className="f-a-q1">{`<day>, <month> <date>`}</div>
                      </div>
                      <div className="hint9">
                        <div className="hint-text9">{`Duration: <duration>`}</div>
                      </div>
                    </div>
                    <div className="input-add-on17">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/pencilsimpleline.svg"
                      />
                    </div>
                  </div>
                  <div className="heading-frame3">
                    <div className="input-add-on16">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/clock.svg"
                      />
                    </div>
                    <div className="button-lock-frame">
                      <div className="heading5">
                        <div className="f-a-q1">{`<time>`}</div>
                      </div>
                      <div className="hint9">
                        <div className="hint-text10">{`Operating hours: <time> to <time>`}</div>
                      </div>
                    </div>
                    <div className="input-add-on17">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/pencilsimpleline.svg"
                      />
                    </div>
                  </div>
                  <div className="heading-frame3">
                    <div className="input-add-on16">
                      <img
                        className="globehemispherewest-icon"
                        loading="eager"
                        alt=""
                        src="/users.svg"
                      />
                    </div>
                    <div className="button-lock-frame">
                      <div className="heading5">
                        <div className="f-a-q1">5 guests</div>
                      </div>
                    </div>
                    <div className="input-add-on17">
                      <img
                        className="globehemispherewest-icon"
                        alt=""
                        src="/pencilsimpleline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-line-frame">
              <div className="divider1">
                <div className="tabs-bar-frame" />
              </div>
              <div className="footer-container">
                <div className="link3">
                  <img className="diamond-icon14" alt="" src="/diamond.svg" />
                  <div className="card-input-section">View payment summary</div>
                  <img className="diamond-icon14" alt="" src="/diamond.svg" />
                </div>
                <img className="shieldcheck-icon" alt="" src="/plus.svg" />
              </div>
              <div className="dropmenu-option-parent">
                <div className="dropmenu-option">
                  <div className="dropmenu-add-on">
                    <img
                      className="globehemispherewest-icon"
                      alt=""
                      src="/diamond.svg"
                    />
                  </div>
                  <div className="value8">
                    <div className="text18">2 Adult</div>
                  </div>
                  <div className="dropmenu-add-on1">
                    <div className="text19">$140</div>
                  </div>
                </div>
                <div className="dropmenu-option">
                  <div className="dropmenu-add-on">
                    <img
                      className="globehemispherewest-icon"
                      alt=""
                      src="/diamond.svg"
                    />
                  </div>
                  <div className="value8">
                    <div className="text18">{`<x <pay type>>`}</div>
                  </div>
                  <div className="dropmenu-add-on1">
                    <div className="text21">$XXX</div>
                  </div>
                </div>
                <div className="dropmenu-option2">
                  <div className="dropmenu-add-on">
                    <img
                      className="globehemispherewest-icon"
                      alt=""
                      src="/diamond.svg"
                    />
                  </div>
                  <div className="value8">
                    <div className="text18">Tickete discount</div>
                  </div>
                  <div className="dropmenu-add-on5">
                    <div className="text21">- $20</div>
                  </div>
                </div>
                <div className="dropmenu-option2">
                  <div className="dropmenu-add-on">
                    <img
                      className="globehemispherewest-icon"
                      alt=""
                      src="/diamond.svg"
                    />
                  </div>
                  <div className="value8">
                    <div className="text18">{`<discount type>`}</div>
                  </div>
                  <div className="dropmenu-add-on5">
                    <div className="text21">$XXX</div>
                  </div>
                </div>
                <div className="dropmenu-option">
                  <div className="dropmenu-add-on">
                    <img
                      className="globehemispherewest-icon"
                      alt=""
                      src="/diamond.svg"
                    />
                  </div>
                  <div className="value8">
                    <div className="text18">{`<fees>`}</div>
                  </div>
                  <div className="dropmenu-add-on1">
                    <div className="text21">$XXX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CreditDebitCardFrame
            cardTextInputValue="Total payable"
            piggyBank="/piggybank.svg"
            buttonFrame={`You saved <price>`}
            diamond="/diamond.svg"
            diamond2="/diamond.svg"
            propGap="16px 16px 16px 20px"
            propFlexDirection="column"
            propAlignSelf="stretch"
            propGap1="20px"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propBackgroundColor="#e9f9ee"
            propPadding="var(--spacing-sp-2) var(--spacing-sp-6)"
            propColor="#299764"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propAlignSelf1="stretch"
            propTextAlign="left"
            propDisplay5="inline-block"
          />
        </div>
      </div>
      <div className="divider">
        <div className="divider-child" />
      </div>
    </section>
  );
};

export default LogosContainer;
