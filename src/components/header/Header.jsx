import "./header.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Header = ({ open, setOpenMenu }) => {
  return (
    <header className={"header " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mary.na
          </a>
          <div className="info-container">
            <PhoneIcon className="icon" />
            <span>+380977493558</span>
          </div>
          <div className="info-container">
            <EmailIcon className="icon" />
            <span>dubinamarina777@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setOpenMenu(!open);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
