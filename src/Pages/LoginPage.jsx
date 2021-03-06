import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();
  const [password, setPassword] = useState();

  const navi = useNavigate();
  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios.post("https://19e5-2405-201-4017-2902-b1f0-a0bb-3300-389b.ngrok.io/user/signin", { email, password })
      .then(response => {
        const res = response.data.data
        console.log(res);
        setToken(res.token)
        console.log(token)
        if (res.token) {
          sessionStorage.setItem('token', token);
          navi('/dashboard')
        }
        else {
          alert('invalid user')
        }
      })
      .catch(error => {
        console.log("error", error)
      });

  }
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#139487' }}>
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className='text-dark fs-2 mt-0 p-2'>LOGIN</div>
              <form className='d-flex flex-column p-2'>
                <div className="form-outline mb-4 ">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input type="email" id="email" name='email' className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="form-outline mb-3 ">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="form-check mb-0 ">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" onClick={onSubmitLogin} className="btn btn-primary btn-lg"
                  >Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                    className="link-danger">Register</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
