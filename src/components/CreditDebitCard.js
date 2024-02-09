import { useMemo } from "react";
import "./CreditDebitCard.css";

const CreditDebitCard = ({ applePay, propPadding }) => {
  const creditDebitCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="credit-debit-card2" style={creditDebitCardStyle}>
      <div className="payment-method">
        <div className="apple-pay-google-pay">
          <div className="heading-frame7">
            <div className="input-add-on24">
              <img className="apple-pay-icon" alt="" src={applePay} />
            </div>
            <div className="apple-pay">Coming soon</div>
          </div>
          <div className="radio" />
        </div>
      </div>
    </div>
  );
};

export default CreditDebitCard;
