import logo from "../images/Tinder-logo.png";
import minimalLogo from "../images/tinder-minimal.png";

function Nav({ minimal, authToken, setShowModal, setIsSignUp }) {
  function handleClick() {
    setShowModal(true);
    setIsSignUp(false);
  }
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? logo : minimalLogo}
          alt="Tinder Logo"
        />
      </div>
      {/* <a href="">Products</a>
      <a href="">Learn</a>
      <a href="">Safety</a>
      <a href="">Support</a>
      <a href="">Downloads</a> */}
      {!authToken && !minimal && (
        <button onClick={handleClick} className="nav-button">
          Log In
        </button>
      )}
    </nav>
  );
}

export default Nav;
