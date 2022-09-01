import { useEffect, useState } from "react";
import PortfolioList from "../potrfolioList/PortfolioList";
import "./portfolio.scss";
import {
  allProjects,
  landingProjects,
  jsProjects,
  reactProjects,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All projects",
    },
    {
      id: "react",
      title: "React projects",
    },
    {
      id: "js",
      title: "JS projects",
    },
    {
      id: "landing",
      title: "Landings",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allProjects);
        break;
      case "react":
        setData(reactProjects);
        break;
      case "js":
        setData(jsProjects);
        break;
      case "landing":
        setData(landingProjects);
        break;
      default:
        setData(allProjects);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
