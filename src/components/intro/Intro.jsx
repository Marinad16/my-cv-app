import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Maryna Dubyna</h1>
          <h2>React Developer</h2>
          <div className="buttons">
            <a href="#portfolio">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              View portfolio
            </a>
            <a href="#contact">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
