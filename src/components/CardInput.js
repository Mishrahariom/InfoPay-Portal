import CreditDebitCardFrame from "./CreditDebitCardFrame";
import CreditDebitCard from "./CreditDebitCard";
import "./CardInput.css";

const CardInput = () => {
  return (
    <section className="card-input">
      <form className="payment-method-frame2">
        <div className="heading9">
          <h2 className="paragraph">Select your mode of payment</h2>
        </div>
        <div className="paragpraph-wrapper">
          <div className="paragpraph2">
            <div className="input-addon">
              Payments with Tickete are secure and encrypted.
            </div>
          </div>
        </div>
        <div className="payment-method-wrapper">
          <div className="payment-method1">
            <div className="text-input-floating-label-parent">
              <div className="text-input-floating-label5">
                <div className="input-add-on25">
                  <img
                    className="card-icon"
                    loading="eager"
                    alt=""
                    src="/card.svg"
                  />
                </div>
                <div className="credit-debit">{`Credit & debit card`}</div>
              </div>
              <img
                className="radio-icon"
                loading="eager"
                alt=""
                src="/radio.svg"
              />
            </div>
            <div className="logos1">
              <div className="visa">
                <img
                  className="visa-icon"
                  loading="eager"
                  alt=""
                  src="/visa.svg"
                />
              </div>
              <img
                className="mastercard-icon"
                loading="eager"
                alt=""
                src="/mastercard.svg"
              />
              <img
                className="mastercard-icon"
                loading="eager"
                alt=""
                src="/dinersclub.svg"
              />
            </div>
            <div className="text-input-floating">
              <div className="label-wrapper">
                <div className="text-input-floating-label6">
                  <div className="input8">
                    <div className="input-add-on26">
                      <div className="text28">Text</div>
                    </div>
                    <div className="value13">
                      <div className="text29">Name on card</div>
                      <div className="separator">*</div>
                    </div>
                    <div className="input-add-on27">
                      <img
                        className="diamond-icon21"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint11">
                    <div className="hint-text11">Hint text</div>
                  </div>
                </div>
                <div className="text-input-floating-label6">
                  <div className="input9">
                    <div className="input-add-on25">
                      <img className="card-icon" alt="" src="/card.svg" />
                    </div>
                    <div className="value14">
                      <div className="link4">Card number</div>
                      <div className="separator">*</div>
                    </div>
                    <div className="input-add-on27">
                      <img
                        className="diamond-icon21"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint11">
                    <div className="hint-text11">Hint text</div>
                  </div>
                </div>
              </div>
              <div className="label-wrapper">
                <div className="text-input-floating-label6">
                  <div className="input8">
                    <div className="input-add-on26">
                      <div className="text28">Text</div>
                    </div>
                    <div className="value13">
                      <div className="text31">Expiry date</div>
                      <div className="separator">*</div>
                    </div>
                    <div className="input-add-on27">
                      <img
                        className="diamond-icon21"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint11">
                    <div className="hint-text11">Hint text</div>
                  </div>
                </div>
                <div className="text-input-floating-label6">
                  <div className="input8">
                    <div className="input-add-on26">
                      <div className="text28">Text</div>
                    </div>
                    <div className="value13">
                      <div className="text31">{`<CVV/CVC>`}</div>
                      <div className="separator">*</div>
                    </div>
                    <div className="input-add-on27">
                      <img
                        className="diamond-icon21"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                  <div className="hint11">
                    <div className="hint-text11">Hint text</div>
                  </div>
                </div>
              </div>
            </div>
            <CreditDebitCardFrame
              cardTextInputValue="Total payable:"
              piggyBank="/piggybank-1.svg"
              buttonFrame={`You save <price>`}
              diamond="/diamond.svg"
              diamond2="/diamond.svg"
              propGap="2px"
              propFlexDirection="row"
              propFlexWrap="wrap"
              propRowGap="20px"
              propAlignSelf="unset"
              propGap1="6px"
              propFlex="1"
              propMinWidth="170px"
              propDisplay="inline-block"
              propDisplay1="inline-block"
              propBackgroundColor="#299764"
              propPadding="4px 7px"
              propColor="#e9f9ee"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
              propDisplay4="inline-block"
              propAlignSelf1="unset"
              propWidth="220px"
              propMinWidth1="220px"
              propTextAlign="center"
              propDisplay5="inline-block"
            />
          </div>
        </div>
        <CreditDebitCard
          applePay="/applepay.svg"
          propPadding="0px 0px var(--padding-xl)"
        />
        <CreditDebitCard applePay="/googlepay.svg" propPadding="0px 0px 32px" />
        <div className="divider3">
          <div className="divider-item" />
        </div>
      </form>
    </section>
  );
};

export default CardInput;
