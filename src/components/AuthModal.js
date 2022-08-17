import { useState } from "react";

function AuthModal({ setShowModal, isSignUp, setIsSignUp }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  function handleClick() {
    setShowModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //TRY AND CATCH??
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match");
      }
      console.log("make a post request to our database");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(email, password, confirmPassword);
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "Create an Account" : "Log in"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="submit-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
}

export default AuthModal;
