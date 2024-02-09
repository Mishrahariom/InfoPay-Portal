import QuestionUnit from "./QuestionUnit";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="faq-section-wrapper">
      <div className="faq-section">
        <div className="paragrapgh">
          <div className="heading11">
            <div className="button3">
              <div className="heading12">
                <h2 className="text36">Frequently asked questions</h2>
              </div>
              <div className="paragpraph3">
                <div className="text37">{`Here are some of our most asked questions. `}</div>
              </div>
            </div>
            <div className="f-a-q-header-parent">
              <div className="f-a-q-header">
                <div className="still-need-help-container">
                  <p className="still-need-help">{`Still need help? `}</p>
                  <p className="still-need-help">We’re here for you.</p>
                </div>
                <div className="button4">
                  <img className="diamond-icon29" alt="" src="/diamond.svg" />
                  <div className="text38">Chat with us</div>
                  <img className="diamond-icon29" alt="" src="/diamond.svg" />
                </div>
              </div>
              <img
                className="about-illustrations-icon"
                loading="eager"
                alt=""
                src="/about-illustrations.svg"
              />
            </div>
          </div>
          <div className="question-unit-group">
            <QuestionUnit
              plus="/plus-1.svg"
              hereAreSomeOfOurMostAsked="What should I do on my first trip to Rome?"
              absolutelyWeHaveDeveloped="A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon."
              answer={false}
              propHeight="96px"
              propHeight1="96px"
            />
            <QuestionUnit
              plus="/x.svg"
              hereAreSomeOfOurMostAsked="What are some hidden gems to see in Rome?"
              absolutelyWeHaveDeveloped="Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance."
              answer
              propHeight="unset"
              propHeight1="144px"
            />
            <QuestionUnit
              plus="/plus-1.svg"
              hereAreSomeOfOurMostAsked="How much time should I spend in Rome?"
              absolutelyWeHaveDeveloped="A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon."
              answer={false}
              propHeight="96px"
              propHeight1="96px"
            />
            <QuestionUnit
              plus="/plus-1.svg"
              hereAreSomeOfOurMostAsked="What food is Rome known for?"
              absolutelyWeHaveDeveloped="A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon."
              answer={false}
              propHeight="96px"
              propHeight1="96px"
            />
            <QuestionUnit
              plus="/plus-1.svg"
              hereAreSomeOfOurMostAsked="What is the best way to get around Rome?"
              absolutelyWeHaveDeveloped="A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon."
              answer={false}
              propHeight="96px"
              propHeight1="96px"
            />
          </div>
        </div>
        <div className="faq-section-child" />
      </div>
    </section>
  );
};

export default FrameComponent;
