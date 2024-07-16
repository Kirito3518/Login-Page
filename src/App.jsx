import InputField from "./componets/InputField";
import SocialLogin from "./componets/SocialLogin";

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />

      <p className="separator">
        <span>or</span>
      </p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forgot-pass-link">
          Forgot Password?
        </a>
        <button className="login-button">Login</button>

        <p className="signup-text">
          Don`t have an account? <a href="#">Signup Now!</a>
        </p>
      </form>
    </div>
  );
};

export default App;
