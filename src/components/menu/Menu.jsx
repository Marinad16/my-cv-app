import "./menu.scss";

const Menu = ({ open }) => {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
