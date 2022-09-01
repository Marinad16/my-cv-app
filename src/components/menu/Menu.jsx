import "./menu.scss";

const Menu = ({ open, setOpenMenu }) => {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
