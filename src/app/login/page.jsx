'use client'
import React from "react";
import "./Login.css";

const Login = () => {
  const submitHandler = async (e) => {};

  return (
    <>
      <div className="container-login">
        <main className="main-login">
          <div className="login-bg">
            <form onSubmit={submitHandler} className="login">
              <h2 className="h2-login">Login</h2>

              <div className="content">
                <div className="input-content">
                  <div className="email">
                    <i className="fa-solid fa-user"></i>
                    <input
                      className="email-id"
                      id="email"
                      type="email"
                      name="email"
                      required
                      //   value={user.email}
                      placeholder="Email"
                      //   onChange={handleChange}
                    />
                  </div>
                  <div className="email">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      className="email-id"
                      id="password"
                      type="password"
                      name="password"
                      required
                      //   value={user.password}
                      placeholder="password"
                      //   onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="login-or actions">

                  <button type="submit" className="h3-login butt">
                      Log In
                    </button>   
                  {/* {!isLoading && (
                    <button type="submit" className="h3-login butt">
                      Log In
                    </button>
                  )}
                  {isLoading && <p className="h3-login">Sending request...</p>}
                  {wrongEmail && (
                    <h3 style={{ color: "red" }}>
                      Your Email {wrongEmail} is not valid
                    </h3>
                  )}
                  {errorMessage && (
                    <h3 style={{ color: "red" }}>{errorMessage}</h3>
                  )} */}
                </div>
              </div>

              <div className="flex flex-row gap-3">
                <div className="facebook flex flex-row">
                  <i className="fa-brands fa-google text-red-600"></i>
                  <h4 className="text-red-600">Google</h4>
                </div>
                <div className="facebook">
                  <i className="fa-brands fa-facebook-f text-blue-900"></i>
                  <h4 className="text-blue-900">Facebook</h4>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
