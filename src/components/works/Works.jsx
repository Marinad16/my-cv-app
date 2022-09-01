import { useState } from "react";
import "./works.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      title: "MoGo landing page",
      description:
        "First simple landing page. Adaptive, only CSS animation, using BEM methodology.",
      img: "./images/first-landing.png",
      git: "https://github.com/Marinad16/first-project",
      demo: "https://marinad16.github.io/first-project/",
    },
    {
      id: 2,
      title: "Movies website",
      img: "./images/movie-finder.png",
      description:
        "React project of movies website. Used: React, SCSS, React Router, Hooks, carousel plugin, React loader, pagination, public API.",
      git: "https://github.com/Marinad16/react-movie-finder",
      demo: "https://movies-project-react-app.herokuapp.com/",
    },
    {
      id: 3,
      title: "Image Finder",
      img: "./images/image-finder.png",
      description:
        "First image search React application. Used public API, pagination, modal plugin and scroll to the button.",
      git: "https://github.com/Marinad16/react-image-finder",
      demo: "https://image-finder.herokuapp.com/",
    },
    {
      id: 4,
      title: "Countries",
      img: "./images/countries.png",
      description:
        "Project for a country search by its partial or full name. Using vanilla JavaScript, SCSS, Handlebars templating, PNotify notification plugin, theme changing, building with Parcel.",
      git: "https://github.com/Marinad16/hw-12-countries",
      demo: "https://marinad16.github.io/hw-12-countries/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <section className="works" id="works">
      <h2>Projects</h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <img src={d.img} alt="" />
              <div className="itemContent">
                <h3>{d.title}</h3>
                <p className="description">{d.description}</p>
                <div className="buttonsContainer">
                  <a href={d.git} className="button" target="_blank">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    GitHub
                  </a>
                  <a href={d.demo} className="button" target="_blank">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick()}
      />
    </section>
  );
};

export default Works;
