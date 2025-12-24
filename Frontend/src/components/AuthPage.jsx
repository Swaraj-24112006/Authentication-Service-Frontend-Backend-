import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import "./AuthPage.css";

async function handleGoogleLogin(credentialResponse, setLoading, setError) {
  try {
    setLoading(true);
    const res = await axios.post(
      "http://localhost:3000/api/auth/google",
      { token: credentialResponse?.credential },
      { withCredentials: true }
    );

    console.log(res.data);
    alert("Google login successful");
  } catch (err) {
    console.error(err);
    setError("Google login failed");
  } finally {
    setLoading(false);
  }
}

function AuthPage() {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({ email: "", password: "", fullname: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(`http://localhost:3000/api/auth/${mode}`, formData, { withCredentials: true });
      alert(`${mode} successful`);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-root">
      <div className="auth-container">
        <div className="auth-left">
          <div className="brand-section">
            <h1 className="brand-title">Auth-Service</h1>
            <p className="brand-subtitle">Fast, secure, and simple authentication</p>
          </div>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <p>Enterprise-grade security</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <p>Quick and seamless login</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🌐</span>
              <p>Multi-provider support</p>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h2 className="auth-title">{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
            <p className="auth-subtitle">{mode === "login" ? "Sign in to your account" : "Join us today"}</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              {mode === "register" && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  minLength={6}
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button className="btn-submit" type="submit" disabled={loading}>
                {loading ? "Processing..." : mode === "login" ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="oauth-container">
              <GoogleLogin
                onSuccess={credentialResponse => handleGoogleLogin(credentialResponse, setLoading, setError)}
                onError={() => setError("Google Login Failed")}
              />
            </div>

            <p className="auth-footer">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="link-btn"
                onClick={() => setMode(mode === "login" ? "register" : "login")}
              >
                {mode === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
