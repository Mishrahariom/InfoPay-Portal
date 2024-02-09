import { useMemo } from "react";
import "./CreditDebitCardFrame.css";

const CreditDebitCardFrame = ({
  cardTextInputValue,
  piggyBank,
  buttonFrame,
  diamond,
  diamond2,
  propGap,
  propFlexDirection,
  propFlexWrap,
  propRowGap,
  propAlignSelf,
  propGap1,
  propFlex,
  propMinWidth,
  propDisplay,
  propDisplay1,
  propBackgroundColor,
  propPadding,
  propColor,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propAlignSelf1,
  propWidth,
  propMinWidth1,
  propTextAlign,
  propDisplay5,
}) => {
  const radioButtonsFrameStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const logosFrameStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      flexWrap: propFlexWrap,
      rowGap: propRowGap,
    };
  }, [propFlexDirection, propFlexWrap, propRowGap]);

  const visaMastercardDinersclubLogStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap1,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propGap1, propFlex, propMinWidth]);

  const cardTextInputStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const textStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const badgeStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const buttonFrameStyle = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay2,
    };
  }, [propColor, propDisplay2]);

  const questionUnitStyle = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const byClickingConfirmContainerStyle = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const buttonStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf1, propWidth, propMinWidth1]);

  const answerAreaStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      display: propDisplay5,
    };
  }, [propTextAlign, propDisplay5]);

  return (
    <div className="credit-debit-card-frame1">
      <div className="radio-buttons-frame" style={radioButtonsFrameStyle}>
        <div className="logos-frame" style={logosFrameStyle}>
          <div
            className="visa-mastercard-dinersclub-log"
            style={visaMastercardDinersclubLogStyle}
          >
            <div className="heading">
              <div className="card-text-input" style={cardTextInputStyle}>
                {cardTextInputValue}
              </div>
            </div>
            <div className="heading1">
              <div className="text" style={textStyle}>
                $XXX
              </div>
            </div>
          </div>
          <div className="badge" style={badgeStyle}>
            <img className="piggybank-icon" alt="" src={piggyBank} />
            <div className="button-frame" style={buttonFrameStyle}>
              {buttonFrame}
            </div>
            <img className="diamond-icon1" alt="" src={diamond} />
          </div>
        </div>
        <div className="link1">
          <img className="diamond-icon2" alt="" src="/diamond.svg" />
          <div className="question-unit" style={questionUnitStyle}>
            You will be charged in AED
          </div>
          <img className="info-icon" alt="" src="/info-1.svg" />
        </div>
      </div>
      <div className="f-a-q-section-header">
        <div
          className="by-clicking-confirm-container"
          style={byClickingConfirmContainerStyle}
        >
          <span>{`By clicking “confirm & pay”, you agree to `}</span>
          <span className="ticketes-general-terms">
            Tickete’s general terms and conditions
          </span>
          <span>{` and `}</span>
          <span className="ticketes-general-terms">cancellation policy</span>
          <span>.</span>
        </div>
        <div className="button" style={buttonStyle}>
          <img className="lock-icon1" alt="" src="/lock-1.svg" />
          <div
            className="answer-area"
            style={answerAreaStyle}
          >{`Confirm & pay`}</div>
          <img className="diamond-icon3" alt="" src={diamond2} />
        </div>
      </div>
    </div>
  );
};

export default CreditDebitCardFrame;
