import Nav from "./../components/Nav";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  let authToken = false;

  function handleClick() {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  }

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Log Off" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
