import "./login.css"

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="logoLogin">Logo Social</span>
          <span className="Login">Connect with friends and the world</span>
        </div>
        <div className="loginRight">
                  <input placeholder="Email" />
                  <input placeholder="PassWord" />
                  <button className="loginbtn">Log In</button>
                  <button className="loginForgot">Forgod Password?</button>
                  <button className="loginNew">Create a New Account</button>
        </div>
      </div>
    </div>
  );
}
